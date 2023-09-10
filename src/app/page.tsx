import Image from "next/image";

export default function Home() {
  return (
    // All sections container
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="flex pb-[72px] section__styles relative flex-col items-center w-full">
        <div className="hero-section-content pt-[144px] flex flex-col items-center gap-20 max-w-[656px] z-10">
          {/* Header, subtext, & Buttons */}
          <div className="flex flex-col items-center gap-8">
            {/* Header and subtext */}
            <div className="flex flex-col items-center gap-4">
              <h1 className="heading font-semibold text-4xl md:text-5xl text-center text-blue-700">
                Give your children a brighter future
              </h1>
              <p className="text-blue-900 text-center text-lg">
                We set our students up for success in a technology-driven future
                through our accredited courses, materials, and certifications.
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                target="_blank"
                href="https://wa.me/201222903316"
                className="bg-orange-600 hover:bg-orange-400 duration-100 text-center grid place-items-center px-6 py-3 w-[160px] text-white font-bold shadow-effect"
              >
                Join a course
              </a>
              {/* Hidden for now! */}
              <button className="bg-white hover:bg-blue-100 duration-100 text-center place-items-center px-6 py-3 w-[160px] text-blue-900 font-bold shadow-effect hidden gridd">
                Contact us
              </button>
            </div>
          </div>
          {/* Video */}
          <a
            href="https://fb.watch/mXbuC7iQz9/"
            target="_blank"
            className="rounded-[3px] w-full relative max-w-[484px] hero-video"
          >
            <svg
              className="z-10"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <rect x="1" y="1" width="38" height="38" rx="19" fill="#1E3A8A" />
              <path
                d="M26.5 19.134C27.1667 19.5189 27.1667 20.4811 26.5 20.866L17.5 26.0622C16.8333 26.4471 16 25.966 16 25.1962L16 14.8038C16 14.034 16.8333 13.5529 17.5 13.9378L26.5 19.134Z"
                fill="white"
              />
              <rect
                x="1"
                y="1"
                width="38"
                height="38"
                rx="19"
                stroke="#1E3A8A"
                strokeWidth="2"
              />
            </svg>
            {/* <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpesmisr%2Fvideos%2F1094362274448679%2F&show_text=false&t=0&mute=0"
              className="border-none overflow-hidden w-full aspect-[484/304]"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe> */}
          </a>
        </div>
        {/* BG Graphics container */}
        <div className="hidden md:block absolute w-full max-w-[768px] lg:max-w-[1080px] h-full">
          {/* Graphics */}
          <svg
            className="absolute top-[100px] left-[52px] lg:top-[144px] lg:left-[128px]"
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
            className="absolute bottom-[102px] lg:bottom-[0px] left-[48px] lg:left-[144px]"
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
          <div className="graphic-img-1 bg-cover absolute bg-center w-[108px] lg:w-[144px] top-[380px] left-5 lg:top-[407px] lg:left-10 aspect-[108/169.51]"></div>
          <div className="graphic-img-2 bg-cover top-[380px] right-5 lg:top-[144px] lg:right-10 absolute bg-center w-[108px] lg:w-[144px]  aspect-[108/142.88]"></div>
          <div className="graphic-img-3 bg-cover hidden lg:block absolute bg-center w-[144px] h-[216.99px] bottom-0 right-10"></div>
        </div>
      </section>
      {/* Statistics Section */}
      <section className="flex flex-col w-full my-[72px] px-4 sm:px-6 md:px-0 max-w-[480px] md:max-w-none">
        {/* Statistics container */}
        <div className="flex flex-wrap relative items-center justify-center gap-4 md:justify-between section__styles py-6 w-full bg-white md:bg-transparent shadow-md md:shadow-none">
          {/* Statistic */}
          <div className="w-[160px] flex flex-col text-center items-center md:h-[160px] md:bg-white md:shadow-xl md:border-[1px] justify-center z-[1]">
            <h1 className="text-3xl font-bold text-blue-700">850+</h1>
            <p className="-mt-2 text-md font-semibold text-blue-900">
              Students
            </p>
          </div>
          <div className="w-[160px] flex flex-col text-center items-center md:h-[160px] md:bg-white md:shadow-xl md:border-[1px] justify-center z-[1]">
            <h1 className="text-3xl font-bold text-blue-700">1.7k</h1>
            <p className="-mt-2 text-md font-semibold text-blue-900">
              Hours of Support
            </p>
          </div>
          <div className="w-[160px] flex flex-col text-center items-center md:h-[160px] md:bg-white md:shadow-xl md:border-[1px] justify-center z-[1]">
            <h1 className="text-3xl font-bold text-blue-700">8</h1>
            <p className="-mt-2 text-md font-semibold text-blue-900">
              Chief Experts
            </p>
          </div>
          <div className="w-[160px] flex flex-col text-center items-center md:h-[160px] md:bg-white md:shadow-xl md:border-[1px] justify-center z-[1]">
            <h1 className="text-3xl font-bold text-blue-700">139</h1>
            <p className="-mt-2 text-md font-semibold text-blue-900">
              Projects
            </p>
          </div>
          <div className="hidden w-[160px] lg:flex flex-col text-center items-center  md:h-[160px] md:bg-white md:shadow-xl md:border-[1px] justify-center z-[1]">
            <h1 className="text-3xl font-bold text-blue-700">2+</h1>
            <p className="-mt-2 text-md font-semibold text-blue-900">
              Years of Experience
            </p>
          </div>
          {/* Blue streak */}
          <div className="hidden md:block absolute top-[88px] h-8 w-full max-w-[704px] lg:max-w-[1000px] bg-blue-600"></div>
        </div>
      </section>
      {/* Learn modern section (filler section) */}
      <div className="flex flex-col lg:flex-row-reverse lg:gap-10 lg:justify-between section__styles items-center py-[72px] gap-8 w-full">
        {/* Technologies container */}
        <div className="flex flex-wrap md:flex-nowrap lg:flex-wrap width-[308px] lg:w-[350px] sm:w-full justify-center gap-8">
          <div className="aspect-square w-[138px] sm:w-[150px] md:w-full lg:w-[159px] bg-cover bg-center microsoft"></div>
          <div className="aspect-square w-[138px] sm:w-[150px] md:w-full lg:w-[159px] bg-cover bg-center python"></div>
          <div className="aspect-square w-[138px] sm:w-[150px] md:w-full lg:w-[159px] bg-cover bg-center scratch"></div>
          <div className="aspect-square w-[138px] sm:w-[150px] md:w-full lg:w-[159px] bg-cover bg-center arduino"></div>
        </div>
        {/* Header, subtext, button */}
        <div className="flex flex-col items-center lg:items-start gap-8 w-full lg:w-[570px]">
          {/* Header & Subtext */}
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl text-center font-semibold text-blue-700 lg:text-start">
              Learn modern technologies and skills that are{" "}
              <span className="text-orange-600">in-demand</span>
            </h1>
            <p className="text-lg text-blue-900 text-center lg:text-start max-w-[600px]">
              Our teaching integrates the skills & technologies that are desired
              by modern companies. Building a strong foundation with these
              skills gives your kids a head start.
            </p>
          </div>
          {/* CTA Button */}
          <a
            target="_blank"
            href="https://wa.me/201222903316"
            className="bg-orange-600 hover:bg-orange-400 duration-100 text-center grid place-items-center px-6 py-3 w-[160px] text-white font-bold shadow-effect"
          >
            View courses
          </a>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="flex flex-col section__styles items-center py-[72px] gap-8 w-full">
        <h1 className="text-2xl font-semibold text-blue-700">
          What others say
        </h1>
        {/* Testimonials and CTA */}
        <div className="flex flex-col lg:flex-row gap-8 lg:items-end">
          {/* Testimonials Container */}
          <div className="flex flex-col items-center shadow-effect rounded-[3px] overflow-scroll scroll-styling max-h-[736px] lg:max-h-[636px] testimonials-container">
            {/* Individual Testimonials*/}
            <div className="even:bg-neutral-100 odd:bg-white flex flex-col gap-8 text-center items-center px-4 py-8  border-neutral-200 border-[2px] border-solid w-full">
              <p className="font-semibold text-md text-neutral-500">
                Excellent education and amazing staff, My son learned coding in
                less than 3 months! I couldn&apos;t be happier.
              </p>
              {/* Name and stars */}
              <div className="flex justify-center items-center gap-8 gap-y-2 flex-wrap">
                <p className="text-blue-700 text-md font-bold">
                  Dr/ Folan Elfolany
                </p>
                {/* Stars */}
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="even:bg-neutral-100 odd:bg-white flex flex-col gap-8 text-center items-center px-4 py-8  border-neutral-200 border-[2px] border-solid w-full">
              <p className="font-semibold text-md text-neutral-500">
                Excellent education and amazing staff, My son learned coding in
                less than 3 months! I couldn&apos;t be happier.
              </p>
              {/* Name and stars */}
              <div className="flex justify-center items-center gap-8 gap-y-2 flex-wrap">
                <p className="text-blue-700 text-md font-bold">
                  Dr/ Folan Elfolany
                </p>
                {/* Stars */}
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="even:bg-neutral-100 odd:bg-white flex flex-col gap-8 text-center items-center px-4 py-8  border-neutral-200 border-[2px] border-solid w-full">
              <p className="font-semibold text-md text-neutral-500">
                Excellent education and amazing staff, My son learned coding in
                less than 3 months! I couldn&apos;t be happier.
              </p>
              {/* Name and stars */}
              <div className="flex justify-center items-center gap-8 gap-y-2 flex-wrap">
                <p className="text-blue-700 text-md font-bold">
                  Dr/ Folan Elfolany
                </p>
                {/* Stars */}
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="even:bg-neutral-100 odd:bg-white flex flex-col gap-8 text-center items-center px-4 py-8  border-neutral-200 border-[2px] border-solid w-full">
              <p className="font-semibold text-md text-neutral-500">
                Excellent education and amazing staff, My son learned coding in
                less than 3 months! I couldn&apos;t be happier.
              </p>
              {/* Name and stars */}
              <div className="flex justify-center items-center gap-8 gap-y-2 flex-wrap">
                <p className="text-blue-700 text-md font-bold">
                  Dr/ Folan Elfolany
                </p>
                {/* Stars */}
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="even:bg-neutral-100 odd:bg-white flex flex-col gap-8 text-center items-center px-4 py-8  border-neutral-200 border-[2px] border-solid w-full">
              <p className="font-semibold text-md text-neutral-500">
                Excellent education and amazing staff, My son learned coding in
                less than 3 months! I couldn&apos;t be happier.
              </p>
              {/* Name and stars */}
              <div className="flex justify-center items-center gap-8 gap-y-2 flex-wrap">
                <p className="text-blue-700 text-md font-bold">
                  Dr/ Folan Elfolany
                </p>
                {/* Stars */}
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="even:bg-neutral-100 odd:bg-white flex flex-col gap-8 text-center items-center px-4 py-8  border-neutral-200 border-[2px] border-solid w-full">
              <p className="font-semibold text-md text-neutral-500">
                Excellent education and amazing staff, My son learned coding in
                less than 3 months! I couldn&apos;t be happier.
              </p>
              {/* Name and stars */}
              <div className="flex justify-center items-center gap-8 gap-y-2 flex-wrap">
                <p className="text-blue-700 text-md font-bold">
                  Dr/ Folan Elfolany
                </p>
                {/* Stars */}
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M12 0.5L16.091 6.86924L23.4127 8.7918L18.6194 14.6508L19.0534 22.2082L12 19.46L4.94658 22.2082L5.38065 14.6508L0.587322 8.7918L7.90901 6.86924L12 0.5Z"
                      fill="#F97316"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonials CTA */}
          {/* Image, text & cta container */}
          <div className="flex flex-col items-center w-full lg:max-w-[396px]">
            {/* Graphics container */}
            <div className="hidden lg:block relative h-[333px] w-full">
              <svg
                className="absolute"
                xmlns="http://www.w3.org/2000/svg"
                width="398"
                height="333"
                viewBox="0 0 398 333"
                fill="none"
              >
                <path
                  d="M0 333H398V0C394.155 0 352 96.9029 338.5 73.5C288.676 -12.872 168 30.5 155.005 68C150.77 80.2189 146.995 109.214 160 173.5C161.95 178.883 241.281 325.897 146.231 290.698C93.1003 278.274 34.6079 311.466 0 333Z"
                  fill="#BFDBFE"
                />
              </svg>
              <svg
                className="absolute right-0 top-[47px]"
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 128 128"
                fill="none"
              >
                <g clip-path="url(#clip0_57_257)">
                  <path
                    d="M13.6136 68.7015C13.6136 68.7015 16.1111 34.2279 45.8331 21.6116C75.555 8.99543 102.088 31.1462 102.088 31.1462L100.353 31.8826C100.353 31.8826 76.9746 10.4179 46.5614 23.3275C16.1483 36.2372 15.3484 67.9651 15.3484 67.9651L13.6136 68.7015Z"
                    fill="#1D4ED8"
                  />
                  <path
                    d="M68.7365 114.155L67.4718 101.529L88.2894 92.6927L92.3913 97.5329L96.4933 102.373L68.7365 114.155Z"
                    fill="#1D4ED8"
                  />
                  <path
                    d="M43.2244 73.3455L66.0151 98.0975L86.8327 89.2609L84.8595 55.6725L48.3823 27.6173L43.2244 73.3455Z"
                    fill="#EA580C"
                  />
                  <path
                    d="M49.2961 70.7682L66.866 91.6611L81.6117 85.4019L78.7877 58.2498L52.3883 37.0548L49.2961 70.7682Z"
                    fill="white"
                  />
                  <path
                    d="M66.227 69.6567C68.1432 68.8433 69.0444 66.6475 68.2399 64.7521C67.4353 62.8568 65.2298 61.9797 63.3136 62.7931C61.3974 63.6065 60.4962 65.8023 61.3007 67.6977C62.1052 69.593 64.3108 70.4701 66.227 69.6567Z"
                    fill="#1D4ED8"
                  />
                  <path
                    d="M48.2433 29.7014L48.3823 27.6173L49.9781 28.965L64.5451 63.2828L62.8103 64.0192L48.2433 29.7014Z"
                    fill="#1D4ED8"
                  />
                  <path
                    d="M16.2158 67.597C15.8135 66.6494 14.7107 66.2108 13.7526 66.6175C12.7945 67.0242 12.3439 68.1221 12.7462 69.0698C13.1484 70.0174 14.2512 70.456 15.2093 70.0493C16.1674 69.6426 16.618 68.5447 16.2158 67.597Z"
                    fill="#EA580C"
                  />
                  <path
                    d="M102.956 30.778C102.553 29.8304 101.451 29.3918 100.492 29.7985C99.5344 30.2052 99.0838 31.3031 99.486 32.2508C99.8883 33.1985 100.991 33.637 101.949 33.2303C102.907 32.8236 103.358 31.7257 102.956 30.778Z"
                    fill="#EA580C"
                  />
                  <path
                    d="M48.7995 21.3651C48.1961 19.9436 46.5419 19.2858 45.1047 19.8958C43.6676 20.5058 42.9917 22.1527 43.5951 23.5742C44.1984 24.9957 45.8526 25.6535 47.2898 25.0435C48.7269 24.4334 49.4028 22.7866 48.7995 21.3651Z"
                    fill="#EA580C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_57_257">
                    <rect
                      width="98"
                      height="96"
                      fill="white"
                      transform="translate(0 39.0416) rotate(-23)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                className="absolute left-0 top-[70px]"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="197"
                viewBox="0 0 200 197"
                fill="none"
              >
                <g clip-path="url(#clip0_57_267)">
                  <path
                    d="M98.3871 175.365C141.145 175.365 175.806 140.839 175.806 98.25C175.806 55.6607 141.145 21.1353 98.3871 21.1353C55.6296 21.1353 20.9677 55.6607 20.9677 98.25C20.9677 140.839 55.6296 175.365 98.3871 175.365Z"
                    stroke="#EA580C"
                    strokeWidth="3"
                  />
                  <path
                    d="M100 1.85656C100 0.96928 99.2779 0.25 98.3871 0.25C97.4963 0.25 96.7742 0.96928 96.7742 1.85656V194.643C96.7742 195.531 97.4963 196.25 98.3871 196.25C99.2779 196.25 100 195.531 100 194.643V1.85656Z"
                    fill="#1D4ED8"
                  />
                  <path
                    d="M195.161 96.6434H1.6129C0.722121 96.6434 0 97.3627 0 98.25C0 99.1373 0.722121 99.8565 1.6129 99.8565H195.161C196.052 99.8565 196.774 99.1373 196.774 98.25C196.774 97.3627 196.052 96.6434 195.161 96.6434Z"
                    fill="#1D4ED8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_57_267">
                    <rect
                      width="200"
                      height="196"
                      fill="white"
                      transform="translate(0 0.25)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute bg-cover bg-center testimonial-img h-[333px] w-[294px] left-[52px]"></div>
            </div>
            <div className="flex flex-col items-center bg-white shadow-effect gap-4 w-full p-6 ">
              <p className="text-md text-blue-700 text-center">
                Are you a happy student or parent?
              </p>
              <a
                target="_blank"
                href="https://wa.me/201222903316"
                className="bg-blue-700 text-md hover:bg-blue-500 w-fit duration-100 text-center z-20 grid place-items-center px-6 py-3 text-white font-bold shadow-effect"
              >
                Leave a Testimonial
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Frames section */}
      <div className="flex flex-col section__styles items-center py-[72px] gap-10 w-full">
        {/* Header & title */}
        <div className="flex flex-col text-start items-center gap-4">
          <h1 className="text-blue-700 font-semibold text-2xl md:text-center">
            For parents who are thoughtful about their kids&apos; future
          </h1>
          <p className="text-lg text-blue-900 md:text-center max-w-[600px]">
            Our academy offers a wide range of valuable programming courses
            designed for kids, & taught by experienced instructors who are
            passionate about coding and teaching.
          </p>
        </div>
        {/* Frames container */}
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Frame */}
          <div className="frame-1 bg-cover bg-center relative md:w-full after:absolute after:w-full after:h-full after:bg-black after:opacity-50 after:z-10 aspect-video flex flex-col items-center justify-center gap-4 bg-neutral-700">
            <p className="text-lg text-white z-20">Learn at Centre</p>
            <a
              target="_blank"
              href="https://wa.me/201222903316"
              className="bg-orange-600 hover:bg-orange-400 duration-100 text-center z-20 grid place-items-center px-6 py-3 text-white font-bold shadow-effect"
            >
              Join a course
            </a>
          </div>
          {/* Frame */}
          <div className="frame-2 bg-cover bg-center relative md:w-full after:absolute after:w-full after:h-full after:bg-black after:opacity-50 after:z-10 aspect-video flex flex-col items-center justify-center gap-4 bg-neutral-700">
            <p className="text-lg text-white z-20">Learn online</p>
            <button className="bg-orange-950 text-center z-20 grid place-items-center px-6 py-3 text-white font-bold shadow-effect">
              Coming soon!
            </button>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="flex flex-col section__styles items-center py-[72px] gap-8 w-full">
        <h1 className="text-blue-700 font-semibold text-2xl">
          Your questions, answered
        </h1>
        <div className="flex flex-col lg:flex-row-reverse items-start w-full gap-8">
          <div className="join join-vertical w-full rounded-[0px] text-md">
            <div className="collapse collapse-arrow join-item shadow-effect bg-white">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-md font-semibold text-blue-900">
                What do we do?
              </div>
              <div className="collapse-content">
                <p className="text-blue-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, in?
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item shadow-effect bg-white">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-md font-semibold text-blue-900">
                How does the PES curriculum help kids perform better
                academically?
              </div>
              <div className="collapse-content">
                <p className="text-blue-900">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, sunt!
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item shadow-effect bg-white">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-md font-semibold text-blue-900">
                Where are we located?
              </div>
              <div className="collapse-content">
                <p className="text-blue-900">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quod, repellendus.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item shadow-effect bg-white">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-md font-semibold text-blue-900">
                What do we teach?
              </div>
              <div className="collapse-content">
                <p className="text-blue-900">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quod, repellendus.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item shadow-effect bg-white">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-md font-semibold text-blue-900">
                What do we do?
              </div>
              <div className="collapse-content">
                <p className="text-blue-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, in?
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item shadow-effect bg-white">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-md font-semibold text-blue-900">
                How does the PES curriculum help kids perform better
                academically?
              </div>
              <div className="collapse-content">
                <p className="text-blue-900">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, sunt!
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item shadow-effect bg-white">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-md font-semibold text-blue-900">
                Where are we located?
              </div>
              <div className="collapse-content">
                <p className="text-blue-900">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quod, repellendus.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item shadow-effect bg-white">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-md font-semibold text-blue-900">
                What do we teach?
              </div>
              <div className="collapse-content">
                <p className="text-blue-900">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quod, repellendus.
                </p>
              </div>
            </div>
          </div>
          {/* Image, text & cta container */}
          <div className="flex flex-col items-center w-full lg:max-w-[396px]">
            {/* Graphics container */}
            <div className="hidden lg:block relative h-[333px] w-full">
              <svg
                className="absolute"
                xmlns="http://www.w3.org/2000/svg"
                width="398"
                height="334"
                viewBox="0 0 398 334"
                fill="none"
              >
                <path
                  d="M398 333.25H0V0.25H51.6324C72.5 0.249981 119.424 6.14285 151 19.25C177.5 30.25 252 77.4085 232.5 148.25C230.5 154.116 180.5 315.201 278 276.848C332.5 263.311 362.5 309.787 398 333.25Z"
                  fill="#BFDBFE"
                />
              </svg>
              <svg
                className="absolute top-[32px] right-0"
                xmlns="http://www.w3.org/2000/svg"
                width="142"
                height="101"
                viewBox="0 0 142 101"
                fill="none"
              >
                <g clip-path="url(#clip0_56_85)">
                  <path
                    d="M77.9006 46.7914H32.6619C29.9779 46.798 27.4056 47.8668 25.5072 49.7642C23.6087 51.6615 22.5386 54.2332 22.5306 56.9172V79.4738C22.5377 82.1585 23.6074 84.7313 25.5058 86.6297C27.4043 88.5281 29.9771 89.5977 32.6619 89.6048H36.8374C39.372 92.4553 35.8849 97.3641 35.8849 97.3641C45.1131 96.4116 47.846 89.6048 47.846 89.6048H77.8937C80.5786 89.598 83.1515 88.5284 85.05 86.6299C86.9485 84.7315 88.0182 82.1586 88.025 79.4738V56.9172C88.0173 54.2343 86.9481 51.6636 85.0511 49.7663C83.1542 47.8691 80.5835 46.7996 77.9006 46.7914Z"
                    fill="#EA580C"
                  />
                  <path
                    d="M76.7533 62.5343H33.8084C33.6733 62.5343 33.5437 62.4806 33.4481 62.3851C33.3525 62.2895 33.2988 62.1599 33.2988 62.0247C33.2988 61.8896 33.3525 61.76 33.4481 61.6644C33.5437 61.5688 33.6733 61.5151 33.8084 61.5151H76.7533C76.8884 61.5151 77.018 61.5688 77.1136 61.6644C77.2092 61.76 77.2629 61.8896 77.2629 62.0247C77.2629 62.1599 77.2092 62.2895 77.1136 62.3851C77.018 62.4806 76.8884 62.5343 76.7533 62.5343Z"
                    fill="white"
                  />
                  <path
                    d="M76.7533 74.256H33.8084C33.6733 74.256 33.5437 74.2023 33.4481 74.1067C33.3525 74.0111 33.2988 73.8815 33.2988 73.7464C33.2988 73.6112 33.3525 73.4816 33.4481 73.3861C33.5437 73.2905 33.6733 73.2368 33.8084 73.2368H76.7533C76.8884 73.2368 77.018 73.2905 77.1136 73.3861C77.2092 73.4816 77.2629 73.6112 77.2629 73.7464C77.2629 73.8815 77.2092 74.0111 77.1136 74.1067C77.018 74.2023 76.8884 74.256 76.7533 74.256Z"
                    fill="white"
                  />
                  <path
                    d="M8.64107 98.6862C8.28532 98.2234 7.99002 97.7171 7.76219 97.1796C7.74592 97.1442 7.73679 97.1059 7.73534 97.0669C7.7339 97.028 7.74014 96.9891 7.75373 96.9526C7.76733 96.9161 7.78801 96.8826 7.81457 96.8541C7.84113 96.8256 7.87307 96.8026 7.90854 96.7865C7.98034 96.7547 8.06164 96.7523 8.13522 96.7796C8.2088 96.8069 8.26882 96.8619 8.3025 96.9328L8.90866 98.2654C8.92487 98.3009 8.93391 98.3393 8.93524 98.3783C8.93657 98.4173 8.93014 98.4562 8.91637 98.4928C8.90261 98.5293 8.88181 98.5627 8.85507 98.5912C8.82833 98.6196 8.79618 98.6425 8.76057 98.6585C8.72326 98.6764 8.68245 98.6859 8.64107 98.6862Z"
                    fill="#1E3A8A"
                  />
                  <path
                    d="M6.80011 94.6408C6.22899 93.7135 5.73662 92.74 5.32808 91.7305C5.31029 91.6943 5.30006 91.6549 5.29801 91.6146C5.29596 91.5743 5.30211 91.534 5.31613 91.4962C5.33016 91.4584 5.35173 91.4238 5.37956 91.3946C5.40738 91.3654 5.44087 91.3422 5.47797 91.3264C5.51506 91.3105 5.55502 91.3024 5.59535 91.3025C5.63569 91.3026 5.67556 91.3109 5.71258 91.3269C5.7496 91.343 5.78299 91.3664 5.81067 91.3957C5.83835 91.425 5.85972 91.4597 5.87356 91.4976C6.26756 92.4215 6.67113 93.3298 7.07119 94.2217C7.08729 94.2572 7.09619 94.2956 7.09746 94.3346C7.09873 94.3736 7.09234 94.4124 7.07859 94.4489C7.06484 94.4854 7.04401 94.5189 7.01734 94.5473C6.99066 94.5758 6.95864 94.5987 6.9231 94.6148C6.88435 94.6319 6.84246 94.6407 6.80011 94.6408ZM4.46215 89.1519C3.92597 88.1997 3.4812 87.1989 3.13382 86.1628C3.12068 86.1261 3.11491 86.0871 3.11691 86.0482C3.1189 86.0092 3.12857 85.9711 3.1454 85.9359C3.16222 85.9007 3.18588 85.8692 3.21495 85.8432C3.24402 85.8172 3.27795 85.7972 3.31479 85.7844C3.35138 85.7704 3.39042 85.7639 3.42958 85.7655C3.46875 85.767 3.50719 85.7765 3.54258 85.7933C3.57797 85.8102 3.60961 85.834 3.63549 85.8634C3.66138 85.8929 3.68102 85.9272 3.69321 85.9645C4.01273 86.8668 4.35473 87.776 4.7392 88.7466C4.76782 88.8199 4.7662 88.9015 4.73471 88.9736C4.70322 89.0457 4.64444 89.1023 4.57124 89.1311C4.53702 89.1456 4.49929 89.1526 4.46215 89.1519ZM2.4774 83.5322C1.99906 82.5441 1.63505 81.5047 1.3924 80.434C1.38296 80.3961 1.38113 80.3568 1.38696 80.3182C1.39278 80.2796 1.40619 80.2426 1.42638 80.2092C1.44658 80.1758 1.47318 80.1467 1.50466 80.1236C1.53613 80.1005 1.57186 80.0839 1.60978 80.0747C1.64762 80.064 1.68725 80.0612 1.72621 80.0665C1.76518 80.0718 1.80263 80.085 1.83625 80.1054C1.86988 80.1258 1.89895 80.1529 1.92166 80.185C1.94437 80.2171 1.96025 80.2535 1.96828 80.292C2.19861 81.2159 2.46445 82.1771 2.76232 83.1495C2.78455 83.225 2.77621 83.3063 2.73912 83.3758C2.70204 83.4452 2.63917 83.4974 2.56402 83.5209C2.53633 83.5299 2.50741 83.5346 2.4783 83.5348L2.4774 83.5322ZM1.04257 77.7471C0.651302 76.7174 0.399982 75.6399 0.295298 74.5433C0.290468 74.5046 0.293386 74.4652 0.30386 74.4276C0.314334 74.39 0.332128 74.3548 0.356289 74.3241C0.38045 74.2935 0.410488 74.2679 0.444605 74.2489C0.478722 74.2299 0.516259 74.2178 0.555065 74.2134C0.593941 74.2081 0.633471 74.2107 0.67134 74.2209C0.709209 74.2312 0.744652 74.249 0.775511 74.2732C0.80637 74.2975 0.832027 74.3276 0.850984 74.362C0.869941 74.3963 0.881817 74.4342 0.885866 74.4732C0.999303 75.4317 1.15082 76.4162 1.33527 77.399C1.34265 77.4374 1.34238 77.4768 1.33442 77.515C1.32647 77.5533 1.31098 77.5895 1.28892 77.6218C1.26685 77.654 1.2386 77.6815 1.20583 77.7027C1.17306 77.7239 1.13643 77.7385 1.09801 77.7454C1.07996 77.7481 1.06166 77.7487 1.04347 77.7471H1.04257ZM0.342917 71.8313C0.266525 71.831 0.193115 71.8015 0.137746 71.7489C0.0823771 71.6963 0.0492377 71.6245 0.0450434 71.5482C0.0147359 70.9152 -1.90821e-05 70.2745 -0.00088501 69.6311C-0.00088501 69.2697 0.00404686 68.9069 0.0138607 68.5426C0.0151116 68.5036 0.0240462 68.4653 0.0401282 68.4297C0.0562101 68.3942 0.0791026 68.3621 0.107567 68.3354C0.136032 68.3087 0.169517 68.2879 0.206031 68.2741C0.242545 68.2604 0.281398 68.2539 0.320402 68.2552C0.359407 68.2564 0.397791 68.2654 0.433347 68.2814C0.468904 68.2975 0.50094 68.3204 0.527635 68.3489C0.554331 68.3774 0.575173 68.4108 0.588944 68.4473C0.602714 68.4838 0.609115 68.5227 0.607865 68.5617C0.598051 68.9184 0.592851 69.2749 0.592273 69.6311C0.592273 70.2641 0.609638 70.8936 0.639946 71.5205C0.643245 71.5991 0.615332 71.676 0.562306 71.7342C0.50928 71.7924 0.435406 71.8273 0.356765 71.8313H0.342917ZM0.506547 65.8748C0.465202 65.8739 0.42453 65.8645 0.386943 65.8473C0.349356 65.83 0.315665 65.8053 0.288004 65.7745C0.260344 65.7438 0.239256 65.7077 0.226062 65.6685C0.212867 65.6293 0.207879 65.5879 0.211316 65.5466C0.316093 64.5509 0.461569 63.5508 0.64428 62.5732C0.649734 62.534 0.663277 62.4965 0.684077 62.4629C0.704877 62.4293 0.732447 62.4004 0.765047 62.378C0.797646 62.3557 0.834551 62.3404 0.873393 62.3332C0.912235 62.3259 0.952156 62.3268 0.990619 62.3359C1.06777 62.3508 1.13595 62.3956 1.18036 62.4604C1.22477 62.5252 1.24183 62.6049 1.22787 62.6822C1.04949 63.6434 0.905755 64.6279 0.803576 65.609C0.795068 65.6812 0.760259 65.7478 0.705799 65.796C0.65134 65.8443 0.581037 65.8708 0.508291 65.8705L0.506547 65.8748ZM1.58727 60.0179C1.35087 59.9659 1.25732 59.8032 1.29975 59.6438C1.55347 58.687 1.84791 57.7198 2.1735 56.7725C2.18483 56.734 2.20381 56.6982 2.22936 56.6673C2.25492 56.6363 2.28651 56.6109 2.32217 56.5925C2.35784 56.574 2.39683 56.563 2.43686 56.5601C2.47689 56.5572 2.51709 56.5625 2.55504 56.5755C2.59299 56.5886 2.62792 56.6092 2.65768 56.6361C2.68744 56.663 2.71146 56.6957 2.72824 56.7322C2.74501 56.7686 2.7542 56.8081 2.7553 56.8482C2.75639 56.8884 2.74934 56.9283 2.73458 56.9656C2.41332 57.9008 2.12846 58.8524 1.87388 59.7962C1.85731 59.8593 1.82037 59.915 1.76887 59.955C1.71736 59.9949 1.65412 60.0167 1.58896 60.017L1.58727 60.0179ZM3.52176 54.3826C3.25592 54.296 3.18489 54.1229 3.24983 53.9696C3.62997 53.0699 4.05255 52.1512 4.50803 51.2455C4.52462 51.2092 4.54834 51.1767 4.57779 51.1498C4.60724 51.1229 4.64181 51.1022 4.67943 51.089C4.71704 51.0757 4.75696 51.0702 4.79676 51.0727C4.83656 51.0752 4.87542 51.0857 4.91108 51.1035C4.94674 51.1214 4.97846 51.1463 5.00431 51.1766C5.03015 51.207 5.04962 51.2423 5.06155 51.2803C5.07347 51.3184 5.0776 51.3584 5.0737 51.3981C5.0698 51.4378 5.05792 51.4763 5.03882 51.5113C4.58854 52.4075 4.17291 53.3132 3.79537 54.1956C3.77378 54.2502 3.73637 54.2971 3.68792 54.3303C3.63947 54.3635 3.58217 54.3814 3.52345 54.3818L3.52176 54.3826ZM6.18534 49.0504C5.89439 48.9292 5.84677 48.7465 5.92557 48.6045C6.41655 47.7585 6.94303 46.8978 7.49549 46.0501C7.53881 45.9846 7.60615 45.9389 7.68295 45.9227C7.75976 45.9065 7.83986 45.9211 7.90594 45.9635C7.93871 45.9847 7.96696 46.0121 7.98907 46.0442C8.01119 46.0763 8.02674 46.1125 8.03479 46.1507C8.04284 46.1888 8.04326 46.2282 8.03601 46.2665C8.02875 46.3049 8.01395 46.3414 7.99251 46.374C7.44697 47.213 6.92484 48.0633 6.44252 48.9024C6.41624 48.9468 6.37888 48.9838 6.33412 49.0096C6.28936 49.0354 6.23869 49.0491 6.18703 49.0496L6.18534 49.0504ZM9.436 44.0525C9.12773 43.9001 9.0992 43.7139 9.19531 43.5823C9.78847 42.7666 10.4076 41.9674 11.0276 41.2089C11.0523 41.1787 11.0826 41.1538 11.117 41.1354C11.1513 41.117 11.1889 41.1055 11.2277 41.1016C11.2664 41.0978 11.3056 41.1016 11.3429 41.1129C11.3801 41.1241 11.4148 41.1426 11.445 41.1673C11.4751 41.192 11.5001 41.2224 11.5185 41.2567C11.5369 41.291 11.5483 41.3286 11.5522 41.3674C11.5561 41.4061 11.5523 41.4453 11.541 41.4826C11.5297 41.5198 11.5112 41.5545 11.4866 41.5847C10.8717 42.3363 10.2621 43.1242 9.6759 43.9321C9.64793 43.9687 9.61186 43.9984 9.57056 44.0188C9.52926 44.0393 9.48382 44.0499 9.43775 44.0499L9.436 44.0525ZM13.2141 39.4476C12.892 39.258 12.8842 39.0692 12.995 38.948C13.673 38.2181 14.3805 37.5002 15.1035 36.8136C15.132 36.7867 15.1654 36.7658 15.2019 36.7519C15.2384 36.7379 15.2773 36.7314 15.3164 36.7325C15.3555 36.7336 15.394 36.7424 15.4297 36.7584C15.4654 36.7744 15.4975 36.7973 15.5243 36.8257C15.5512 36.8541 15.5722 36.8876 15.5861 36.9241C15.6 36.9606 15.6066 36.9995 15.6055 37.0386C15.6043 37.0777 15.5955 37.1162 15.5795 37.1518C15.5635 37.1875 15.5407 37.2197 15.5122 37.2465C14.7996 37.9262 14.099 38.632 13.434 39.3567C13.4056 39.3858 13.3717 39.4087 13.3342 39.4242C13.2966 39.4397 13.2564 39.4474 13.2158 39.4468L13.2141 39.4476ZM17.5341 35.345C17.2016 35.1121 17.2172 34.9251 17.3445 34.8194C18.1013 34.1873 18.8971 33.5691 19.7102 32.9742C19.7741 32.935 19.8505 32.9214 19.924 32.9361C19.9975 32.9508 20.0627 32.9928 20.1066 33.0536C20.1504 33.1145 20.1696 33.1896 20.1604 33.264C20.1511 33.3384 20.114 33.4065 20.0566 33.4547C19.2539 34.0401 18.4676 34.6523 17.7186 35.2731C17.667 35.3158 17.6028 35.3404 17.5359 35.3433L17.5341 35.345ZM22.3557 31.8433C22.0162 31.5654 22.0578 31.3827 22.1989 31.2952C23.0484 30.761 23.9212 30.2561 24.7924 29.7868C24.8267 29.7646 24.8652 29.7498 24.9055 29.7433C24.9458 29.7367 24.9871 29.7385 25.0267 29.7487C25.0662 29.7588 25.1032 29.777 25.1354 29.8022C25.1676 29.8273 25.1943 29.8589 25.2137 29.8948C25.2331 29.9308 25.2448 29.9704 25.2482 30.0111C25.2516 30.0518 25.2465 30.0927 25.2333 30.1314C25.2201 30.17 25.199 30.2055 25.1714 30.2356C25.1438 30.2658 25.1103 30.2898 25.073 30.3064C24.214 30.767 23.3515 31.2675 22.5124 31.7957C22.4657 31.8244 22.4121 31.8399 22.3574 31.8407L22.3557 31.8433ZM27.6058 29.0257C27.2672 28.7018 27.3339 28.5261 27.482 28.4585C28.3946 28.0438 29.3281 27.6567 30.2529 27.3104C30.2894 27.2962 30.3283 27.2895 30.3674 27.2906C30.4065 27.2917 30.445 27.3006 30.4806 27.3167C30.5163 27.3328 30.5483 27.3558 30.5749 27.3845C30.6015 27.4131 30.6222 27.4468 30.6356 27.4835C30.6632 27.5573 30.6605 27.6389 30.628 27.7106C30.5956 27.7823 30.5361 27.8383 30.4625 27.8663C29.5472 28.2126 28.6258 28.5902 27.727 28.9971C27.6895 29.0145 27.6488 29.0239 27.6075 29.0248L27.6058 29.0257ZM33.1824 26.9259C32.8516 26.5579 32.939 26.3934 33.0957 26.344C34.0344 26.0609 35.0086 25.7959 35.9931 25.5647C36.0696 25.5466 36.1502 25.5595 36.2171 25.6008C36.284 25.642 36.3317 25.7082 36.3499 25.7846C36.368 25.8611 36.3551 25.9417 36.3138 26.0086C36.2726 26.0755 36.2065 26.1233 36.13 26.1414C35.1601 26.3743 34.1972 26.635 33.2724 26.9207C33.2434 26.9266 33.2135 26.928 33.1841 26.925L33.1824 26.9259ZM38.984 25.5474C38.6628 25.1404 38.7728 24.9863 38.9338 24.9586C39.908 24.7854 40.9055 24.6434 41.9014 24.5256C41.9792 24.5182 42.057 24.541 42.1184 24.5894C42.1799 24.6378 42.2203 24.708 42.2313 24.7854C42.2403 24.8635 42.2181 24.9421 42.1694 25.0039C42.1208 25.0657 42.0496 25.1058 41.9715 25.1153C40.9869 25.2322 40.0015 25.3751 39.0369 25.5413C39.0195 25.5446 39.0018 25.5463 38.984 25.5465V25.5474ZM53.8451 25.0737C52.8536 24.9672 51.8587 24.8884 50.8542 24.8373C50.7756 24.8329 50.702 24.7975 50.6494 24.7389C50.5969 24.6803 50.5696 24.6034 50.5736 24.5248C50.5808 24.4471 50.6169 24.3749 50.6749 24.3226C50.7328 24.2703 50.8082 24.2417 50.8863 24.2425C51.9011 24.2944 52.9065 24.375 53.8772 24.4815C53.9556 24.4857 54.0291 24.5209 54.0815 24.5794C54.134 24.6379 54.1611 24.7148 54.1568 24.7932C54.1526 24.8716 54.1174 24.9451 54.0589 24.9976C54.0005 25.05 53.9236 25.0771 53.8451 25.0729V25.0737ZM44.9079 24.8607C44.8316 24.8595 44.7589 24.8289 44.7046 24.7754C44.6504 24.7219 44.6189 24.6495 44.6166 24.5733C44.6144 24.4971 44.6416 24.423 44.6926 24.3664C44.7437 24.3098 44.8146 24.275 44.8906 24.2693C45.8734 24.2104 46.8822 24.1827 47.8884 24.1741C47.9672 24.1741 48.0427 24.2054 48.0984 24.2611C48.1541 24.3168 48.1854 24.3923 48.1854 24.4711C48.1854 24.5498 48.1541 24.6254 48.0984 24.6811C48.0427 24.7368 47.9672 24.7681 47.8884 24.7681C46.8926 24.7681 45.8968 24.8027 44.9226 24.8599L44.9079 24.8607Z"
                    fill="#1E3A8A"
                  />
                  <path
                    d="M58.3185 25.7967C58.2423 25.7863 57.734 25.6599 56.8317 25.4988C56.7539 25.4847 56.6849 25.4403 56.6397 25.3754C56.5946 25.3105 56.5771 25.2303 56.591 25.1525C56.595 25.1126 56.6077 25.0741 56.6281 25.0396C56.6484 25.0051 56.676 24.9754 56.7089 24.9526C56.7418 24.9297 56.7792 24.9142 56.8186 24.9072C56.8581 24.9001 56.8986 24.9017 56.9374 24.9118C57.8656 25.0771 58.3739 25.2036 58.3938 25.2096C58.4645 25.2271 58.5263 25.2698 58.5675 25.3298C58.6087 25.3898 58.6264 25.4628 58.6174 25.535C58.6083 25.6072 58.573 25.6736 58.5183 25.7215C58.4635 25.7694 58.393 25.7956 58.3202 25.795L58.3185 25.7967Z"
                    fill="#1E3A8A"
                  />
                  <path
                    d="M13.8436 44.4994C13.9432 45.4791 13.7501 46.4664 13.2885 47.3364C12.827 48.2064 12.1178 48.9199 11.2506 49.3868C10.3835 49.8537 9.39738 50.053 8.41699 49.9594C7.43659 49.8659 6.50594 49.4837 5.74278 48.8612C4.97962 48.2387 4.41822 47.4039 4.12958 46.4623C3.84093 45.5207 3.83805 44.5147 4.12123 43.5715C4.4044 42.6282 4.96095 41.7902 5.72048 41.1633C6.48001 40.5363 7.4084 40.1487 8.38824 40.0495C9.70176 39.9162 11.0144 40.3102 12.0375 41.1447C13.0606 41.9792 13.7102 43.1859 13.8436 44.4994Z"
                    fill="#1D4ED8"
                  />
                  <path
                    d="M41.5472 5.43787L44.8377 2.14745C45.0057 1.97946 45.1001 1.75163 45.1001 1.51406C45.1001 1.27648 45.0057 1.04864 44.8377 0.880648C44.6697 0.712658 44.4419 0.618286 44.2043 0.618286C43.9667 0.618286 43.7389 0.712658 43.5709 0.880648L40.2804 4.17106L36.9898 0.880648C36.8207 0.718433 36.5947 0.628979 36.3604 0.631499C36.126 0.634018 35.9021 0.728311 35.7365 0.894124C35.5709 1.05994 35.4769 1.28407 35.4747 1.51839C35.4725 1.75272 35.5623 1.97856 35.7247 2.14745L39.0152 5.43787L35.7247 8.72828C35.5572 8.89604 35.4632 9.12348 35.4633 9.36056C35.4635 9.59765 35.5578 9.82495 35.7256 9.99248C35.8933 10.16 36.1208 10.254 36.3579 10.2539C36.595 10.2537 36.8223 10.1594 36.9898 9.99161L40.2804 6.7064L43.5709 9.99161C43.7384 10.1596 43.9658 10.2542 44.2031 10.2545C44.4403 10.2548 44.668 10.1609 44.836 9.99335C45.004 9.82582 45.0986 9.59842 45.0989 9.36117C45.0992 9.12392 45.0053 8.89627 44.8377 8.72828L41.5472 5.43787Z"
                    fill="#1D4ED8"
                  />
                  <path
                    d="M99.3938 93.723L94.7593 100.997H104.025L99.3938 93.723Z"
                    fill="#EA580C"
                  />
                  <path
                    d="M131.872 0H63.9834C61.2993 0.00800098 58.7276 1.07811 56.8302 2.97646C54.9327 4.8748 53.8638 7.44704 53.8572 10.131V47.4919C53.8638 50.1759 54.9327 52.7481 56.8302 54.6464C58.7276 56.5448 61.2993 57.6149 63.9834 57.6229H107.933C107.933 57.6229 111.609 66.7884 124.029 68.0682C124.029 68.0682 119.34 61.4623 122.75 57.6229H131.873C134.558 57.6158 137.131 56.5461 139.029 54.6477C140.928 52.7494 141.997 50.1766 142.004 47.4919V10.1267C141.996 7.44255 140.926 4.87077 139.027 2.97329C137.129 1.0758 134.556 0.00685161 131.872 0Z"
                    fill="#2563EB"
                  />
                  <path
                    d="M126.772 21.0127H69.0145C68.8832 21.0073 68.759 20.9513 68.6681 20.8565C68.5771 20.7617 68.5263 20.6354 68.5263 20.504C68.5263 20.3726 68.5771 20.2463 68.6681 20.1515C68.759 20.0567 68.8832 20.0007 69.0145 19.9953H126.772C126.84 19.9925 126.909 20.0035 126.973 20.0278C127.037 20.0521 127.096 20.0891 127.145 20.1367C127.195 20.1842 127.234 20.2412 127.261 20.3043C127.288 20.3675 127.302 20.4354 127.302 20.504C127.302 20.5726 127.288 20.6406 127.261 20.7037C127.234 20.7668 127.195 20.8239 127.145 20.8714C127.096 20.9189 127.037 20.9559 126.973 20.9802C126.909 21.0045 126.84 21.0156 126.772 21.0127Z"
                    fill="white"
                  />
                  <path
                    d="M126.772 36.7867H69.0145C68.8793 36.7867 68.7497 36.7331 68.6541 36.6375C68.5585 36.5419 68.5049 36.4123 68.5049 36.2772C68.5049 36.142 68.5585 36.0124 68.6541 35.9168C68.7497 35.8213 68.8793 35.7676 69.0145 35.7676H126.772C126.907 35.7676 127.037 35.8213 127.132 35.9168C127.228 36.0124 127.281 36.142 127.281 36.2772C127.281 36.4123 127.228 36.5419 127.132 36.6375C127.037 36.7331 126.907 36.7867 126.772 36.7867Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_56_85">
                    <rect width="142" height="101" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute bg-cover bg-center faq-img h-[333px] w-[329px] left-[52px]"></div>
            </div>
            <div className="flex flex-col items-center bg-white shadow-effect gap-4 w-full p-6 ">
              <p className="text-md text-blue-700 text-center">
                Have another question?
              </p>
              <a
                target="_blank"
                href="https://wa.me/201222903316"
                className="bg-orange-600 hover:bg-orange-400 w-fit duration-100 text-center z-20 grid place-items-center px-6 py-3 text-white font-bold shadow-effect text-md"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
