"use client";

import { redirectAction } from "../actions/redirect-action";
import { useState } from "react";

function ParentApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const clientAction = async (formData: FormData) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <form
      action={clientAction}
      className="bg-white rounded-[3px] shadow-effect flex flex-col gap-16 px-4 md:px-8 py-10 w-full items-center"
    >
      {/* Top Text */}
      <p className="text-blue-900 text-sm text-start">
        - Fields marked with * are required <br />
        -After submitting, we will review your form and contact you for
        enrolment
      </p>
      {/* Inputs container */}
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-5 md:gap-6 md:flex-row md:flex-wrap items-center text-start w-full">
        {/* Student Name Input and Label container */}
        <div className="flex flex-col items-start gap-2 w-full md:max-w-[304px] h-full justify-end">
          {/* Label */}
          <p className="text-blue-700 text-start w-full">
            Student Name in English (رباعي){" "}
            <span className="text-red-600">*</span>
          </p>
          <input
            required
            type="text"
            name="studentName"
            id=""
            className="input-field text-sm"
          />
        </div>
        {/* Student Age Input and Label container */}
        <div className="flex flex-col items-start gap-2 w-full md:max-w-[304px] h-full justify-end">
          {/* Label */}
          <p className="text-blue-700 text-start w-full">
            Student Age <span className="text-red-600">*</span>
          </p>
          <input
            required
            type="number"
            name="studentAge"
            id=""
            className="input-field text-sm"
          />
        </div>
        {/* Parent Email Input and Label container */}
        <div className="flex flex-col items-start gap-2 w-full md:max-w-[304px] h-full justify-end">
          {/* Label */}
          <p className="text-blue-700 text-start w-full">
            Parent email <span className="text-red-600">*</span>
          </p>
          <input
            required
            type="text"
            name="parentEmail"
            id=""
            className="input-field text-sm"
          />
        </div>
        {/* Parent Mobile Input and Label container */}
        <div className="flex flex-col items-start gap-2 w-full md:max-w-[304px] h-full justify-end">
          {/* Label */}
          <p className="text-blue-700 text-start w-full">
            Parent mobile number (with Whatsapp){" "}
            <span className="text-red-600">*</span>
          </p>
          <input
            required
            type="text"
            name="parentMobile"
            id=""
            className="input-field text-sm"
          />
        </div>
        {/* Student Email Input and Label container */}
        <div className="flex flex-col items-start gap-2 w-full md:max-w-[304px] h-full justify-end">
          {/* Label */}
          <p className="text-blue-700 text-start w-full">Student email</p>
          <input
            type="text"
            name="studentEmail"
            id=""
            className="input-field text-sm"
          />
        </div>
        {/* Student Mobile Number Input and Label container */}
        <div className="flex flex-col items-start gap-2 w-full md:max-w-[304px] h-full justify-end">
          {/* Label */}
          <p className="text-blue-700 text-start w-full">
            Student mobile number
          </p>
          <input
            type="text"
            name="studentMobile"
            id=""
            className="input-field text-sm"
          />
        </div>
        {/* Student Gender Input and Label container */}
        <div className="flex flex-col items-start gap-2 w-full md:max-w-[304px] h-full justify-end">
          {/* Label */}

          <p className="text-blue-700 text-start w-full">
            Student Gender <span className="text-red-600">*</span>
          </p>
          <div className="flex gap-8">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="studentGender"
                value="Boy"
                className="radio border-neutral-400 border-[1px] border-solid"
              />
              <p className="text-blue-900">Boy</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="studentGender"
                value="Girl"
                className="radio border-neutral-400 border-[1px] border-solid"
              />
              <p className="text-blue-900">Girl</p>
            </div>
          </div>
        </div>
        {/* Student Has Laptop Input and Label container */}
        <div className="flex flex-col items-start gap-2 w-full md:max-w-[304px] h-full justify-end">
          {/* Label */}

          <p className="text-blue-700 text-start w-full">
            Does the student have a laptop/desktop?{" "}
            <span className="text-red-600">*</span>
          </p>
          <div className="flex gap-8">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="studentHasLaptop"
                value="Yes"
                className="radio border-neutral-400 border-[1px] border-solid"
              />
              <p className="text-blue-900">Yes</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="studentHasLaptop"
                value="No"
                className="radio border-neutral-400 border-[1px] border-solid"
              />
              <p className="text-blue-900">No</p>
            </div>
          </div>
        </div>
      </div>
      {/* Submit Button Container */}
      <div className="flex flex-col items-center w-full max-w-[400px] gap-4">
        <button
          disabled={isSubmitting}
          className="grid place-items-center bg-blue-500 text-white text-md px-8 py-4 w-full disabled:bg-blue-900"
        >
          Submit
        </button>
        <p className="text-neutral-500 text-sm text-center">
          By applying, you confirm that all information entered is correct.
        </p>
      </div>
    </form>
  );
}

export default ParentApplicationForm;
