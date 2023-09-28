import React from "react";
import { RevealDiv } from "../lib/RevealDiv";

function StatisticsSection() {
  return (
    <section className="flex flex-col gap-8 text-center items-center w-full py-[72px] relative">
      <p className="tagline">OUR SUCCESS</p>
      <div className="grid grid-cols-2 grid-rows-2 md:flex items-center gap-4 md:justify-between section__styles w-full">
        {/* Statistic */}
        <div className="md:w-[160px] aspect-square flex flex-col text-center items-center md:h-[160px] bg-white shadow-effect md:border-[1px] justify-center z-[1] rounded-[30px]">
          <h1 className="text-3xl font-bold text-blue-700">850+</h1>
          <p className="-mt-2 text-md font-semibold text-blue-900">Students</p>
        </div>
        <div className="md:w-[160px] aspect-square flex flex-col text-center items-center md:h-[160px] bg-white shadow-effect md:border-[1px] justify-center z-[1] rounded-[30px]">
          <h1 className="text-3xl font-bold text-blue-700">1.7k</h1>
          <p className="-mt-2 text-md font-semibold text-blue-900">
            Support Hours
          </p>
        </div>
        <div className="md:w-[160px] aspect-square flex flex-col text-center items-center md:h-[160px] bg-white shadow-effect md:border-[1px] justify-center z-[1] rounded-[30px]">
          <h1 className="text-3xl font-bold text-blue-700">8</h1>
          <p className="-mt-2 text-md font-semibold text-blue-900">
            Chief Experts
          </p>
        </div>
        <div className="md:w-[160px] aspect-square flex flex-col text-center items-center md:h-[160px] bg-white shadow-effect md:border-[1px] justify-center z-[1] rounded-[30px]">
          <h1 className="text-3xl font-bold text-blue-700">139</h1>
          <p className="-mt-2 text-md font-semibold text-blue-900">Projects</p>
        </div>
        <div className="hidden w-[160px] lg:flex flex-col text-center items-center  md:h-[160px] md:bg-white shadow-effect md:border-[1px] justify-center z-[1] rounded-[30px]">
          <h1 className="text-3xl font-bold text-blue-700">2+</h1>
          <p className="-mt-2 text-md font-semibold text-blue-900 w-full max-w-[11ch]">
            Years of Experience
          </p>
        </div>
      </div>
      {/* Blue streak */}
      <div className="hidden md:block absolute top-[188px] h-8 w-full max-w-[702px] lg:max-w-[998px] bg-blue-600"></div>
    </section>
  );
}

export default StatisticsSection;
