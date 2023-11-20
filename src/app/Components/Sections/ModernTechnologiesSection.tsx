import React from "react";
import Image from "next/image";

function ModernTechnologiesSection() {
  return (
    <section className="flex flex-col lg:flex-row-reverse lg:gap-10 lg:justify-between section__styles items-center py-[72px] gap-8 w-full fancy-line-border">
      {/* Technologies container */}
      <div className="flex flex-wrap md:flex-nowrap lg:flex-wrap width-[308px] lg:w-[350px] sm:w-full justify-center gap-8">
        <div className="aspect-square w-[138px] sm:w-[150px] md:w-full lg:w-[159px] bg-cover bg-center relative">
          <Image src="/microsoft.png" fill alt="Microsoft" />
        </div>
        <div className="aspect-square w-[138px] sm:w-[150px] md:w-full lg:w-[159px] bg-cover bg-center relative">
          <Image src="/python.png" fill alt="Python" />
        </div>
        <div className="aspect-square w-[138px] sm:w-[150px] md:w-full lg:w-[159px] bg-cover bg-center relative">
          <Image src="/scratch.png" fill alt="Scratch" />
        </div>
        <div className="aspect-square w-[138px] sm:w-[150px] md:w-full lg:w-[159px] bg-cover bg-center relative">
          <Image src="/arduino.png" fill alt="Arduino" />
        </div>
      </div>
      {/* Header, subtext, button */}
      <div className="flex flex-col items-start gap-8 w-full lg:w-[570px]">
        {/* Header & Subtext */}
        <div className="flex flex-col gap-4">
          <p className="tagline text-start">METHODOLOGY</p>
          <h1 className="text-2xl text-start font-semibold text-blue-700 lg:text-start">
            Learn modern technologies and skills that are{" "}
            <span className="text-orange-600">in-demand</span>
          </h1>
          <p className="text-lg text-blue-900 text-start lg:text-start max-w-[600px]">
            Our teaching integrates the skills & technologies that are desired
            by modern companies. Building a strong foundation with these skills
            gives your kids a head start.
          </p>
        </div>
        {/* CTA Button */}
        <a
          href="#cta"
          className="bg-orange-600 hover:bg-orange-400 duration-100 text-center grid place-items-center px-6 py-3 w-[160px] text-white font-bold shadow-effect"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default ModernTechnologiesSection;
