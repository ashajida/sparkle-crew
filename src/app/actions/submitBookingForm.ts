'use server';

import { ZodError, ZodType, z } from "zod";
import { options, transporter } from "../nodemailer";

type FormValues = {
    email: string,
    tel: string,
    fullName: string,
    message: string,
    subject: string
  };
  
  type FormState = {
    message: string,
    values: FormValues,
    errors: any,
  };

export const submitBookingForm = async (prevState: any, formData: FormData) => {
    const schema: ZodType<FormValues> = z.object({
      email: z.string().email(),
      tel: z.string().min(5).max(15),
      fullName: z.string().min(10),
      subject: z.string().min(5),
      message: z.string().min(5).max(100),
    });

    const fullName = formData.get('fullName');
    const tel = formData.get('tel');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = formData.get('subject');
    
    try {

      schema.parse({
        fullName,
        email,
        tel,
        message,
        subject
      });

      //await transporter.sendMail({...options, subject: 'Test', text: 'Text goes here', html: '<h1>hello World!<h1>'})

      const result = {
            values: {
              email: "",
              tel: '',
              fullName: "",
              message: "",
              subject,
            },
            errors: null,
            message: 'Successfull',
          } 
        

      return result as FormState;
    } catch (e) {
      if(e instanceof ZodError) {
      console.log(e.flatten());

        const errors = e.flatten().fieldErrors;

        return {
          errors: {
            email: errors.email?.[0] ?? '' ,
            tel: errors.tel?.[0] ?? '',
            fullName: errors.fullName?.[0] ?? '',
            message: errors.message?.[0] ?? '',
            subject: errors.subject?.[0] ?? '',
          },
          values: {
            email,
            tel,
            fullName,
            message,
            subject
          },
          message: 'Error',
        }  as FormState;
      }

      console.log(e);
    }
  };
