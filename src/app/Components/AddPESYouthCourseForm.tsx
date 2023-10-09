"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addPesYouthCourse_SA } from "../actions/add-pes-youth-course-data";
import { AddCourseFormSchema, AddCourseFormDatatype } from "../lib/types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddPESYouthCourseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<AddCourseFormDatatype>({
    resolver: zodResolver(AddCourseFormSchema),
  });

  // This function will be called when the user submits the form
  const onSubmit = async (data: AddCourseFormDatatype) => {
    // Set isSubmitting to true
    //
    // Pause for a second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //
    // Call the server action to submit data in to database, get back response
    const response = await addPesYouthCourse_SA(data);
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
      className="flex flex-col w-full p-5 bg-white shadow-effect gap-4 max-w-[400px]"
    >
      <input
        placeholder="Course Name"
        className="input-field text-sm w-full"
        required
        {...register("courseName")}
      />
      <input
        placeholder="Course Duration (ex: '2 Weeks')"
        className="input-field text-sm w-full"
        required
        {...register("courseDuration")}
      />
      <input
        placeholder="Course Description"
        className="input-field text-sm w-full"
        {...register("courseDescription")}
      />
      <button type="submit" disabled={isSubmitting} className="submit-button">
        Add course
      </button>
    </form>
  );
}

export default AddPESYouthCourseForm;
