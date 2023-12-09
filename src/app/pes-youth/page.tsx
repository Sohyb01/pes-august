import PESYouthNavbar from "@/app/Components/PESYouthNavbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import prisma from "@/app/lib/prisma";
import PESYouthForm from "../Components/Long Forms/PESYouthForm";
import PartnersSection from "../Components/Sections/PartnersSection";
import AboutSection1 from "../Components/Sections/AboutSection1";
import { pesYouthTestimonials, pesYouthTracks, whatsappUrl } from "../lib/data";
import test from "node:test";
import PesYouthTesitmonialsSection from "../Components/Sections/PesYouthTesitmonialsSection";

async function PESYouth() {
  // Get available pes kids course options
  // const PESYouthCourseOptions = await prisma.pesYouthCourse.findMany({
  //   select: {
  //     courseName: true,
  //     courseDuration: true,
  //   },
  // });

  // const pesYouthCourses = await prisma.pesYouthCourse.findMany({});

  return (
    <>
      <PESYouthNavbar></PESYouthNavbar>
      <div className="flex flex-col items-center w-full min-h-[100vh]">
        {/* Hero section (youth) */}
        <div className="bg-white w-full">
          <section className="flex flex-col lg:flex-row items-center w-full pt-[144px] pb-[72px] section__styles gap-10 ">
            {/* Header and tagline and p and buttons*/}
            <div className="flex flex-col w-full items-start gap-8">
              {/* Header and tagling and p */}
              <div className="flex flex-col items-center text-start gap-4 lg:w-full">
                <p className="tagline text-start w-full">
                  WELCOME TO PES - YOUTH
                </p>
                <h1 className="heading font-semibold text-3xl md:text-4xl text-start text-blue-700">
                  Join Courses, programs, & get
                  <span className="text-orange-600 heading"> accredited</span>
                </h1>
                <p className="text-blue-900 text-lg text-start">
                  PES Youth is for ambitious university students who want to
                  learn, build their resume, improve their skills, and become
                  accredited
                </p>
              </div>
              {/* Buttons container */}
              <div className="flex gap-8 w-full">
                <Link
                  href="#courses"
                  className="bg-orange-600 hover:bg-orange-400 duration-100 text-center grid place-items-center px-6 py-3 text-white font-bold shadow-effect rounded-[3px]"
                >
                  View Courses
                </Link>
                <Link
                  href="/certificates"
                  className="bg-white text-blue-700 hover:bg-blue-200 duration-100 text-center grid place-items-center px-6 py-3 font-bold shadow-effect rounded-[3px]"
                >
                  Verify Certificate
                </Link>
              </div>
            </div>
            {/* Image */}
            <div className="w-full rounded-[3px] bg-slate-400 lg:w-full aspect-square relative">
              <Image src="/h2.jpg" fill alt="a" />
            </div>
          </section>
        </div>
        {/* Partners section */}
        <PartnersSection></PartnersSection>
        {/* Testimonials Section */}
        <PesYouthTesitmonialsSection />
        {/* Our courses & programs Section */}
        <section
          id="courses"
          className="flex flex-col items-center w-full section__styles gap-8 py-[72px]"
        >
          {/* Header and tagline and p */}
          <div className="flex flex-col items-center text-start gap-4 w-full">
            <p className="tagline text-start w-full">GET STARTED</p>
            <h1 className="heading font-semibold text-3xl text-start text-blue-700 w-full">
              Our courses & programs
            </h1>
          </div>
          {/* Courses Container */}
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:grid-flow-row w-full">
            {/* Courses */}
            {pesYouthTracks.map((course, key) => {
              return (
                <div
                  key={key}
                  className="flex flex-col w-full gap-8 items-start text-start bg-white shadow-effect p-4 lg:p-6 rounded-[3px]"
                >
                  {/* Image */}
                  <div className="rounded-[3px] w-full min-h-[146px] sm:min-h-[216px] md:min-h-[170px] lg:min-h-[245px] relative">
                    <Image
                      src={course.imageUrl}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Name and description */}
                  <div className="flex flex-col text-start w-full h-full gap-4">
                    {/* Name and duration */}
                    <div className="flex w-full justify-between items-center text-start">
                      <p className="text-blue-700 font-bold text-lg">
                        {course.title}
                      </p>
                      {/* Time label */}
                      {/* <div className="flex items-center gap-2 text-neutral-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_3_3990)">
                            <path
                              d="M7.25 4.5C7.25 4.08437 7.58437 3.75 8 3.75C8.41562 3.75 8.75 4.08437 8.75 4.5V8.35L11.4156 10.125C11.7594 10.3562 11.8531 10.8219 11.5969 11.1656C11.3938 11.5094 10.9281 11.6031 10.5844 11.3469L7.58437 9.34688C7.375 9.23438 7.25 9 7.25 8.72188V4.5ZM8 0.75C12.4187 0.75 16 4.33125 16 8.75C16 13.1687 12.4187 16.75 8 16.75C3.58125 16.75 0 13.1687 0 8.75C0 4.33125 3.58125 0.75 8 0.75ZM1.5 8.75C1.5 12.3406 4.40938 15.25 8 15.25C11.5906 15.25 14.5 12.3406 14.5 8.75C14.5 5.15938 11.5906 2.25 8 2.25C4.40938 2.25 1.5 5.15938 1.5 8.75Z"
                              fill="#737373"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3_3990">
                              <rect
                                width="16"
                                height="16"
                                fill="white"
                                transform="translate(0 0.75)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="w-[72px]">{course.courseDuration}</p>
                      </div> */}
                    </div>
                    {/* Description */}
                    <p className="text-blue-900 w-full">
                      {course.courseDescription}
                    </p>
                  </div>
                  <Link
                    href={whatsappUrl}
                    target="_blank"
                    className="bg-orange-600 hover:bg-orange-400 duration-100 text-center z-20 grid place-items-center px-6 py-3 text-white font-bold shadow-effect rounded-[15px]"
                  >
                    Join Course
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
        {/* About section 1 */}
        <AboutSection1></AboutSection1>
        {/* PES YOUTH Education FORM */}
        {/* <section
          className="flex flex-col items-center w-full py-[72px] section__styles gap-4"
          id="apply"
        >
          <h1 className="text-2xl text-blue-700 font-semibold heading">
            Apply to PES Youth Courses
          </h1>
          <PESYouthForm data={PESYouthCourseOptions}></PESYouthForm>
        </section> */}
      </div>
    </>
  );
}

export default PESYouth;
