import { pesKidsTestimonialsData } from "@/app/lib/data";
import React from "react";
import Image from "next/image";

const PesKidsTestimonialsSection = () => {
  return (
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
          {pesKidsTestimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="flex gap-5 items-center text-start md:flex-col"
            >
              {/* Image */}
              <div className="aspect-square w-full max-w-[130px] sm:max-w-[180px] md:max-w-none  rounded-[30px] bg-slate-400 relative">
                <Image
                  src={testimonial.imgUrl}
                  alt="Parent Image"
                  fill
                  className="object-cover rounded-[30px]"
                />
              </div>
              {/* Text and name */}
              <p className="text-start text-sm md:text-base w-full text-blue-800">
                {testimonial.text} <br /> <br />
                <span className="">{testimonial.name}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PesKidsTestimonialsSection;
