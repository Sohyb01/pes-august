import Image from "next/image";

export default function Home() {
  return (
    // All sections container
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="flex pb-[72px] relative flex-col items-center w-full">
        <div className="hero-section-content pt-[144px] flex flex-col items-center gap-20 max-w-[656px]">
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
              <button className="bg-orange-600 hover:bg-orange-400 duration-100 text-center grid place-items-center px-6 py-3 w-[160px] text-white font-bold shadow-effect">
                Join a course
              </button>
              <button className="bg-white hover:bg-blue-100 duration-100  text-center grid place-items-center px-6 py-3 w-[160px] text-blue-900 font-bold shadow-effect">
                Contact us
              </button>
            </div>
          </div>
          {/* Video */}
          <div className="grid cursor-pointer place-items-center rounded-[3px] aspect-video w-full relative max-w-[484px] hero-video after:absolute after:w-full after:h-full after:bg-black after:opacity-50 after:z-10 bg-cover bg-center bg-no-repeat">
            <svg
              className="z-50"
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
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
        {/* BG Graphics container */}
        <div className="hidden lg:block absolute w-full max-w-[1080px] h-full">
          {/* Graphics */}
          <svg
            className="absolute top-[144px] left-[128px]"
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
            className="absolute top-[477px] right-[204px]"
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
            className="absolute bottom-[0px] left-[144px]"
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
          <div className="graphic-img-1 bg-cover absolute bg-center w-[144px] top-[407px] left-10 h-[226.01px]"></div>
          <div className="graphic-img-2 bg-cover top-[144px] right-10 absolute bg-center w-[144px] h-[190.5px]"></div>
          <div className="graphic-img-3 bg-cover absolute bg-center w-[144px] h-[216.99px] bottom-0 right-10"></div>
        </div>
      </section>
      {/* Statistics Section */}
      <section className="flex flex-col w-full shadow-effect bg-white my-[72px]">
        {/* Statistics container */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4 md:justify-between section__styles py-6 w-full ">
          {/* Statistic */}
          <div className="w-[160px] flex flex-col text-center items-center">
            <h1 className="text-3xl font-bold text-blue-700">850+</h1>
            <p className="-mt-2 text-md font-semibold text-blue-900">
              Students
            </p>
          </div>
          <div className="w-[160px] flex flex-col text-center items-center">
            <h1 className="text-3xl font-bold text-blue-700">1.7k</h1>
            <p className="-mt-2 text-md font-semibold text-blue-900">
              Hours of Support
            </p>
          </div>
          <div className="w-[160px] flex flex-col text-center items-center">
            <h1 className="text-3xl font-bold text-blue-700">8</h1>
            <p className="-mt-2 text-md font-semibold text-blue-900">
              Chief Experts
            </p>
          </div>
          <div className="w-[160px] flex flex-col text-center items-center">
            <h1 className="text-3xl font-bold text-blue-700">139</h1>
            <p className="-mt-2 text-md font-semibold text-blue-900">
              Projects
            </p>
          </div>
          <div className="hidden w-[160px] lg:flex flex-col text-center items-center">
            <h1 className="text-3xl font-bold text-blue-700">2+</h1>
            <p className="-mt-2 text-md font-semibold text-blue-900">
              Years of Experience
            </p>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <div className="flex flex-col section__styles items-center py-[72px] gap-8 w-full">
        <h1 className="text-2xl font-semibold text-blue-700">
          What others say
        </h1>
        {/* Testimonials Container */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Testimonial with image */}
          <div className="shadow-effect w-full flex relative mt-[40px]">
            {/* Testimonial Image */}
            <div className="bg-white shadow-effect absolute top-[-40px] aspect-square h-[80px] w-[80px] rounded-full testimonial-image"></div>
            {/* Testimonial content */}
            <div className="flex flex-col gap-10 text-center items-center px-4 pt-16 pb-8 bg-white">
              <p className="font-semibold text-lg text-neutral-500">
                Excellent education and amazing staff, My son learned coding in
                less than 3 months! I couldn&apos;t be happier.
              </p>
              <p className="text-blue-700 text-lg font-bold">
                Dr/ Folan Elfolany
              </p>
            </div>
          </div>
          {/* Testimonial with image */}
          <div className="shadow-effect w-full flex relative mt-[40px]">
            {/* Testimonial Image */}
            <div className="bg-white shadow-effect absolute top-[-40px] aspect-square h-[80px] w-[80px] rounded-full testimonial-image"></div>
            {/* Testimonial content */}
            <div className="flex flex-col gap-10 text-center items-center px-4 pt-16 pb-8 bg-white">
              <p className="font-semibold text-lg text-neutral-500">
                Excellent education and amazing staff, My son learned coding in
                less than 3 months! I couldn&apos;t be happier.
              </p>
              <p className="text-blue-700 text-lg font-bold">
                Dr/ Folan Elfolany
              </p>
            </div>
          </div>
          {/* Testimonial with image */}
          <div className="hidden shadow-effect w-full lg:flex relative mt-[40px]">
            {/* Testimonial Image */}
            <div className="bg-white shadow-effect absolute top-[-40px] aspect-square h-[80px] w-[80px] rounded-full testimonial-image"></div>
            {/* Testimonial content */}
            <div className="flex flex-col gap-10 text-center items-center px-4 pt-16 pb-8 bg-white">
              <p className="font-semibold text-lg text-neutral-500">
                Excellent education and amazing staff, My son learned coding in
                less than 3 months! I couldn&apos;t be happier.
              </p>
              <p className="text-blue-700 text-lg font-bold">
                Dr/ Folan Elfolany
              </p>
            </div>
          </div>
        </div>
        <a href="" className="text-blue-700 underline text-lg">
          View more testimonials &gt;
        </a>
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
        <div className="flex flex-col md:flex-row gap-4 w-full">
          {/* Frame */}
          <div className="frame-1 bg-cover bg-center relative md:w-full after:absolute after:w-full after:h-full after:bg-black after:opacity-50 after:z-10 aspect-video flex flex-col items-center justify-center gap-4 bg-neutral-700">
            <p className="text-lg text-white z-20">Learn at Centre</p>
            <button className="bg-orange-600 hover:bg-orange-400 duration-100 text-center z-20 grid place-items-center px-6 py-3 text-white font-bold shadow-effect">
              Join a course
            </button>
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
        <div className="join join-vertical w-full rounded-[0px]">
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
              How does the PES curriculum help kids perform better academically?
            </div>
            <div className="collapse-content">
              <p className="text-blue-900">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                sunt!
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
                repellendus.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
                repellendus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
