import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 py-4 z-[10000] bg-blue-700 w-full text-white">
      <div className="section__styles mx-auto flex justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="nav-logo w-[124px] h-[52px] bg-cover"></div>
        </Link>
        {/* Links & buttons container */}
        <div className="items-center gap-8 nav-styling">
          {/* Home dropdown */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className=" flex items-center gap-[6px]">
              About
              <svg
                className="fill-white w-3"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="13"
                viewBox="0 0 22 13"
              >
                <path d="M11 12.5C10.6162 12.5 10.2322 12.3535 9.9397 12.0605L0.939697 3.06055C0.35376 2.47461 0.35376 1.52539 0.939697 0.939453C1.52563 0.353516 2.47485 0.353516 3.06079 0.939453L11 8.88125L18.9406 0.940625C19.5266 0.354687 20.4758 0.354687 21.0617 0.940625C21.6477 1.52656 21.6477 2.47578 21.0617 3.06172L12.0617 12.0617C11.7688 12.3547 11.3844 12.5 11 12.5Z" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu flex flex-col w-fit gap-2 mt-3 shadow-effect bg-white text-blue-700"
            >
              <li>
                <Link
                  href="/#testimonials"
                  className="text-md px-4 py-2 rounded-none hover:text-blue-700 hover:bg-blue-100"
                >
                  Testimonials
                </Link>
                <Link
                  href="/#faq"
                  className="text-md px-4 py-2 rounded-none hover:text-blue-700 hover:bg-blue-100"
                >
                  FAQ
                </Link>
                <Link
                  href="#"
                  className="text-md px-4 py-2 rounded-none hover:text-blue-700 hover:bg-blue-100"
                >
                  Gallery
                </Link>
                <Link
                  href="#"
                  className="text-md px-4 py-2 rounded-none hover:text-blue-700 hover:bg-blue-100"
                >
                  Our Vision
                </Link>
                <Link
                  href="#"
                  className="text-md px-4 py-2 rounded-none hover:text-blue-700 hover:bg-blue-100"
                >
                  Meet the Team
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact dropdown */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className=" flex items-center gap-[6px]">
              Contact
              <svg
                className="fill-white w-3"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="13"
                viewBox="0 0 22 13"
              >
                <path d="M11 12.5C10.6162 12.5 10.2322 12.3535 9.9397 12.0605L0.939697 3.06055C0.35376 2.47461 0.35376 1.52539 0.939697 0.939453C1.52563 0.353516 2.47485 0.353516 3.06079 0.939453L11 8.88125L18.9406 0.940625C19.5266 0.354687 20.4758 0.354687 21.0617 0.940625C21.6477 1.52656 21.6477 2.47578 21.0617 3.06172L12.0617 12.0617C11.7688 12.3547 11.3844 12.5 11 12.5Z" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu flex flex-col w-fit gap-2 mt-3 shadow-effect bg-white text-blue-700"
            >
              <li>
                <Link
                  href="/"
                  className="text-md px-4 py-2 rounded-none hover:text-blue-700 hover:bg-blue-100"
                >
                  Parents
                </Link>
                <Link
                  href="/"
                  className="text-md px-4 py-2 rounded-none hover:text-blue-700 hover:bg-blue-100"
                >
                  Schools
                </Link>
                <Link
                  href="/"
                  className="text-md px-4 py-2 rounded-none hover:text-blue-700 hover:bg-blue-100"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          {/* Students dropdown */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className=" flex items-center gap-[6px]">
              For Students
              <svg
                className="fill-white w-3"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="13"
                viewBox="0 0 22 13"
              >
                <path d="M11 12.5C10.6162 12.5 10.2322 12.3535 9.9397 12.0605L0.939697 3.06055C0.35376 2.47461 0.35376 1.52539 0.939697 0.939453C1.52563 0.353516 2.47485 0.353516 3.06079 0.939453L11 8.88125L18.9406 0.940625C19.5266 0.354687 20.4758 0.354687 21.0617 0.940625C21.6477 1.52656 21.6477 2.47578 21.0617 3.06172L12.0617 12.0617C11.7688 12.3547 11.3844 12.5 11 12.5Z" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu flex flex-col w-fit gap-2 mt-3 shadow-effect bg-white text-blue-700"
            >
              <li>
                <Link
                  href="/"
                  className="text-md px-4 py-2 rounded-none hover:text-blue-700 hover:bg-blue-100"
                >
                  Certificates
                </Link>
              </li>
            </ul>
          </div>

          <Link
            href="/SigninPage"
            className="bg-white text-blue-700 hover:bg-blue-200 duration-100 text-center grid place-items-center px-6 py-3 font-bold shadow-effect"
          >
            Sign In
          </Link>
          <Link
            href="/get-started"
            className="bg-orange-600 hover:bg-orange-400 duration-100 text-center grid place-items-center px-6 py-3 text-white font-bold shadow-effect"
          >
            Get Started
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
                  <Link href="/#testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link href="/#faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
                <li>
                  <Link
                    href="/SigninPage"
                    className="bg-white text-blue-700 hover:bg-blue-200 duration-100 text-center grid place-items-center px-6 py-3 font-bold shadow-effect"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://wa.me/201285488199"
                    className="bg-orange-600 hover:bg-orange-400 duration-100 text-center grid place-items-center px-6 py-3 text-white font-bold shadow-effect"
                  >
                    View courses
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
