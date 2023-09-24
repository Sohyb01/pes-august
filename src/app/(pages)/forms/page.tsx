import FranchisesForm from "@/app/Components/Long Forms/FranchisesForm";
import InstructorForm from "@/app/Components/Long Forms/InstructorForm";
import PESKidsForm from "@/app/Components/Long Forms/PESKidsForm";
import PESYouthForm from "@/app/Components/Long Forms/PESYouthForm";
import SchoolPartnershipsForm from "@/app/Components/Long Forms/SchoolPartnershipsForm";
import prisma from "@/app/lib/prisma";
import React from "react";

async function FormsTestingPage() {
  // Get available pes kids course options
  const PESKidsCourseOptions = await prisma.pesKidsCourse.findMany({
    select: {
      courseName: true,
      courseDuration: true,
    },
  });

  // Get available pes kids course options
  const PESYouthCourseOptions = await prisma.pesYouthCourse.findMany({
    select: {
      courseName: true,
      courseDuration: true,
    },
  });

  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] pt-[144px] ">
      {/* BASE FORM */}
      <section className="flex flex-col items-center w-full pb-[72px] section__styles gap-4 ">
        <h1 className="text-3xl text-blue-700 font-bold heading">
          Default Form
        </h1>
        <form
          action=""
          className="bg-white shadow-effect w-full flex flex-col items-center gap-16 px-4 md:px-8 py-10"
        >
          {/* Form Inputs container */}
          <div className="flex flex-col gap-8 w-full md:grid grid-cols-2">
            {/* Input and label */}
            <div className="input-field-and-label">
              <p className="input-label">Field Label</p>
              <input type="text" name="" className="input-field" id="" />
            </div>
            {/* Input and label */}
            <div className="input-field-and-label">
              <p className="input-label">Field Label</p>
              <input type="text" name="" className="input-field" id="" />
            </div>
            {/* Input and label */}
            <div className="input-field-and-label">
              <p className="input-label">Field Label</p>
              <input type="text" name="" className="input-field" id="" />
            </div>
            {/* Input and label */}
            <div className="input-field-and-label">
              <p className="input-label">Field Label</p>
              <input type="text" name="" className="input-field" id="" />
            </div>
            {/* Input and label */}
            <div className="input-field-and-label">
              <p className="input-label">Field Label</p>
              <input type="text" name="" className="input-field" id="" />
            </div>
            {/* Select and label */}
            <div className="input-field-and-label">
              <p className="input-label">Field Label</p>
              <select className="select input-field" name="name">
                <option disabled selected>
                  Select an option
                </option>
                <option value="">Option 1</option>
                <option value="">Option 2</option>
              </select>
            </div>
            {/* Radio Input and Label container */}
            <div className="input-field-and-label">
              {/* Label */}

              <p className="input-label">
                Radio <span className="text-red-600">*</span>
              </p>
              <div className="flex gap-8 w-full h-12">
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="name"
                    value=""
                    className="radio border-neutral-400 border-[1px] border-solid"
                  />
                  <p className="text-blue-900">Boy</p>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="name"
                    value=""
                    className="radio border-neutral-400 border-[1px] border-solid"
                  />
                  <p className="text-blue-900">Girl</p>
                </div>
              </div>
            </div>
          </div>
          {/* Submit Button Container */}
          <div className="flex flex-col max-w-[400px] items-center text-center gap-4">
            <button type="submit" className="submit-button">
              Submit
            </button>
            <div className="text-sm text-neutral-500">
              By applying, you confirm that all information entered is correct.
            </div>
          </div>
        </form>
      </section>
      {/* PES KIDS Education FORM */}
      <section className="flex flex-col items-center w-full pb-[72px] section__styles gap-4 ">
        <h1 className="text-3xl text-blue-700 font-bold heading">
          PES Kids Application
        </h1>
        <PESKidsForm data={PESKidsCourseOptions}></PESKidsForm>
      </section>
      {/* PES YOUTH Education FORM */}
      <section className="flex flex-col items-center w-full pb-[72px] section__styles gap-4 ">
        <h1 className="text-3xl text-blue-700 font-bold heading">
          PES Youth Application
        </h1>
        <PESYouthForm data={PESYouthCourseOptions}></PESYouthForm>
      </section>
      {/* PES School Partnerships FORM */}
      <section className="flex flex-col items-center w-full pb-[72px] section__styles gap-4 ">
        <h1 className="text-3xl text-blue-700 font-bold heading">
          School Partnerships Application
        </h1>
        <SchoolPartnershipsForm></SchoolPartnershipsForm>
      </section>
      {/* PES Franchises FORM */}
      <section className="flex flex-col items-center w-full pb-[72px] section__styles gap-4 ">
        <h1 className="text-3xl text-blue-700 font-bold heading">
          Franchises Application
        </h1>
        <FranchisesForm></FranchisesForm>
      </section>
      {/* PES Apply as Instructor FORM */}
      <section className="flex flex-col items-center w-full pb-[72px] section__styles gap-4 ">
        <h1 className="text-3xl text-blue-700 font-bold heading">
          Apply to join as an Instructor
        </h1>
        <InstructorForm></InstructorForm>
      </section>
    </div>
  );
}

export default FormsTestingPage;
