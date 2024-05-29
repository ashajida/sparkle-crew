"use client";
import React from "react";
import { submitBookingForm } from "../actions/submitBookingForm";
import { useFormState } from "react-dom";

type Props = {
  isDemestic: boolean
};

const BookingForm = ({ isDemestic = true }: Props) => {
const [state, formAction] = useFormState(submitBookingForm, {
    message: "",
    values: {
        email: "",
        tel: '',
        fullName: "",
        message: "",
        subject: '',
        roomNumber: ''
    },
    errors: [],
    });
  return (
    <>
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className="border-[1px] border-slate-100 rounded-md py-[10px] px-[16px] w-full "
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="border-[1px] border-slate-100 rounded-md py-[10px] px-[16px] w-full "
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            placeholder="Phone"
            className="border-[1px] border-slate-100 rounded-md py-[10px] px-[16px] w-full "
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Postcode"
            className="border-[1px] border-slate-100 rounded-md py-[10px] px-[16px] w-full "
          />
        </div>
        {
        isDemestic && 
          <>
            <label htmlFor="">Number Of Rooms</label>
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="col-span-1">
                <label
                  htmlFor="room-number-1"
                  className="radio-selector p-2 rounded-md border-slate-100 border-[1px] block text-center cursor-pointer"
                >
                  1
                  <input
                    type="radio"
                    id="room-number-1"
                    name="room-number"
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
                    name="room-number"
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
                    name="room-number"
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
                    name="room-number"
                    value="+4"
                    hidden
                  />
                </label>
              </div>
            </div>
          </>
        }
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

export default BookingForm;
