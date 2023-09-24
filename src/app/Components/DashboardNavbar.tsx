import Link from "next/link";
import React from "react";

function DashboardNavbar() {
  return (
    <nav className="fixed top-0 py-4 z-[10000] bg-white w-full">
      <div className="section__styles mx-auto flex justify-between items-center">
        {/* Logo */}
        <p className="text-md text-neutral-800 font-bold text-start">
          Admin Dashboard
        </p>

        {/* Mobile navigation */}
        <div className="grid place-items-center">
          <div className="drawer drawer-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="drawer-button grid items-center p-3 fill-neutral-800 hover:bg-neutral-400 duration-100 rounded-md"
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
                    stroke="#262626"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1 9H25"
                    stroke="#262626"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1 17H25"
                    stroke="#262626"
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
                  <Link href="/dashboard/users">Users</Link>
                </li>
                <li>
                  <Link href="/dashboard/pes-kids">PES Kids</Link>
                </li>
                <li>
                  <Link href="/dashboard/pes-youth">PES Youth</Link>
                </li>
                <li>
                  <Link href="/dashboard/certificates">Certificates</Link>
                </li>
                <li>
                  <Link href="/dashboard/partnerships">Partnerships</Link>
                </li>
                <li>
                  <Link href="/dashboard/franchises">Franchises</Link>
                </li>
                <li>
                  <Link href="/dashboard/instructor-applications">
                    Instructor Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="/api/auth/signout"
                    className="bg-white text-blue-700 hover:bg-blue-200 duration-100 text-center grid place-items-center px-6 py-3 font-bold shadow-effect"
                  >
                    Sign out
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

export default DashboardNavbar;
