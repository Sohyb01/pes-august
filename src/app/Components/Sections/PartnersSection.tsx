import React from "react";
import Image from "next/image";
import { partnerLogoImgs } from "@/app/lib/data";

function PartnersSection() {
  return (
    <section className="flex flex-col w-full py-[72px] section__styles gap-8 fancy-line-border">
      <p className="tagline text-center">OUR PARTNERS & CLIENTS INCLUDE</p>
      {/* Clients container */}
      <div className="flex flex-wrap items-center justify-center w-full gap-4 md:gap-8">
        {/* individual client */}
        {partnerLogoImgs.map((img, index) => (
          <div
            key={index}
            className="grid place-items-center p-4 rounded-[3px] w-[146px] h-[111px] sm:h-[155px] md:h-[160px] lg:h-[170px] sm:w-[208px] md:w-[213px] lg:w-[226px]"
          >
            <div className="partner-img">
              <div className="relative h-full w-full">
                <Image
                  src={img}
                  alt="Ministry of youth and sports"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PartnersSection;
