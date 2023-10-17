import StatisticsSection from "@/app/sections/StatisticsSection";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import PESKidsNavbar from "@/app/Components/PESKidsNavbar";
import prisma from "@/app/lib/prisma";
import PESKidsForm from "../Components/Long Forms/PESKidsForm";

async function PESKids() {
  const PESKidsCourseOptions = await prisma.pesKidsCourse.findMany({
    select: {
      courseName: true,
      courseDuration: true,
    },
  });

  const pesKidsCourses = await prisma.pesKidsCourse.findMany({});

  return (
    <>
      <PESKidsNavbar></PESKidsNavbar>
      <div className="flex flex-col items-center w-full pt-[144px] ">
        {/* Hero section (kids) */}
        <section className="flex flex-col lg:flex-row items-center w-full pb-[72px] section__styles gap-10 ">
          {/* Header and tagline and p and buttons*/}
          <div className="flex flex-col w-full items-start gap-8">
            {/* Header and tagling and p */}
            <div className="flex flex-col items-center text-start gap-4 lg:w-full">
              <p className="tagline text-start w-full">WELCOME TO PES - KIDS</p>
              <h1 className="heading font-semibold text-3xl md:text-4xl text-start text-blue-700">
                <span className="text-orange-600 heading">Education</span> for
                the next generations
              </h1>
              <p className="text-blue-900 text-lg text-start">
                PES Kids programs set up your kids for success in the future
                through our accredited courses, tracks, and certifications
              </p>
            </div>
            {/* Buttons container */}
            <div className="flex gap-8 w-full">
              <Link
                href="#apply"
                className="bg-orange-600 hover:bg-orange-400 duration-100 text-center grid place-items-center px-6 py-3 text-white font-bold shadow-effect rounded-[15px]"
              >
                Free Session
              </Link>
              <Link
                href="/certificates"
                className="bg-white text-blue-700 hover:bg-blue-200 duration-100 text-center grid place-items-center px-6 py-3 font-bold shadow-effect rounded-[15px]"
              >
                Verify Certificate
              </Link>
            </div>
          </div>
          {/*  */}
          {/* Image */}
          <a
            href="https://fb.watch/nA1eZp0l_-/"
            target="_blank"
            className="w-full bg-slate-400 lg:w-full aspect-video relative overflow-clip rounded-[30px] grid place-items-center"
          >
            <div className="grid place-items-center aspect-square rounded-full w-[76px] bg-blue-900 p-6 z-[1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="28"
                viewBox="0 0 11 14"
                fill="none"
                className="z-10 ml-[4px]"
              >
                <path
                  d="M10.5 6.13397C11.1667 6.51888 11.1667 7.48112 10.5 7.86602L1.5 13.0622C0.833332 13.4471 3.43203e-07 12.966 3.76852e-07 12.1962L8.31114e-07 1.80385C8.64763e-07 1.03405 0.833334 0.552922 1.5 0.937822L10.5 6.13397Z"
                  fill="white"
                />
              </svg>
            </div>
            <Image
              src="/video-image-min-edited.png"
              fill
              alt="Video"
              className="rounded-[30px]"
            />
          </a>
        </section>
        {/* Statistics Section */}
        <StatisticsSection></StatisticsSection>
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
            {pesKidsCourses.map((course, key) => {
              return (
                <div
                  key={key}
                  className="flex flex-col w-full gap-8 items-start text-start bg-white shadow-effect p-4 lg:p-6 rounded-[3px]"
                >
                  {/* Image */}
                  <div className="rounded-[3px] w-full min-h-[146px] sm:min-h-[216px] md:min-h-[170px] lg:min-h-[245px] bg-slate-400"></div>
                  {/* Name and description */}
                  <div className="flex flex-col text-start w-full h-full gap-4">
                    {/* Name and duration */}
                    <div className="flex w-full justify-between items-center text-start">
                      <p className="text-blue-700 font-bold text-lg">
                        {course.courseName}
                      </p>
                      {/* Time label */}
                      <div className="flex items-center gap-2 text-neutral-500">
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
                      </div>
                    </div>
                    {/* Description */}
                    <p className="text-blue-900 w-full">
                      {course.courseDescription}
                    </p>
                  </div>
                  <Link
                    href="#apply"
                    className="bg-orange-600 hover:bg-orange-400 duration-100 text-center z-20 grid place-items-center px-6 py-3 text-white font-bold shadow-effect rounded-[15px]"
                  >
                    Join Course
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="bg-white w-full py-[72px] grid place-items-center">
          <div className="flex flex-col items-center w-full section__styles gap-8">
            {/* Header and tagline and p */}
            <div className="flex flex-col items-center text-start gap-4 w-full">
              <p className="tagline text-start w-full">TESTIMONIALS</p>
              <h1 className="heading font-semibold text-3xl text-start text-blue-700 w-full">
                What others say
              </h1>
            </div>
            {/* Testimonials Container */}
            <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:grid-flow-row lg:gap-[56px]">
              {/* Testimonial */}
              <div className="flex gap-5 items-center text-start md:flex-col">
                {/* Image */}
                <div className="aspect-square rounded-[30px] w-full max-w-[130px] sm:max-w-[180px] md:max-w-none bg-slate-400"></div>
                {/* Text and name */}
                <p className="text-start text-sm md:text-base w-full text-blue-800">
                  Excellent education and amazing staff, My son learned coding
                  in less than 3 months! I couldn&apos;t be happier. <br />
                  <br />
                  PERSON NAME
                </p>
              </div>
              {/* Testimonial */}
              <div className="flex gap-5 items-center text-start md:flex-col">
                {/* Image */}
                <div className="aspect-square rounded-[30px] w-full max-w-[130px] sm:max-w-[180px] md:max-w-none bg-slate-400"></div>
                {/* Text and name */}
                <p className="text-start text-sm md:text-base w-full text-blue-800">
                  Excellent education and amazing staff, My son learned coding
                  in less than 3 months! I couldn&apos;t be happier. <br />
                  <br />
                  PERSON NAME
                </p>
              </div>
              {/* Testimonial */}
              <div className="flex gap-5 items-center text-start md:flex-col">
                {/* Image */}
                <div className="aspect-square rounded-[30px] w-full max-w-[130px] sm:max-w-[180px] md:max-w-none bg-slate-400"></div>
                {/* Text and name */}
                <p className="text-start text-sm md:text-base w-full text-blue-800">
                  Excellent education and amazing staff, My son learned coding
                  in less than 3 months! I couldn&apos;t be happier. <br />
                  <br />
                  PERSON NAME
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Frames section */}
        <section className="flex flex-col lg:flex-row section__styles items-center py-[72px] gap-10 lg:gap-20 w-full fancy-line-border">
          {/* Header & title */}
          <div className="flex flex-col text-start items-center gap-4 w-full">
            <h1 className="text-blue-700 font-semibold text-2xl heading">
              For parents who are{" "}
              <span className="text-orange-600">thoughtful</span> about their
              kids&apos; <span className="text-orange-600">futures</span>
            </h1>
            <p className="text-lg text-blue-900">
              Our academy offers a wide range of AI & programming courses taught
              by experienced instructors. <br />
              <br />
              Our courses & certifications are also accredited by recognized
              institutions such as ..., ..., and ... What are you waiting for?
              The future is waiting!
            </p>
          </div>
          {/* Frames container */}
          <div className="flex flex-col md:flex-row lg:flex-col gap-4 md:gap-8 w-full">
            {/* Frame */}
            <div className="frame-1 bg-cover bg-center relative md:w-full after:absolute after:w-full after:h-full after:bg-black after:opacity-50 after:z-10 aspect-video flex flex-col items-center justify-center gap-4 bg-neutral-700 rounded-[30px] after:rounded-[30px]">
              <p className="text-lg text-white z-20">Learn at Centre</p>
              <Link
                href="#apply"
                className="bg-orange-600 hover:bg-orange-400 duration-100 text-center z-20 grid place-items-center px-6 py-3 text-white font-bold shadow-effect rounded-[15px]"
              >
                Get Started
              </Link>
            </div>
            {/* Frame */}
            <div className="frame-2 bg-cover bg-center relative md:w-full after:absolute after:w-full after:h-full after:bg-black after:opacity-50 after:z-10 aspect-video flex flex-col items-center justify-center gap-4 bg-neutral-700 rounded-[30px] after:rounded-[30px]">
              <p className="text-lg text-white z-20">Learn online</p>
              <Link
                href="#apply"
                className="bg-orange-600 hover:bg-orange-400 duration-100 text-center z-20 grid place-items-center px-6 py-3 text-white font-bold shadow-effect rounded-[15px]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
        {/* Our Services Section */}
        <section
          id="services"
          className="flex flex-col items-center w-full section__styles gap-8 py-[72px]"
        >
          {/* Header and tagline and p */}
          <div className="flex flex-col items-center text-start gap-4 w-full">
            <p className="tagline text-start w-full">WHAT WE DO</p>
            <h1 className="heading font-semibold text-3xl text-start text-blue-700 w-full">
              Our Services
            </h1>
          </div>
          {/* Services Container */}
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:grid-flow-row w-full">
            {/* Service */}
            <div className="flex flex-col w-full gap-4 items-center text-start bg-white shadow-effect p-4 lg:p-6 rounded-[30px]">
              {/* Image */}
              <div className="aspect-video rounded-[15px] w-full bg-slate-400"></div>
              {/* Text and name */}
              <p className="text-blue-700 w-full font-bold">
                Courses & Training
              </p>
              <p className="text-blue-900 w-full">
                Courses & Training lorem ipsum dolor sit amet, lorem ipsum dolor
                sit amet, ipsum dolor sit amet, ipsum dolor sit amet,{" "}
              </p>
            </div>
            {/* Service */}
            <div className="flex flex-col w-full gap-4 items-center text-start bg-white shadow-effect p-4 lg:p-6 rounded-[30px]">
              {/* Image */}
              <div className="aspect-video rounded-[15px] w-full bg-slate-400"></div>
              {/* Text and name */}
              <p className="text-blue-700 w-full font-bold">
                Summer Camps & Workshops
              </p>
              <p className="text-blue-900 w-full">
                Courses & Training lorem ipsum dolor sit amet, lorem ipsum dolor
                sit amet, ipsum dolor sit amet, ipsum dolor sit amet,{" "}
              </p>
            </div>
            {/* Service */}
            <div className="flex flex-col w-full gap-4 items-center text-start bg-white shadow-effect p-4 lg:p-6 rounded-[30px]">
              {/* Image */}
              <div className="aspect-video rounded-[15px] w-full bg-slate-400"></div>
              {/* Text and name */}
              <p className="text-blue-700 w-full font-bold">
                AI & Robotics Components
              </p>
              <p className="text-blue-900 w-full">
                Courses & Training lorem ipsum dolor sit amet, lorem ipsum dolor
                sit amet, ipsum dolor sit amet, ipsum dolor sit amet,{" "}
              </p>
            </div>
          </div>
        </section>
        {/* PES KIDS Education FORM */}
        <section
          className="flex flex-col items-center w-full py-[72px] section__styles gap-4"
          id="apply"
        >
          <h1 className="text-2xl text-blue-700 font-semibold heading">
            Apply to join a course
          </h1>
          <PESKidsForm data={PESKidsCourseOptions}></PESKidsForm>
        </section>
        {/* Blue Strip Divider */}
        <div
          id="features"
          className="w-full py-9 bg-blue-700 text-white font-bold text-center text-3xl"
        >
          Our Features
        </div>
        {/* Feature section 1*/}
        <section className="w-full section__styles py-[72px] flex flex-col md:flex-row-reverse gap-8 lg:gap-20 items-center">
          <div className="aspect-[407/367] w-full max-w-[308px] md:max-w-[224px] lg:max-w-[407px] relative">
            <Image src="/kids-features/tool-1.png" fill alt="Feature Image" />
          </div>
          <div className="flex flex-col gap-4 items-center w-full">
            <h1 className="text-start text-xl font-bold text-blue-700 w-full">
              <span className="text-orange-600">Tools</span> for Teachers{" "}
              <span className="text-orange-600">&</span> Students
            </h1>
            <p className="text-left lg:text-lg text-blue-900">
              Session has a dynamic set of teaching tools built to be deployed
              and used during session. Instructor can handout assignments in
              real-time for students to complete and submit.
            </p>
          </div>
        </section>
        {/* Feature section 2*/}
        <section className="w-full section__styles py-[72px] flex flex-col md:flex-row gap-8 lg:gap-20 items-center">
          <div className="aspect-[407/458] w-full max-w-[308px] md:max-w-[224px] lg:max-w-[407px] relative">
            <Image src="/kids-features/tool-2.png" fill alt="Feature Image" />
          </div>
          <div className="flex flex-col gap-4 items-center w-full">
            <h1 className="text-start text-xl font-bold text-blue-700 w-full">
              Assessments, <span className="text-orange-600">Quizzes</span>{" "}
              Tests
            </h1>
            <p className="text-left lg:text-lg text-blue-900">
              We launch weekly and monthly live assignments, quizzes, and tests.
              Student results are automatically entered in the online gradebook.
            </p>
          </div>
        </section>
        {/* Feature section 3*/}
        <section className="w-full section__styles py-[72px] flex flex-col md:flex-row-reverse gap-8 lg:gap-20 items-center">
          <div className="aspect-[407/303] w-full max-w-[308px] md:max-w-[224px] lg:max-w-[407px] relative">
            <Image src="/kids-features/tool-3.png" fill alt="Feature Image" />
          </div>
          <div className="flex flex-col gap-4 items-center w-full">
            <h1 className="text-start text-xl font-bold text-blue-700 w-full">
              Evaluation Management{" "}
              <span className="text-orange-600">System for Students</span>{" "}
            </h1>
            <p className="text-left lg:text-lg text-blue-900">
              We provides tools to help run and manage the session, such as the
              Class Roster, Attendance, and more. With our gradebook,
              instructors can review and grade tests and quizzes in real-time
              and a report is sent to parents containing all the grades of their
              child every month.
            </p>
          </div>
        </section>
        {/* Feature section 4*/}
        <section className="w-full section__styles py-[72px] flex flex-col md:flex-row gap-8 lg:gap-20 items-center">
          <div className="aspect-[407/278] w-full max-w-[308px] md:max-w-[224px] lg:max-w-[407px] relative">
            <Image src="/kids-features/tool-4.png" fill alt="Feature Image" />
          </div>
          <div className="flex flex-col gap-4 items-center w-full">
            <h1 className="text-start text-xl font-bold text-blue-700 w-full">
              <span className="text-orange-600">One-on-one</span> Discussions
            </h1>
            <p className="text-left lg:text-lg text-blue-900">
              Instructors and assistant instructors can speak with students
              privately without leaving the session environment.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default PESKids;