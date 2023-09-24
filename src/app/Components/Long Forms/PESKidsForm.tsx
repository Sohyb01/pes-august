"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { PESKidsFormSchema, PESKidsFormDatatype } from "../../lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addPesKidsApplicationData_SA } from "@/app/actions/add-pes-kids-data";

function PESKidsForm(props: {
  data: {
    courseName: string;
    courseDuration: string;
  }[];
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<PESKidsFormDatatype>({
    resolver: zodResolver(PESKidsFormSchema),
  });

  // This function will be called when the user submits the form
  const onSubmit = async (data: PESKidsFormDatatype) => {
    // Set isSubmitting to true
    //
    // Pause for a second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //
    // Call the server action to submit data in to database, get back response
    const response = await addPesKidsApplicationData_SA(data);
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
  //
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-effect w-full flex flex-col items-center gap-16 px-4 md:px-8 py-10"
    >
      {/* Form Inputs container */}
      <div className="flex flex-col gap-8 w-full md:grid grid-cols-2">
        {/* Input and label */}
        <div className="input-field-and-label md:col-span-2">
          <p className="input-label">
            Course that you are interested in{" "}
            <span className="text-red-600">*</span>
          </p>
          <select
            defaultValue=""
            className="select input-field"
            {...register("DesiredCourse", {
              required: "Please select an option",
            })}
          >
            <option value="">Select an option</option>
            {/* Get the PES Kids courses options from the database */}
            {props.data.map((course, key) => (
              <option key={key} value={course.courseName}>
                {course.courseName}
              </option>
            ))}
          </select>
          {errors.DesiredCourse && (
            <p className="error-message">{errors.DesiredCourse.message}</p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">
            Parent Mobile (with WhatsApp){" "}
            <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            className="input-field"
            id=""
            {...register("ParentMobile")}
          />
          {errors.ParentMobile && (
            <p className="error-message">{errors.ParentMobile.message}</p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">
            Parent Email <span className="text-red-600">*</span>
          </p>
          <input
            type="email"
            className="input-field"
            id=""
            {...register("ParentEmail")}
          />
          {errors.ParentEmail && (
            <p className="error-message">{errors.ParentEmail.message}</p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">
            Student Name (رباعي) <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            className="input-field"
            id=""
            {...register("StudentName")}
          />
          {errors.StudentName && (
            <p className="error-message">{errors.StudentName.message}</p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">
            Student Age <span className="text-red-600">*</span>
          </p>
          <input
            type="number"
            className="input-field"
            {...register("StudentAge", {
              valueAsNumber: true,
            })}
          />
          {errors.StudentAge && (
            <p className="error-message">{errors.StudentAge.message}</p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">Student Mobile Number</p>
          <input type="text" className="input-field" id="" />
          {errors.StudentMobile && (
            <p className="error-message">{errors.StudentMobile.message}</p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">Student Email</p>
          <input
            type="email"
            className="input-field"
            id=""
            {...register("StudentEmail")}
          />
          {errors.StudentEmail && (
            <p className="error-message">{errors.StudentEmail.message}</p>
          )}
        </div>
        {/* Radio Input and Label container */}
        <div className="input-field-and-label">
          {/* Label */}
          <p className="input-label">
            Preference to learn online or at a Centre?{" "}
          </p>
          <div className="flex gap-8 w-full h-12">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                value="Online"
                className="radio border-neutral-400 border-[1px] border-solid"
                {...register("DesiredMethod")}
              />
              <p className="text-blue-900">Online</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                value="Offline"
                className="radio border-neutral-400 border-[1px] border-solid"
                {...register("DesiredMethod")}
              />
              <p className="text-blue-900">At Centre</p>
            </div>
          </div>
          {errors.DesiredMethod && (
            <p className="error-message">{errors.DesiredMethod.message}</p>
          )}
        </div>
        {/* Radio Input and Label container */}
        <div className="input-field-and-label">
          {/* Label */}

          <p className="input-label">
            Does the student have a laptop?{" "}
            <span className="text-red-600">*</span>
          </p>
          <div className="flex gap-8 w-full h-12">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                {...register("StudentHasLaptop")}
                value="Yes"
                className="radio border-neutral-400 border-[1px] border-solid"
              />
              <p className="text-blue-900">Yes</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                {...register("StudentHasLaptop")}
                value="No"
                className="radio border-neutral-400 border-[1px] border-solid"
              />
              <p className="text-blue-900">No</p>
            </div>
          </div>
          {errors.StudentHasLaptop && (
            <p className="error-message">{errors.StudentHasLaptop.message}</p>
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

export default PESKidsForm;
