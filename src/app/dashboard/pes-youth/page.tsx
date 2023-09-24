import AddPESYouthCourseForm from "@/app/Components/AddPESYouthCourseForm";
import PESYouthApplication from "@/app/Components/Dashboard applications/PESYouthApplication";
import PESYouthCourse from "@/app/Components/Dashboard courses/PESYouthCourse";
import prisma from "@/app/lib/prisma";
import React from "react";

async function page() {
  const PESKidsApplicationsData = await prisma.pesYouthApplicationData.findMany(
    {}
  );
  const PESYouthCoursesData = await prisma.pesYouthCourse.findMany({});

  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] pt-[144px] ">
      <section className="flex flex-col items-center w-full pb-[72px] section__styles gap-4 ">
        <h1 className="text-start heading text-neutral-800 text-2xl font-bold w-full">
          PES Youth Applications
        </h1>
        {/* Dashboard Data display grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 grid-flow-row w-full">
          {/* Grid item (Application) */}
          {PESKidsApplicationsData.map((application, key) => (
            <PESYouthApplication
              data={application}
              key={key}
            ></PESYouthApplication>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center w-full pb-[72px] section__styles gap-4 ">
        <h1 className="text-start heading text-neutral-800 text-2xl font-bold w-full">
          PES Youth Available Courses
        </h1>
        {/* Dashboard Data display grid */}
        <div className="flex flex-col gap-5 lg:gap-8 lg:grid lg:grid-cols-2 lg:grid-flow-row w-full">
          {/* Grid item (Application) */}
          {PESYouthCoursesData.map(
            (course, key) =>
              course.isAvailable && (
                <PESYouthCourse data={course} key={key}></PESYouthCourse>
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
        <AddPESYouthCourseForm></AddPESYouthCourseForm>
      </section>
    </div>
  );
}

export default page;
