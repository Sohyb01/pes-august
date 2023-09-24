"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { PESYouthFormSchema, PESYouthFormDatatype } from "../../lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addPesYouthApplicationData_SA } from "@/app/actions/add-pes-youth-data";

function PESYouthForm(props: {
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
  } = useForm<PESYouthFormDatatype>({
    resolver: zodResolver(PESYouthFormSchema),
  });

  // This function will be called when the user submits the form
  const onSubmit = async (data: PESYouthFormDatatype) => {
    // Set isSubmitting to true
    //
    // Pause for a second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //
    // Call the server action to submit data in to database, get back response
    const response = await addPesYouthApplicationData_SA(data);
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
            <option value="">Select a course</option>
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
            Your Name (رباعي) <span className="text-red-600">*</span>
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
            Your Age <span className="text-red-600">*</span>
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
          <p className="input-label">
            Mobile Number (with Whatsapp){" "}
            <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            className="input-field"
            id=""
            {...register("StudentMobile")}
          />
          {errors.StudentMobile && (
            <p className="error-message">{errors.StudentMobile.message}</p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">
            Your Email <span className="text-red-600">*</span>
          </p>
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
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">
            University <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            className="input-field"
            id=""
            {...register("StudentUniversity")}
          />
          {errors.StudentUniversity && (
            <p className="error-message">{errors.StudentUniversity.message}</p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">
            Faculty / College <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            className="input-field"
            id=""
            {...register("StudentCollege")}
          />
          {errors.StudentCollege && (
            <p className="error-message">{errors.StudentCollege.message}</p>
          )}
        </div>
        {/* Input and label */}
        <div className="input-field-and-label">
          <p className="input-label">Specialty</p>
          <input
            type="text"
            className="input-field"
            id=""
            {...register("StudentSpeciality")}
          />
        </div>
        {/* Radio Input and Label container */}
        <div className="input-field-and-label">
          {/* Label */}
          <p className="input-label">
            Do you have a laptop? <span className="text-red-600">*</span>
          </p>
          <div className="flex gap-8 w-full h-12">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                value="Yes"
                className="radio border-neutral-400 border-[1px] border-solid"
                {...register("StudentHasLaptop")}
              />
              <p className="text-blue-900">Yes</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                value="No"
                className="radio border-neutral-400 border-[1px] border-solid"
                {...register("StudentHasLaptop")}
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

export default PESYouthForm;
