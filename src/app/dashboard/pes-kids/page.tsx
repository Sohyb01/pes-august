import AddPESKidsCourseForm from "@/app/Components/AddPESKidsCourseForm";
import PESKidsApplication from "@/app/Components/Dashboard applications/PESKidsApplication";
import PESKidsCourse from "@/app/Components/Dashboard courses/PESKidsCourse";
import prisma from "@/app/lib/prisma";
import React from "react";

async function page() {
  const PESKidsApplicationsData = await prisma.pesKidsApplicationData.findMany(
    {}
  );
  const PESKidsCoursesData = await prisma.pesKidsCourse.findMany({});

  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] pt-[144px] ">
      <section className="flex flex-col items-center w-full pb-[72px] section__styles gap-4 ">
        <h1 className="text-start heading text-neutral-800 text-2xl font-bold w-full">
          PES Kids Applications
        </h1>
        {/* Dashboard Data display grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 grid-flow-row w-full">
          {/* Grid item (Application) */}
          {PESKidsApplicationsData.map((application, key) => (
            <PESKidsApplication
              data={application}
              key={key}
            ></PESKidsApplication>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center w-full pb-[72px] section__styles gap-4 ">
        <h1 className="text-start heading text-neutral-800 text-2xl font-bold w-full">
          PES Kids Available Courses
        </h1>
        {/* Dashboard Data display grid */}
        <div className="flex flex-col gap-5 lg:gap-8 lg:grid lg:grid-cols-2 lg:grid-flow-row w-full">
          {/* Grid item (Application) */}
          {PESKidsCoursesData.map(
            (course, key) =>
              course.isAvailable && (
                <PESKidsCourse data={course} key={key}></PESKidsCourse>
              )
          )}
        </div>
      </section>
      {/* <section className="flex flex-col items-center w-full pb-[72px] section__styles gap-4 ">
        <h1 className="text-start heading text-neutral-800 text-2xl font-bold w-full">
          PES Kids Hidden Courses
        </h1>
        <div className="flex flex-col gap-5 lg:gap-8 lg:grid lg:grid-cols-2 lg:grid-flow-row w-full">
          {PESKidsCoursesData.map(
            (course, key) =>
              !course.isAvailable && (
                <PESKidsCourse data={course} key={key}></PESKidsCourse>
              )
          )}
        </div>
      </section> */}
      {/* Add a course section */}
      <section className="flex flex-col items-start w-full pb-[72px] section__styles gap-4 ">
        <h1 className="text-start heading text-neutral-800 text-2xl font-bold w-full">
          Add a course
        </h1>
        <AddPESKidsCourseForm></AddPESKidsCourseForm>
      </section>
    </div>
  );
}

export default page;
