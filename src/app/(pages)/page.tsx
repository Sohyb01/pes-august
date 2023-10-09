import Link from "next/link";
import Image from "next/image";
import StatisticsSection from "../sections/StatisticsSection";

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
                    <div className="bg-slate-400 aspect-video w-full"></div>
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
                    <div className="bg-slate-400 aspect-video w-full"></div>
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
              skills gives your kids a head start. <br /> <br />
              Our teaching integrates the skills & technologies that are desired
              by modern companies. Building a strong foundation with these
              skills gives your kids a head start. <br /> <br />
              Our teaching integrates the skills & technologies that are desired
              by modern companies. Building a strong foundation with these
              skills gives your kids a head start.
            </p>
          </div>
          {/* Images */}
          <div className="flex flex-col md:flex-row lg:flex-col gap-4 md:gap-8 w-full lg:max-w-[436px]">
            {/* Images */}
            <div className="w-full aspect-video bg-slate-400"></div>
            <div className="w-full aspect-video bg-slate-400"></div>
          </div>
        </div>
        {/* Statistics Section */}
        <StatisticsSection></StatisticsSection>
        {/* Learn modern section (filler section) */}
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
                Our teaching integrates the skills & technologies that are
                desired by modern companies. Building a strong foundation with
                these skills gives your kids a head start.
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
      </div>
    </>
  );
}
