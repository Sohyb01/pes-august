"use client";
import React, { useState } from "react";
import ParentApplicationForm from "../../Components/ParentApplicationForm";
import StudentApplicationForm from "../../Components/StudentApplicationForm";

function GetStartedPage() {
  const [signUpOption, setSignUpOption] = useState<signUpOptions>(null);
  type signUpOptions = "Student" | "Parent" | null;
  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] pt-[144px]">
      {/* Choose option section */}
      <div className="flex flex-col items-center section__styles pb-[72px] gap-8">
        {/* Header & Tagline */}
        <div className="flex flex-col items-center gap-2">
          <p className="tagline">GET STARTED - 1 / 2</p>
          <h1 className="text-xl heading font-semibold text-center text-blue-700">
            Please choose the option for you
          </h1>
        </div>
        <div className="flex gap-8 w-full">
          <button
            onClick={() => setSignUpOption("Student")}
            className={`justify-between duration-100 text-blue-900 flex flex-col text-sm items-center p-4 w-full bg-white border-solid shadow-effect gap-2 ${
              signUpOption === "Student"
                ? `border-orange-500 border-[4px]`
                : `border-blue-200 border-[2px]`
            }`}
          >
            <p>I am a</p>
            <h1 className="text-lg font-bold text-blue-700">
              University Student
            </h1>
            <p>I want to learn, get certficates, & become accredited</p>
          </button>
          <button
            onClick={() => setSignUpOption("Parent")}
            className={`justify-between duration-100 text-blue-900 flex flex-col text-sm items-center p-4 w-full bg-white border-solid shadow-effect gap-2 ${
              signUpOption === "Parent"
                ? `border-orange-500 border-[4px]`
                : `border-blue-200 border-[2px]`
            }`}
          >
            <p>I am a</p>
            <h1 className="text-lg font-bold text-blue-700">Parent</h1>
            <p>I want to enroll my son / daughter into PES programmes</p>
          </button>
        </div>
      </div>
      {/* Applications Section */}
      {signUpOption && (
        <section className="flex flex-col items-center w-full py-[72px] section__styles gap-8">
          {/* Header & Tagline */}
          <div className="flex flex-col items-center gap-2">
            <p className="tagline">GET STARTED - 2 / 2</p>
            <h1 className="text-xl heading font-semibold text-center text-blue-700">
              Please fill out this form
            </h1>
          </div>
          {/* Parent Sign Up */}
          {signUpOption === "Parent" && (
            <ParentApplicationForm></ParentApplicationForm>
          )}
          {signUpOption === "Student" && (
            <StudentApplicationForm></StudentApplicationForm>
          )}
        </section>
      )}
    </div>
  );
}

export default GetStartedPage;
