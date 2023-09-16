"use client";
import React from "react";
import { addFaqMessageToDatabase } from "../actions/add-question-data";
import toast from "react-hot-toast";

function FaqForm() {
  const clientAction = async (formdata: FormData) => {
    const faqQuestionData = {
      mobileNumber: formdata.get("mobileNumber") as string,
      message: formdata.get("message") as string,
    };

    await addFaqMessageToDatabase(faqQuestionData).then((res) => {
      toast.success("Your message has been sent!");
    });
  };

  return (
    <form className="flex flex-col gap-4 w-full" action={clientAction}>
      <input
        required
        type="text"
        name="mobileNumber"
        id=""
        className="input-field"
        placeholder="Your Mobile Number"
      />
      <textarea
        required
        name="message"
        id=""
        placeholder="Your Message..."
        className="resize-none h-[150px] rounded-[3px] px-4 py-2 bg-white border-neutral-300 border-[1px] border-solid text-neutral-800 focus:outline-none placeholder:text-neutral-500 w-full"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-700 text-md hover:bg-blue-500 w-full duration-100 text-center z-20 grid place-items-center px-6 py-3 text-white font-bold shadow-effect"
      >
        Send Message
      </button>
    </form>
  );
}

export default FaqForm;
