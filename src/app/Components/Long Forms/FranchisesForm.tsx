"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { FranchiseFormSchema, FranchiseFormDatatype } from "../../lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addFranchiseApplicationData_SA } from "@/app/actions/add-franchise-data";

function FranchisesForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<FranchiseFormDatatype>({
    resolver: zodResolver(FranchiseFormSchema),
  });

  // This function will be called when the user submits the form
  const onSubmit = async (data: FranchiseFormDatatype) => {
    // Set isSubmitting to true
    //
    // Pause for a second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //
    // Call the server action to submit data in to database, get back response
    const response = await addFranchiseApplicationData_SA(data);
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
          <p className="input-label">Your Email</p>
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
          <p className="input-label">
            Your Location (Country & City){" "}
            <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            className="input-field"
            id=""
            {...register("ApplierLocation")}
          />
          {errors.ApplierLocation && (
            <p className="error-message">{errors.ApplierLocation.message}</p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">
            Investment Budget <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            className="input-field"
            id=""
            {...register("ApplierBudget")}
          />
          {errors.ApplierBudget && (
            <p className="error-message">{errors.ApplierBudget.message}</p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">
            Desired Franchise Location (City & Country){" "}
            <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            className="input-field"
            id=""
            {...register("DesiredFranchiseLocation")}
          />
          {errors.DesiredFranchiseLocation && (
            <p className="error-message">
              {errors.DesiredFranchiseLocation.message}
            </p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">What is your current profession?</p>
          <input
            type="text"
            className="input-field"
            id=""
            {...register("ApplierProfession")}
          />
          {errors.ApplierProfession && (
            <p className="error-message">{errors.ApplierProfession.message}</p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">How did you hear about us?</p>
          <input
            type="text"
            className="input-field"
            id=""
            {...register("ApplierHeardAboutUs")}
          />
          {errors.ApplierHeardAboutUs && (
            <p className="error-message">
              {errors.ApplierHeardAboutUs.message}
            </p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label col-span-2">
          <p className="input-label">
            What is your motivation behind starting an AI & Robotics Franchise?
          </p>
          <input
            type="text"
            className="input-field"
            id=""
            {...register("ApplierMotivation")}
          />
          {errors.ApplierMotivation && (
            <p className="error-message">{errors.ApplierMotivation.message}</p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label col-span-2">
          <p className="input-label">
            Is there any additional message / information you would like to
            share with us?
          </p>
          <input
            type="text"
            className="input-field"
            id=""
            {...register("ApplierAdditionalMessage")}
          />
          {errors.ApplierAdditionalMessage && (
            <p className="error-message">
              {errors.ApplierAdditionalMessage.message}
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

export default FranchisesForm;
