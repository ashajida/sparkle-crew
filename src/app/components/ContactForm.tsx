'use client';
import { useFormState } from "react-dom";
import { submitContactForm } from "../actions/actions";

const ContactForm = () => {
    const [state, formAction] = useFormState(submitContactForm, {
        message: "",
        values: {
          email: "",
          tel: '',
          fullName: "",
          message: "",
          subject: ''
        },
        errors: [],
      });
  return (
    <>
      <form action={formAction} className="w-full">
        {!state?.errors && (
          <span className="text-[#28a745]">{state?.message}</span>
        )}
        <div className="mb-4 w-full">
          <input
            type="text"
            className={`border-[1px] border-slate-100 rounded-md py-[10px] px-[16px] w-full ${
              state?.errors?.fullName && "border border-[#dc3545]"
            } `}
            placeholder="Full Name"
            name="fullName"
          />
          {state?.errors?.fullName && (
            <span className="text-[#dc3545] text-sm">{state?.errors?.fullName}</span>
          )}
        </div>
        <div className="mb-4 w-full">
          <input
            type="email"
            className={`border-[1px] border-slate-100 rounded-md py-[10px] px-[16px] w-full ${
              state?.errors?.email && "border border-[#dc3545]"
            }`}
            placeholder="Email"
            name="email"
          />
          {state?.errors?.email && (
            <span className="text-[#dc3545] text-sm">{state?.errors?.email}</span>
          )}
        </div>
        <div className="mb-4 w-full">
          <input
            type="text"
            className={`border-[1px] border-slate-100 rounded-md py-[10px] px-[16px] w-full ${
              state?.errors?.tel && "border border-[#dc3545]"
            } `}
            placeholder="Phone"
            name="tel"
          />
          {state?.errors?.tel && (
            <span className="text-[#dc3545] text-sm">{state?.errors?.tel}</span>
          )}
        </div>
        <div className="mb-4 w-full">
          <input
            type="text"
            className={`border-[1px] border-slate-100 rounded-md py-[10px] px-[16px] w-full ${
              state?.errors?.subject && "border border-[#dc3545]"
            } `}
            placeholder="Subject"
            name="subject"
          />
          {state?.errors?.subject && (
            <span className="text-[#dc3545] text-sm">{state?.errors?.subject}</span>
          )}
        </div>
        <div className="mb-4 w-full">
          <textarea
            className={`border-[1px] border-slate-100 rounded-md py-[10px] px-[16px] w-full min-h-[150px] ${
              state?.errors?.message && "border border-[#dc3545]"
            }`}
            placeholder="Message..."
            name="message"
          />
          {state?.errors?.message && (
            <span className="text-[#dc3545] text-sm">{state?.errors?.message}</span>
          )}
        </div>
        <button className="rounded-md py-[10px] px-[16px] w-full text-white font-medium uppercase bg-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;

