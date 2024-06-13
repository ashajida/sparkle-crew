"use client";
import React, { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { submitDomesticForm } from "../actions/submitDomesticForm";
import FormButton from "./FormButton";

type Props = {
  isDemestic?: boolean;
  action: Function;
};

const DomesticBookingForm = () => {
    
  const formRef = useRef<HTMLFormElement>(null);

  const values = {
    email: "",
    tel: "",
    fullName: "",
    message: "",
    roomNumber: "",
    bathroomNumber: "",
    postcode: "",
  };

  const [state, formAction] = useFormState(submitDomesticForm, {
    message: "",
    values,
    errors: [],
  });

  useEffect(() => {
    if (!state?.errors) formRef?.current?.reset();
  }, [formRef, state]);

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
            How many bedrooms do you have?
          </label>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
              <label
                htmlFor="room-number-1"
                className="radio-selector p-2 rounded-md border-slate-100 border-[1px] block text-center cursor-pointer"
              >
                1
                <input
                  type="radio"
                  id="room-number-1"
                  name="roomNumber"
                  value="1"
                  hidden
                />
              </label>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="room-number-2"
                className="radio-selector p-2 rounded-md border-slate-100 border-[1px] block text-center cursor-pointer"
              >
                2
                <input
                  type="radio"
                  id="room-number-2"
                  name="roomNumber"
                  value="2"
                  hidden
                />
              </label>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="room-number-3"
                className="radio-selector p-2 rounded-md border-slate-100 border-[1px] block text-center cursor-pointer"
              >
                3
                <input
                  type="radio"
                  id="room-number-3"
                  name="roomNumber"
                  value="3"
                  hidden
                />
              </label>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="room-number-4"
                className="radio-selector p-2 rounded-md border-slate-100 border-[1px] block text-center cursor-pointer"
              >
                +4
                <input
                  type="radio"
                  id="room-number-4"
                  name="roomNumber"
                  value="+4"
                  hidden
                />
              </label>
            </div>
          </div>
          {state?.errors?.roomNumber && (
            <span className="text-[#dc3545] text-sm">
              {state?.errors?.roomNumber}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="text-[#9ca3af] mb-3 block">
            How many bathrooms/en suites?
          </label>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
              <label
                htmlFor="bathroom-number-1"
                className="radio-selector p-2 rounded-md border-slate-100 border-[1px] block text-center cursor-pointer"
              >
                1
                <input
                  type="radio"
                  id="bathroom-number-1"
                  name="bathroomNumber"
                  value="1"
                  hidden
                />
              </label>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="bathroom-number-2"
                className="radio-selector p-2 rounded-md border-slate-100 border-[1px] block text-center cursor-pointer"
              >
                2
                <input
                  type="radio"
                  id="bathroom-number-2"
                  name="bathroomNumber"
                  value="2"
                  hidden
                />
              </label>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="bathroom-number-3"
                className="radio-selector p-2 rounded-md border-slate-100 border-[1px] block text-center cursor-pointer"
              >
                3
                <input
                  type="radio"
                  id="bathroom-number-3"
                  name="bathroomNumber"
                  value="3"
                  hidden
                />
              </label>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="bathroom-number-4"
                className="radio-selector p-2 rounded-md border-slate-100 border-[1px] block text-center cursor-pointer"
              >
                +4
                <input
                  type="radio"
                  id="bathroom-number-4"
                  name="bathroomNumber"
                  value="+4"
                  hidden
                />
              </label>
            </div>
          </div>
          {state?.errors?.bathroomNumber && (
            <span className="text-[#dc3545] text-sm">
              {state?.errors?.bathroomNumber}
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
        <FormButton />
      </form>
    </>
  );
};

export default DomesticBookingForm;
