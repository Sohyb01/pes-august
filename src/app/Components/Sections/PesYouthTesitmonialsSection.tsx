import { pesYouthTestimonials } from "@/app/lib/data";
import Image from "next/image";
import React from "react";

const PesYouthTesitmonialsSection = () => {
  return (
    <section className="flex flex-col items-start w-full py-[72px] section__styles gap-10 ">
      {/* Headline and tagline */}
      <div className="flex flex-col w-full text-start gap-4">
        <p className="text-sm tagline">TESTIMONIALS</p>
        <h1 className="text-2xl font-semibold heading text-blue-700">
          Our previous students
        </h1>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-2 grid-flow-row md:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-4 sm:gap-y-4 md:gap-x-8 md:gap-y-14 lg:gap-x-14 w-full">
        {/* Member */}
        {pesYouthTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-start gap-4"
          >
            {/* Image */}
            <div className="aspect-square w-full relative">
              <Image src={testimonial.imgUrl} fill alt="student" />
            </div>
            {/* Name & Desc */}
            <div>
              <p className="text-blue-700 font-bold">{testimonial.name}</p>
              <p className="text-blue-900">{testimonial.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PesYouthTesitmonialsSection;
