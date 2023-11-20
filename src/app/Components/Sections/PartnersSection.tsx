import React from "react";
import Image from "next/image";

function PartnersSection() {
  return (
    <section className="flex flex-col w-full py-[72px] section__styles gap-8 fancy-line-border">
      <p className="tagline text-center">OUR PARTNERS & CLIENTS INCLUDE</p>
      {/* Clients container */}
      <div className="flex flex-wrap items-center justify-center w-full gap-4 md:gap-8">
        {/* individual client */}
        <div className="grid place-items-center p-4 rounded-[3px] w-[146px] h-[111px] sm:h-[155px] md:h-[160px] lg:h-[170px] sm:w-[208px] md:w-[213px] lg:w-[226px]">
          <div className="partner-img">
            <div className="relative aspect-[168/173] h-full">
              <Image
                src="/partners/client1-min.png"
                alt="Ministry of youth and sports"
                fill
              />
            </div>
          </div>
        </div>
        <div className="grid place-items-center p-4 rounded-[3px] w-[146px] h-[111px] sm:h-[155px] md:h-[160px] lg:h-[170px] sm:w-[208px] md:w-[213px] lg:w-[226px]">
          <div className="partner-img">
            <div className="relative aspect-[204/181] h-full">
              <Image
                src="/partners/client3-min.png"
                alt="Ministry of youth and sports"
                fill
              />
            </div>
          </div>
        </div>
        <div className="grid place-items-center p-4 rounded-[3px] w-[146px] h-[111px] sm:h-[155px] md:h-[160px] lg:h-[170px] sm:w-[208px] md:w-[213px] lg:w-[226px]">
          <div className="partner-img">
            <div className="relative aspect-[172/172] h-full">
              <Image
                src="/partners/client2-min.png"
                alt="Ministry of youth and sports"
                fill
              />
            </div>
          </div>
        </div>
        <div className="grid place-items-center p-4 rounded-[3px] w-[146px] h-[111px] sm:h-[155px] md:h-[160px] lg:h-[170px] sm:w-[208px] md:w-[213px] lg:w-[226px]">
          <div className="partner-img">
            <div className="relative aspect-square h-full">
              <Image
                src="/partners/client6-min.png"
                alt="Ministry of youth and sports"
                fill
              />
            </div>
          </div>
        </div>
        <div className="grid place-items-center p-4 rounded-[3px] w-[146px] h-[111px] sm:h-[155px] md:h-[160px] lg:h-[170px] sm:w-[208px] md:w-[213px] lg:w-[226px]">
          <div className="partner-img">
            <div className="relative aspect-[177/182] h-full">
              <Image
                src="/partners/client4-min.png"
                alt="Ministry of youth and sports"
                fill
              />
            </div>
          </div>
        </div>
        <div className="grid place-items-center p-4 rounded-[3px] w-[146px] h-[111px] sm:h-[155px] md:h-[160px] lg:h-[170px] sm:w-[208px] md:w-[213px] lg:w-[226px]">
          <div className="partner-img">
            <div className="relative aspect-[1410/736] w-full">
              <Image
                src="/partners/client5-min.png"
                alt="Ministry of youth and sports"
                fill
              />
            </div>
          </div>
        </div>
        <div className="grid place-items-center p-4 rounded-[3px] w-[146px] h-[111px] sm:h-[155px] md:h-[160px] lg:h-[170px] sm:w-[208px] md:w-[213px] lg:w-[226px]">
          <div className="partner-img">
            <div className="relative aspect-[793/778] h-full">
              <Image
                src="/partners/client7-min.png"
                alt="Ministry of youth and sports"
                fill
              />
            </div>
          </div>
        </div>
        <div className="grid place-items-center p-4 rounded-[3px] w-[146px] h-[111px] sm:h-[155px] md:h-[160px] lg:h-[170px] sm:w-[208px] md:w-[213px] lg:w-[226px]">
          <div className="partner-img">
            <div className="relative aspect-[114/60] w-full">
              <Image
                src="/partners/client8-min.png"
                alt="Ministry of youth and sports"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
