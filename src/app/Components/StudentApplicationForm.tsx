"use client";

import { studentApplicationFormSchema } from "../lib/types";
import { useState } from "react";
import toast from "react-hot-toast";
import { addStudentApplicationToDatabase } from "../actions/add-student-application-data copy";
import { redirectAction } from "../actions/redirect-action";

function ParentApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const clientAction = async (formData: FormData) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
    // construct new object
    const applicationData = {
      studentName:
        formData.get("studentName") !== ""
          ? formData.get("studentName")
          : undefined,
      studentUniversity:
        formData.get("studentUniversity") !== ""
          ? formData.get("studentUniversity")
          : undefined,
      studentFaculty:
        formData.get("studentFaculty") !== ""
          ? formData.get("studentFaculty")
          : undefined,
      studentAcademicYear:
        formData.get("studentAcademicYear") !== ""
          ? formData.get("studentAcademicYear")
          : undefined,
      studentEmail:
        formData.get("studentEmail") !== ""
          ? formData.get("studentEmail")
          : null,
      studentMobile:
        formData.get("studentMobile") !== ""
          ? formData.get("studentMobile")?.toString()
          : null,
      studentAdditionalMessage:
        formData.get("studentAdditionalMessage") !== null
          ? formData.get("studentAdditionalMessage")
          : undefined,
    };

    // client-side validation
    const result = studentApplicationFormSchema.safeParse(applicationData);
    // In case of error
    if (!result.success) {
      console.log("error");
      let errorMessage = "Please fill out all required fields \n \n";

      result.error.issues.forEach((issue) => {
        console.log(issue.message);
        errorMessage = errorMessage + issue.message + ".\n";
      });
      //   Output toast message
      toast.error(errorMessage);
      return;
    }

    await addStudentApplicationToDatabase(result.data);

    toast.success("Your application has been submitted successfully!");

    await redirectAction("/");

    // output server error message
  };

  return (
    <form
      action={clientAction}
      className="bg-white rounded-[3px] shadow-effect w-full flex flex-col gap-16 px-4 md:px-8 py-10 items-center"
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
            Name in English (رباعي) <span className="text-red-600">*</span>
          </p>
          <input
            required
            type="text"
            name="studentName"
            id=""
            className="input-field text-sm"
          />
        </div>
        {/* University Input and Label container */}
        <div className="flex flex-col items-start gap-2 w-full md:max-w-[304px] h-full justify-end">
          {/* Label */}
          <p className="text-blue-700 text-start w-full">
            University <span className="text-red-600">*</span>
          </p>
          <input
            required
            type="text"
            name="studentUniversity"
            id=""
            className="input-field text-sm"
          />
        </div>
        {/* Faculty Input and Label container */}
        <div className="flex flex-col items-start gap-2 w-full md:max-w-[304px] h-full justify-end">
          {/* Label */}
          <p className="text-blue-700 text-start w-full">
            Faculty <span className="text-red-600">*</span>
          </p>
          <input
            required
            type="text"
            name="studentFaculty"
            id=""
            className="input-field text-sm"
          />
        </div>
        {/* Academic Year Input and Label container */}
        <div className="flex flex-col items-start gap-2 w-full md:max-w-[304px] h-full justify-end">
          {/* Label */}
          <p className="text-blue-700 text-start w-full">
            Academic Year
            <span className="text-red-600">*</span>
          </p>
          <input
            required
            type="text"
            name="studentAcademicYear"
            id=""
            className="input-field text-sm"
          />
        </div>
        {/* Email Input and Label container */}
        <div className="flex flex-col items-start gap-2 w-full md:max-w-[304px] h-full justify-end">
          {/* Label */}
          <p className="text-blue-700 text-start w-full">
            Email Address <span className="text-red-600">*</span>
          </p>
          <input
            required
            type="text"
            name="studentEmail"
            id=""
            className="input-field text-sm"
          />
        </div>
        {/* Mobile Number Input and Label container */}
        <div className="flex flex-col items-start gap-2 w-full md:max-w-[304px] h-full justify-end">
          {/* Label */}
          <p className="text-blue-700 text-start w-full">
            Mobile Number <span className="text-red-600">*</span>
          </p>
          <input
            required
            type="text"
            name="studentMobile"
            id=""
            className="input-field text-sm"
          />
        </div>
        {/* Additional Message Input and Label container */}
        <div className="flex flex-col items-start gap-2 w-full h-full justify-end col-span-2">
          {/* Label */}
          <p className="text-blue-700 text-start w-full">
            Additional Message (Optional)
          </p>
          <textarea
            name="studentAdditionalMessage"
            className="text-sm resize-none p-2 w-full rounded-[3px] px-4 h-40 bg-white border-neutral-300 border-[1px] border-solid text-neutral-800 focus:outline-none  placeholder:text-neutral-500"
          />
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
