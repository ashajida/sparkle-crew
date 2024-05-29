"use server";

import { ZodError, ZodType, z } from "zod";
import { options, transporter } from "../nodemailer";
import { generateHtml } from "../templates/generateHtml";

type FormValues = {
  email: string;
  tel: string;
  fullName: string;
  message: string;
  postcode: string;
  days: string[];
};

type FormState = {
  message: string;
  values: FormValues;
  errors: any;
};

export const submitCommercialForm = async (prevState: any, formData: FormData) => {
  const schema: ZodType<FormValues> = z.object({
    email: z.string().email(),
    tel: z.string().min(5).max(15),
    fullName: z.string().min(10),
    message: z.string().max(100),
    postcode: z.string().min(6).max(8),
    days: z.array(z.string()).nonempty("Must select at least one day"), 
  });

  const fullName = formData.get("fullName");
  const tel = formData.get("tel");
  const email = formData.get("email");
  const message = formData.get("message");
  const postcode = formData.get("postcode");
  const days = formData.getAll("days");
  const subject = formData.get('subject');

  console.log(postcode);

  try {
    schema.parse({
      fullName,
      email,
      tel,
      message,
      postcode,
      days
    });

    await transporter.sendMail({...options, subject: 'Commercial Cleaning', text: '', html: generateHtml({
        fullName,
        email,
        tel,
        message,
        postcode,
        days,
        subject: 'Commercial Cleaning Form'
      })})

    const result = {
      values: {
        email: "",
        tel: "",
        fullName: "",
        message: "",
        postcode: "",
        days: []
      },
      errors: null,
      message: "Successfull",
    };

    return result as FormState;
  } catch (e) {
    if (e instanceof ZodError) {

      const errors = e.flatten().fieldErrors;

      return {
        errors: {
          email: errors.email?.[0] ?? "",
          tel: errors.tel?.[0] ?? "",
          fullName: errors.fullName?.[0] ?? "",
          message: errors.message?.[0] ?? "",
          postcode: errors.postcode?.[0] ?? "",
          days: errors.days?.[0] ?? "",
        },
        values: {
          email,
          tel,
          fullName,
          message,
          postcode
        },
        message: "Error",
      } as FormState;
    }

    console.log(e);
  }
};
