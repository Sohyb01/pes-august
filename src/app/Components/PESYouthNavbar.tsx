import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 py-4 z-[10000] bg-blue-700 w-full text-white">
      <div className="section__styles mx-auto flex justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="nav-logo w-[124px] h-[52px] relative">
            <Image src="/logo-white-2.png" fill alt="PES Logo" />
          </div>
        </Link>
        {/* Links & buttons container */}
        <div className="items-center gap-8 nav-styling">
          <Link
            href="#services"
            className="text-white hover:text-blue-100 duration-100"
          >
            Services
          </Link>
          <Link
            href="#courses"
            className="text-white hover:text-blue-100 duration-100"
          >
            Courses
          </Link>
          <Link
            href="#features"
            className="text-white hover:text-blue-100 duration-100"
          >
            Features
          </Link>
          <Link
            href="#projects"
            className="text-white hover:text-blue-100 duration-100"
          >
            Projects
          </Link>

          <Link
            href="/SigninPage"
            className="bg-white text-blue-700 hover:bg-blue-200 duration-100 text-center grid place-items-center px-6 py-3 font-bold shadow-effect rounded-[15px]"
          >
            Sign In
          </Link>
          <Link
            href="#"
            className="bg-orange-600 hover:bg-orange-400 duration-100 text-center grid place-items-center px-6 py-3 text-white font-bold shadow-effect rounded-[15px]"
          >
            Free Call
          </Link>
        </div>
        {/* Mobile navigation */}
        <div className="grid place-items-center lg:hidden">
          <div className="drawer drawer-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="drawer-button grid items-center p-3 hover:bg-blue-400 duration-100 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="18"
                  viewBox="0 0 26 18"
                  fill="none"
                >
                  <path
                    d="M1 1H25"
                    stroke="#FAFAFA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1 9H25"
                    stroke="#FAFAFA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1 17H25"
                    stroke="#FAFAFA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu p-6 flex flex-col gap-4 w-60 min-h-full bg-blue-800 text-white">
                {/* Sidebar content here */}
                <li>
                  <Link href="#services">Services</Link>
                </li>
                <li>
                  <Link href="#courses">Courses</Link>
                </li>
                <li>
                  <Link href="#features">Features</Link>
                </li>
                <li>
                  <Link href="#projects">Projects</Link>
                </li>
                <li>
                  <Link
                    href="/SigninPage"
                    className="bg-white text-blue-700 hover:bg-blue-200 duration-100 text-center grid place-items-center px-6 py-3 font-bold shadow-effect"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="#"
                    className="bg-orange-600 hover:bg-orange-400 duration-100 text-center grid place-items-center px-6 py-3 text-white font-bold shadow-effect"
                  >
                    Free Trial
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
