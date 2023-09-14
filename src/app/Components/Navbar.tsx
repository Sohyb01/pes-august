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
            <label tabIndex={0} className="">
              Home
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 flex flex-col gap-2 mt-3 shadow-effect bg-white text-blue-700"
            >
              <li>
                <Link href="/#testimonials" className="text-md">
                  Testimonials
                </Link>
                <Link href="/#faq" className="text-md ">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          {/* Students dropdown */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="">
              Students
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content mt-3 flex flex-col gap-2 z-[1] menu p-2 shadow bg-white text-blue-700 shadow-effect"
            >
              <li>
                <Link href="/">Certificates</Link>
              </li>
            </ul>
          </div>

          <Link href="/" className="text-md text-white">
            About
          </Link>
          <a
            href="https://wa.me/201285488199"
            target="_blank"
            className="text-md text-white"
          >
            Contact
          </a>
          <Link
            href="/SigninPage"
            className="bg-white text-blue-700 hover:bg-blue-200 duration-100 text-center grid place-items-center px-6 py-3 font-bold shadow-effect"
          >
            Sign In
          </Link>
          <Link
            target="_blank"
            href="https://wa.me/201285488199"
            className="bg-orange-600 hover:bg-orange-400 duration-100 text-center grid place-items-center px-6 py-3 text-white font-bold shadow-effect"
          >
            View courses
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
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1 9H25"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1 17H25"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linecap="round"
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
