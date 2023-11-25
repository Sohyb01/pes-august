import Link from "next/link";
import Image from "next/image";
import StatisticsSection from "../Components/Sections/StatisticsSection";
import PartnersSection from "../Components/Sections/PartnersSection";
import ModernTechnologiesSection from "../Components/Sections/ModernTechnologiesSection";

export default async function Home() {
  return (
    // All sections container
    <>
      <div className="flex flex-col items-center w-full">
        {/* Hero Section */}
        <section
          className="flex pb-[72px] section__styles relative flex-col items-center w-full fancy-line-border"
          id="cta"
        >
          <div className="hero-section-content pt-[144px] flex flex-col items-center gap-10 max-w-[656px] lg:max-w-[672px] z-10">
            {/* Header, subtext, & Buttons */}
            <div className="flex flex-col items-center gap-8">
              {/* Header and subtext */}
              <div className="flex flex-col items-center gap-4">
                <h1 className="heading font-semibold text-3xl md:text-5xl text-center text-blue-700">
                  Learn{" "}
                  <span className="text-orange-600 heading">in-demand</span>{" "}
                  skills & become accredited
                </h1>
                <p className="text-blue-900 text-center text-lg">
                  We set our students up for success in a technology-driven
                  future through our accredited courses, materials, and
                  certifications.
                </p>
              </div>
              {/* Buttons */}
              <div className="flex flex-col items-center gap-8">
                <p className="tagline">GET STARTED</p>
                {/* CTA Options Container */}
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  {/* CTA Option*/}
                  <Link
                    href="/pes-kids"
                    className="flex flex-col gap-2 p-4 shadow-effect bg-white text-center"
                  >
                    <div className="bg-slate-400 aspect-video w-full relative">
                      <Image src="/kids.png" alt="PES Kids Image" fill />
                    </div>
                    <h3 className="text-xl font-bold text-blue-700">
                      Join <br className="md:hidden" /> PES{" "}
                      <span className="text-orange-600">Kids</span>
                    </h3>
                    <p className="text-blue-900 text-md">
                      Enroll your kids into our programs for kids, preparing
                      them for the future
                    </p>
                  </Link>
                  {/* CTA Option*/}
                  <Link
                    href="/pes-youth"
                    className="flex flex-col gap-2 p-4 shadow-effect bg-white text-center"
                  >
                    <div className="bg-slate-400 aspect-video w-full relative">
                      <Image src="/youth.png" alt="PES Kids Image" fill />
                    </div>
                    <h3 className="text-xl font-bold text-blue-700">
                      Join <br className="md:hidden" />
                      PES <span className="text-orange-600">Youth</span>
                    </h3>
                    <p className="text-blue-900 text-md">
                      For university students, join our programs & get
                      accredited certifications
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* BG Graphics container */}
          <div className="hidden md:block absolute w-full max-w-[768px] lg:max-w-[1080px] h-full">
            {/* Graphics */}
            <svg
              className="absolute top-[110px] left-[72px] lg:left-[238px] lg:top-[104px]"
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="87"
              viewBox="0 0 72 87"
              fill="none"
            >
              <path
                d="M0 17.8464L72 0V63.652L4.76033 81.4984L0 86.2574V17.8464Z"
                fill="#BBF7D0"
              />
            </svg>
            <svg
              className="absolute top-[620px] lg:top-[477px] right-[86px] lg:right-[204px]"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="44"
              viewBox="0 0 36 44"
              fill="none"
            >
              <path
                d="M0 8.92318L36 0V31.826L2.38017 40.7492L0 43.1287V8.92318Z"
                fill="#FDBA74"
              />
            </svg>
            <svg
              className="absolute bottom-[-20px] lg:bottom-[0px] left-[48px] lg:left-[144px]"
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="68"
              viewBox="0 0 56 68"
              fill="none"
            >
              <path
                d="M56 13.8805L0 0V49.5071L52.2975 63.3876L56 67.0891V13.8805Z"
                fill="#FBCFE8"
              />
            </svg>
            <svg
              className="hidden md:block absolute lg:hidden right-5 top-[756px]"
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="65"
              viewBox="0 0 54 65"
              fill="none"
            >
              <path
                d="M0 13.3848L54 0V47.739L3.57025 61.1238L0 64.6931V13.3848Z"
                fill="#C7D2FE"
              />
            </svg>
            <div className="graphic-img-1 bg-cover absolute bg-center w-[108px] lg:w-[144px] top-[440px] left-0 lg:top-[407px] lg:left-10 aspect-[108/169.51]"></div>
            <div className="graphic-img-2 bg-cover top-[220px] right-5 lg:top-[144px] lg:right-10 absolute bg-center w-[108px] lg:w-[144px]  aspect-[108/142.88]"></div>
            <div className="graphic-img-3 bg-cover hidden lg:block absolute bg-center w-[144px] h-[216.99px] bottom-0 right-10"></div>
          </div>
        </section>
        {/* Partners section */}
        <PartnersSection></PartnersSection>
        {/* About PES Section (filler section) */}
        <div className="section__styles flex flex-col lg:flex-row gap-8 lg:gap-20 w-full py-[72px]">
          {/* Text part */}
          <div className="flex text-start flex-col gap-4 w-full lg:max-w-[484px]">
            <div className="flex flex-col gap-4 text-start">
              <p className="tagline text-start">ABOUT PES</p>
              <h1 className="text-2xl font-semibold text-blue-700 lg:text-start">
                Who we are
              </h1>
            </div>
            <p className="text-lg text-blue-900 lg:text-start max-w-[600px]">
              Our teaching integrates the skills & technologies that are desired
              by modern companies. Building a strong foundation with these
              skills gives you a head start.
            </p>
          </div>
          {/* Images */}
          <div className="flex flex-col md:flex-row lg:flex-col gap-4 md:gap-8 w-full lg:max-w-[436px]">
            {/* Images */}
            <div className="w-full aspect-video relative rounded-[30px]">
              <Image
                src="/pes-team-1.jpg"
                alt="team"
                fill
                className="object-cover rounded-[30px]"
              />
            </div>
          </div>
        </div>
        {/* Statistics Section */}
        <StatisticsSection></StatisticsSection>
        {/* Learn modern section (filler section) */}
        <ModernTechnologiesSection></ModernTechnologiesSection>
      </div>
    </>
  );
}
