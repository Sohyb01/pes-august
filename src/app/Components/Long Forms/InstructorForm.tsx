"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { InstructorFormSchema, InstructorFormDatatype } from "../../lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addInstructorApplicationData_SA } from "@/app/actions/add-instructor-data";

function InstructorForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<InstructorFormDatatype>({
    resolver: zodResolver(InstructorFormSchema),
  });

  // This function will be called when the user submits the form
  const onSubmit = async (data: InstructorFormDatatype) => {
    // Set isSubmitting to true
    //
    // Pause for a second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //
    // Call the server action to submit data in to database, get back response
    const response = await addInstructorApplicationData_SA(data);
    // Toasts
    if (response.success) {
      // If response successful, Success Toast
      toast.success("Your application has been submitted successfully!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      reset();
    } else {
      // If there is an error in the response, Error toast
      toast.error(`${response?.error}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    // Set isSubmitting to false?
    //
    // Call the server action to revalidate path / redirect?
    //
    // Reset the form?
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-effect w-full flex flex-col items-center gap-16 px-4 md:px-8 py-10"
    >
      {/* Form Inputs container */}
      <div className="flex flex-col gap-8 w-full md:grid grid-cols-2">
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">
            Your Name (رباعي) <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            className="input-field"
            id=""
            {...register("ApplierName")}
          />
          {errors.ApplierName && (
            <p className="error-message">{errors.ApplierName.message}</p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">
            Your Age <span className="text-red-600">*</span>
          </p>
          <input
            type="number"
            className="input-field"
            {...register("ApplierAge", {
              valueAsNumber: true,
            })}
          />
          {errors.ApplierAge && (
            <p className="error-message">{errors.ApplierAge.message}</p>
          )}
        </div>
        {/* Radio Input and Label container */}
        <div className="input-field-and-label">
          {/* Label */}
          <p className="input-label">Gender</p>
          <div className="flex gap-8 w-full h-12">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                value="Male"
                className="radio border-neutral-400 border-[1px] border-solid"
                {...register("ApplierGender")}
              />
              <p className="text-blue-900">Male</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                value="Female"
                className="radio border-neutral-400 border-[1px] border-solid"
                {...register("ApplierGender")}
              />
              <p className="text-blue-900">Female</p>
            </div>
          </div>
          {errors.ApplierGender && (
            <p className="error-message">{errors.ApplierGender.message}</p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">Your Mobile (with Whatsapp)</p>
          <input
            type="text"
            className="input-field"
            id=""
            {...register("ApplierMobile")}
          />
          {errors.ApplierMobile && (
            <p className="error-message">{errors.ApplierMobile.message}</p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">
            Email <span className="text-red-600">*</span>
          </p>
          <input
            type="email"
            className="input-field"
            id=""
            {...register("ApplierEmail")}
          />
          {errors.ApplierEmail && (
            <p className="error-message">{errors.ApplierEmail.message}</p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">Additional Social Media Profile Links</p>
          <input
            type="text"
            className="input-field"
            id=""
            {...register("ApplierExtraSocialMediaProfileLinks")}
          />
          {errors.ApplierExtraSocialMediaProfileLinks && (
            <p className="error-message">
              {errors.ApplierExtraSocialMediaProfileLinks.message}
            </p>
          )}
        </div>
        {/* Radio Input and Label container */}
        <div className="input-field-and-label">
          {/* Label */}

          <p className="input-label">
            I am
            <span className="text-red-600">*</span>
          </p>
          <div className="flex gap-8 w-full h-12">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                {...register("ApplierIsGraduated")}
                value="No"
                className="radio border-neutral-400 border-[1px] border-solid"
              />
              <p className="text-blue-900">In University</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                {...register("ApplierIsGraduated")}
                value="Yes"
                className="radio border-neutral-400 border-[1px] border-solid"
              />
              <p className="text-blue-900">Graduated</p>
            </div>
          </div>
          {errors.ApplierIsGraduated && (
            <p className="error-message">{errors.ApplierIsGraduated.message}</p>
          )}
        </div>
        {/* Radio Input and Label container */}
        <div className="input-field-and-label">
          {/* Label */}

          <p className="input-label">
            Do you want to be an instructor for PES Kids or Youth?
            <span className="text-red-600">*</span>
          </p>
          <div className="flex gap-8 w-full h-12">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                {...register("DesiredInstructorRole")}
                value="PES Kids"
                className="radio border-neutral-400 border-[1px] border-solid"
              />
              <p className="text-blue-900">Kids (ages 7-16)</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                {...register("DesiredInstructorRole")}
                value="PES Youth"
                className="radio border-neutral-400 border-[1px] border-solid"
              />
              <p className="text-blue-900">Youth (ages 17+)</p>
            </div>
          </div>
          {errors.DesiredInstructorRole && (
            <p className="error-message">
              {errors.DesiredInstructorRole.message}
            </p>
          )}
        </div>
      </div>
      {/* Submit Button Container */}
      <div className="flex flex-col max-w-[400px] items-center text-center gap-4">
        <button type="submit" disabled={isSubmitting} className="submit-button">
          Submit
        </button>
        <div className="text-sm text-neutral-500">
          By applying, you confirm that all information entered is correct.
        </div>
      </div>
    </form>
  );
}

export default InstructorForm;
