import React from "react";
import Image from "next/image";

function AboutSection1() {
  return (
    <section className="flex flex-col lg:flex-row items-start w-full py-[72px] section__styles lg:items-center gap-8 ">
      {/* Header, tagline, paragraphs */}
      <div className="flex flex-col gap-4 w-full max-w-[540px]">
        {/* Headline and tagline */}
        <div className="flex flex-col w-full text-start gap-4">
          <p className="text-sm tagline">MORE INFORMATION</p>
          <h1 className="text-2xl font-semibold heading text-blue-700">
            About our programs & certificates
          </h1>
        </div>
        {/* Paragraph */}
        <p className="text-blue-900">
          Our courses, programs, and certificates are certified by Egyptian &
          International entities including ITIDA, The Ministy of Youth and
          Sports, STEM, Google, TIEC, and more
        </p>
      </div>
      {/* Images */}
      <div className="w-full relative aspect-[57/38]">
        <Image src="/boy-desk.jpg" alt="Boy on desk" fill />
      </div>
    </section>
  );
}

export default AboutSection1;
