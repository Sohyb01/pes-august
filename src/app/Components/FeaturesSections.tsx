import React from "react";
import Image from "next/image";
import { ourFeaturesData } from "../lib/data";

const FeaturesSections = () => {
  return (
    <>
      {/* Feature section 1*/}
      <section className="w-full section__styles py-[72px] flex flex-col md:flex-row-reverse gap-8 lg:gap-20 items-center">
        <div className="aspect-[407/367] w-full max-w-[308px] md:max-w-[224px] lg:max-w-[407px] relative">
          <Image src={ourFeaturesData[0].imgUrl} fill alt="Feature Image" />
        </div>
        <div className="flex flex-col gap-4 items-center w-full">
          <h1 className="text-start text-xl font-bold text-blue-700 w-full">
            <span className="text-orange-600">Tools</span> for Teachers{" "}
            <span className="text-orange-600">&</span> Students
          </h1>
          <p className="text-left lg:text-lg text-blue-900">
            {ourFeaturesData[0].description}
          </p>
        </div>
      </section>
      {/* Feature section 2*/}
      <section className="w-full section__styles py-[72px] flex flex-col md:flex-row gap-8 lg:gap-20 items-center">
        <div className="aspect-[407/458] w-full max-w-[308px] md:max-w-[224px] lg:max-w-[407px] relative">
          <Image src={ourFeaturesData[1].imgUrl} fill alt="Feature Image" />
        </div>
        <div className="flex flex-col gap-4 items-center w-full">
          <h1 className="text-start text-xl font-bold text-blue-700 w-full">
            Assessments, <span className="text-orange-600">Quizzes</span> Tests
          </h1>
          <p className="text-left lg:text-lg text-blue-900">
            {ourFeaturesData[1].description}
          </p>
        </div>
      </section>
      {/* Feature section 3*/}
      <section className="w-full section__styles py-[72px] flex flex-col md:flex-row-reverse gap-8 lg:gap-20 items-center">
        <div className="aspect-[407/303] w-full max-w-[308px] md:max-w-[224px] lg:max-w-[407px] relative">
          <Image src={ourFeaturesData[2].imgUrl} fill alt="Feature Image" />
        </div>
        <div className="flex flex-col gap-4 items-center w-full">
          <h1 className="text-start text-xl font-bold text-blue-700 w-full">
            Evaluation Management{" "}
            <span className="text-orange-600">System for Students</span>{" "}
          </h1>
          <p className="text-left lg:text-lg text-blue-900">
            {ourFeaturesData[2].description}
          </p>
        </div>
      </section>
      {/* Feature section 4*/}
      <section className="w-full section__styles py-[72px] flex flex-col md:flex-row gap-8 lg:gap-20 items-center">
        <div className="aspect-[407/278] w-full max-w-[308px] md:max-w-[224px] lg:max-w-[407px] relative">
          <Image src={ourFeaturesData[3].imgUrl} fill alt="Feature Image" />
        </div>
        <div className="flex flex-col gap-4 items-center w-full">
          <h1 className="text-start text-xl font-bold text-blue-700 w-full">
            <span className="text-orange-600">One-on-one</span> Discussions
          </h1>
          <p className="text-left lg:text-lg text-blue-900">
            {ourFeaturesData[3].description}
          </p>
        </div>
      </section>
    </>
  );
};

export default FeaturesSections;
