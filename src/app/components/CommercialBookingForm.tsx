"use client";
import Reac, {useEffect, useRef} from "react";
import { useFormState } from "react-dom";
import { submitCommercialForm } from "../actions/submitCommercialForm";

const CommercialBookingForm = () => {

  const formRef = useRef<HTMLFormElement>(null);

  const values = {
    email: "",
    tel: "",
    fullName: "",
    message: "",
    postcode: "",
    days: [],
  };

  const [state, formAction] = useFormState(submitCommercialForm, {
    message: "",
    values,
    errors: [],
  });

  useEffect(() => {
    if(!state?.errors) formRef?.current?.reset();
  }, [formRef, state])

  return (
    <>
      <form action={formAction} ref={formRef}>
        {!state?.errors && (
          <span className="text-[#28a745]">{state?.message}</span>
        )}
        <div className="mb-4 w-full">
          <input value="Commercial Booking Form" name="subject" hidden />
          <input
            type="text"
            className={`border-[1px] border-slate-100 rounded-md py-[10px] px-[16px] w-full ${
              state?.errors?.fullName && "border border-[#dc3545]"
            } `}
            placeholder="Full Name"
            name="fullName"
          />
          {state?.errors?.fullName && (
            <span className="text-[#dc3545] text-sm">
              {state?.errors?.fullName}
            </span>
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
            <span className="text-[#dc3545] text-sm">
              {state?.errors?.email}
            </span>
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
              state?.errors?.postcode && "border border-[#dc3545]"
            } `}
            placeholder="Postcode"
            name="postcode"
          />
          {state?.errors?.postcode && (
            <span className="text-[#dc3545] text-sm">
              {state?.errors?.postcode}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="text-[#9ca3af] mb-3 block">
            What day/days to you require the service?
          </label>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
              <label
                htmlFor="mon"
                className="radio-selector p-2 rounded-md border-slate-100 border-[1px] block text-center cursor-pointer"
              >
                Mon
                <input
                  type="checkbox"
                  id="mon"
                  name="days"
                  value="monday"
                  hidden
                />
              </label>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="tue"
                className="radio-selector p-2 rounded-md border-slate-100 border-[1px] block text-center cursor-pointer"
              >
                Tue
                <input
                  type="checkbox"
                  id="tue"
                  name="days"
                  value="tuesday"
                  hidden
                />
              </label>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="wed"
                className="radio-selector p-2 rounded-md border-slate-100 border-[1px] block text-center cursor-pointer"
              >
                Wed
                <input
                  type="checkbox"
                  id="wed"
                  name="days"
                  value="wednesday"
                  hidden
                />
              </label>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="thu"
                className="radio-selector p-2 rounded-md border-slate-100 border-[1px] block text-center cursor-pointer"
              >
                Thu
                <input
                  type="checkbox"
                  id="thu"
                  name="days"
                  value="thursday"
                  hidden
                />
              </label>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="fri"
                className="radio-selector p-2 rounded-md border-slate-100 border-[1px] block text-center cursor-pointer"
              >
                Fri
                <input
                  type="checkbox"
                  id="fri"
                  name="days"
                  value="friday"
                  hidden
                />
              </label>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="sat"
                className="radio-selector p-2 rounded-md border-slate-100 border-[1px] block text-center cursor-pointer"
              >
                Sat
                <input
                  type="checkbox"
                  id="sat"
                  name="days"
                  value="saturday"
                  hidden
                />
              </label>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="sun"
                className="radio-selector p-2 rounded-md border-slate-100 border-[1px] block text-center cursor-pointer"
              >
                Sun
                <input
                  type="checkbox"
                  id="sun"
                  name="days"
                  value="sunday"
                  hidden
                />
              </label>
            </div>
          </div>
          {state?.errors?.days && (
            <span className="text-[#dc3545] text-sm">
              {state?.errors?.days}
            </span>
          )}
        </div>
        <div className="mb-4 w-full">
          <textarea
            className={`border-[1px] border-slate-100 rounded-md py-[10px] px-[16px] w-full min-h-[150px]`}
            placeholder="Additional Information"
            name="message"
          />
        </div>
        <button className="rounded-md py-[10px] px-[16px] w-full font-medium text-white bg-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CommercialBookingForm;
