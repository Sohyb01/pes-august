import AddPESMemberForm from "@/app/Components/AddPESMemberForm";
import Image from "next/image";
import prisma from "@/app/lib/prisma";
import React from "react";

async function page() {
  const pesMembersData = await prisma.pesTeamMember.findMany({});

  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] pt-[144px] ">
      {/* Team members section */}
      <section className="flex flex-col items-start w-full py-[72px] section__styles gap-10 ">
        {/* Headline and tagline */}
        <h1 className="text-2xl font-semibold heading text-blue-700">
          Team Members
        </h1>
        {/* Members grid */}
        <div className="grid grid-cols-2 grid-flow-row md:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-4 sm:gap-y-4 md:gap-x-8 md:gap-y-14 lg:gap-x-14 w-full">
          {/* Grid member item */}
          {pesMembersData.map((member, key) => {
            return (
              <div
                key={key}
                className="flex flex-col items-start text-start gap-4"
              >
                {/* Image */}
                <div className="aspect-square w-full relative">
                  <Image src={member.imgUrl || ""} fill alt="PES Team member" />
                </div>
                {/* Name & Role */}
                <div>
                  <p className="text-blue-700 font-bold">{member.name}</p>
                  <p className="text-blue-900 text-sm">{member.role}</p>
                </div>
                {/* Social media links */}
                <div className="flex items-center justify-start gap-4 w-full">
                  {member.facebookUrl && (
                    <a
                      className=" fill-blue-700 duration-100 hover:fill-blue-500"
                      href={member.facebookUrl}
                      target="_blank"
                      id="facebook"
                    >
                      <svg
                        className="h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 10.0609C20 4.50304 15.5242 0 10 0C4.47581 0 0 4.50304 0 10.0609C0 15.0824 3.65685 19.2446 8.4375 20V12.9692H5.89718V10.0609H8.4375V7.84422C8.4375 5.32292 9.92944 3.93022 12.2145 3.93022C13.3089 3.93022 14.4532 4.12657 14.4532 4.12657V6.60122H13.1919C11.95 6.60122 11.5625 7.37688 11.5625 8.17241V10.0609H14.3359L13.8923 12.9692H11.5625V20C16.3431 19.2446 20 15.0824 20 10.0609Z" />
                      </svg>
                    </a>
                  )}
                  {member.instagramUrl && (
                    <a
                      className=" fill-blue-700 duration-100 hover:fill-blue-500"
                      href={member.instagramUrl}
                      target="_blank"
                      id="instagram"
                    >
                      <svg
                        className="h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 21 20"
                      >
                        <path d="M10.5022 4.87225C7.66453 4.87225 5.37563 7.16166 5.37563 10C5.37563 12.8383 7.66453 15.1277 10.5022 15.1277C13.3399 15.1277 15.6288 12.8383 15.6288 10C15.6288 7.16166 13.3399 4.87225 10.5022 4.87225ZM10.5022 13.3337C8.66843 13.3337 7.16927 11.8387 7.16927 10C7.16927 8.16133 8.66397 6.6663 10.5022 6.6663C12.3405 6.6663 13.8352 8.16133 13.8352 10C13.8352 11.8387 12.336 13.3337 10.5022 13.3337ZM17.0343 4.6625C17.0343 5.32746 16.4989 5.85853 15.8385 5.85853C15.1737 5.85853 14.6428 5.32299 14.6428 4.6625C14.6428 4.00201 15.1782 3.46647 15.8385 3.46647C16.4989 3.46647 17.0343 4.00201 17.0343 4.6625ZM20.4297 5.87638C20.3539 4.27424 19.988 2.85507 18.8146 1.68582C17.6456 0.516568 16.2267 0.150619 14.6249 0.070289C12.9741 -0.0234297 8.02593 -0.0234297 6.37507 0.070289C4.77775 0.146156 3.3589 0.512105 2.18544 1.68136C1.01199 2.85061 0.650586 4.26978 0.570273 5.87192C0.476576 7.52315 0.476576 12.4724 0.570273 14.1236C0.646124 15.7258 1.01199 17.1449 2.18544 18.3142C3.3589 19.4834 4.77328 19.8494 6.37507 19.9297C8.02593 20.0234 12.9741 20.0234 14.6249 19.9297C16.2267 19.8538 17.6456 19.4879 18.8146 18.3142C19.9835 17.1449 20.3494 15.7258 20.4297 14.1236C20.5234 12.4724 20.5234 7.52761 20.4297 5.87638ZM18.297 15.8953C17.949 16.7701 17.2752 17.4439 16.3963 17.7965C15.08 18.3186 11.9568 18.1981 10.5022 18.1981C9.04769 18.1981 5.91997 18.3142 4.6082 17.7965C3.73369 17.4484 3.05996 16.7745 2.70747 15.8953C2.18544 14.5788 2.30591 11.4549 2.30591 10C2.30591 8.54513 2.18991 5.41671 2.70747 4.10465C3.05549 3.22995 3.72922 2.55606 4.6082 2.2035C5.92443 1.68136 9.04769 1.80185 10.5022 1.80185C11.9568 1.80185 15.0845 1.68582 16.3963 2.2035C17.2708 2.5516 17.9445 3.22548 18.297 4.10465C18.819 5.42118 18.6985 8.54513 18.6985 10C18.6985 11.4549 18.819 14.5833 18.297 15.8953Z" />
                      </svg>
                    </a>
                  )}
                  {member.instagramUrl && (
                    <a
                      className=" fill-blue-700 duration-100 hover:fill-blue-500"
                      href={member.instagramUrl}
                      target="_blank"
                      id="linkedin"
                    >
                      <svg
                        className="h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4.47679 20H0.330357V6.64702H4.47679V20ZM2.40134 4.82555C1.07545 4.82555 0 3.72732 0 2.40139C9.49017e-09 1.7645 0.252998 1.1537 0.703336 0.703352C1.15367 0.253003 1.76446 0 2.40134 0C3.03821 0 3.649 0.253003 4.09934 0.703352C4.54968 1.1537 4.80268 1.7645 4.80268 2.40139C4.80268 3.72732 3.72679 4.82555 2.40134 4.82555ZM19.9955 20H15.858V13.4999C15.858 11.9507 15.8268 9.96406 13.7022 9.96406C11.5464 9.96406 11.2161 11.6471 11.2161 13.3882V20H7.07411V6.64702H11.0509V8.46849H11.1089C11.6625 7.41936 13.0147 6.31219 15.0321 6.31219C19.2286 6.31219 20 9.07565 20 12.665V20H19.9955Z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
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
          Add a Member
        </h1>
        <AddPESMemberForm></AddPESMemberForm>
      </section>
    </div>
  );
}

export default page;
