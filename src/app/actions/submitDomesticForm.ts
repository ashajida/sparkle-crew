"use server";

import { ZodError, ZodType, z } from "zod";
import { options, transporter } from "../nodemailer";
import { generateHtml } from "../templates/generateHtml";

type FormValues = {
  email: string;
  tel: string;
  fullName: string;
  message: string;
  roomNumber: string;
  bathroomNumber: string;
  postcode: string;
};

type FormState = {
  message: string;
  values: FormValues;
  errors: any;
};

export const submitDomesticForm = async (prevState: any, formData: FormData) => {
  const schema: ZodType<FormValues> = z.object({
    email: z.string().email(),
    tel: z.string().min(5).max(15),
    fullName: z.string().min(10),
    roomNumber: z.string().min(1),
    bathroomNumber: z.string().min(1),
    message: z.string().max(100),
    postcode: z.string().min(6).max(8),
  });

  const fullName = formData.get("fullName");
  const tel = formData.get("tel");
  const email = formData.get("email");
  const message = formData.get("message");
  const roomNumber = formData.get("roomNumber");
  const bathroomNumber = formData.get("bathroomNumber");
  const postcode = formData.get("postcode");

  try {
    schema.parse({
      fullName,
      email,
      tel,
      message,
      roomNumber,
      postcode,
      bathroomNumber,
    });

    await transporter.sendMail({...options, subject: 'Domestic Cleaning', text: 'Text goes here', html: generateHtml({
      fullName,
      email,
      tel,
      message,
      bathroomNumber,
      roomNumber,
      subject: 'Demestic Cleaning Form'
    })})

    const result = {
      values: {
        email: "",
        tel: "",
        fullName: "",
        message: "",
        roomNumber: "",
        postcode: "",
        bathroomNumber: ""
      },
      errors: null,
      message: "Successfull",
    };

    return result as FormState;
  } catch (e) {
    if (e instanceof ZodError) {
      console.log(e.flatten());

      const errors = e.flatten().fieldErrors;

      return {
        errors: {
          email: errors.email?.[0] ?? "",
          tel: errors.tel?.[0] ?? "",
          fullName: errors.fullName?.[0] ?? "",
          message: errors.message?.[0] ?? "",
          roomNumber: errors.roomNumber?.[0] ?? "",
          bathroomNumber: errors.bathroomNumber?.[0] ?? "",
          postcode: errors.postcode?.[0] ?? "",
        },
        values: {
          email,
          tel,
          fullName,
          message,
          roomNumber,
          postcode,
        },
        message: "Error",
      } as FormState;
    }

    console.log(e);
  }
};
