import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 py-3 z-50 bg-blue-700 w-full text-white">
      <div className="section__styles mx-auto flex justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="nav-logo w-[124px] h-[52px] bg-cover"></div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
