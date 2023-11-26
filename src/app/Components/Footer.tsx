import Link from "next/link";
import React from "react";
import { socialMedias, footerLinks } from "../lib/data";
import Image from "next/image";

function Footer() {
  return (
    <>
      <svg
        className="aspect-[10/1] w-full translate-y-0.5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1080 108"
        fill="none"
      >
        <g clipPath="url(#clip0_515_2077)">
          <path
            opacity="0.25"
            d="M1080 108V66.339C1036.99 46.359 986.769 37.386 937.8 41.139C874.476 45.972 815.103 71.118 751.68 74.889C685.224 78.813 618.894 59.697 555.3 43.155C492.957 26.955 430.83 20.763 366.84 31.383C334.305 36.783 303.975 47.439 272.835 57.789C189.459 85.5 78.3 120.861 0 60.777V108L1080 108Z"
            fill="#1D4ED8"
          />
          <path
            opacity="0.7"
            d="M1080 108V93.771C1068.3 74.772 1055.12 56.826 1037.08 43.155C990.531 7.85699 931.5 8.09999 877.878 25.578C849.843 34.713 823.797 49.041 797.175 61.398C760.347 78.498 720.918 102.798 679.428 106.101C646.794 108.666 615.618 97.623 590.688 77.697C562.095 54.846 534.6 21.897 497.421 11.997C461.025 2.286 424.206 18.018 390.204 33.849C356.202 49.68 322.56 68.949 284.976 72.594C231.219 77.859 183.024 52.002 132.966 37.638C105.786 29.844 79.866 32.085 54.5851 44.388C34.3981 54.189 11.385 68.625 0 88.704V108L1080 108Z"
            fill="#1D4ED8"
          />
          <path
            d="M1080 108V102.933C945.063 54.9 797.319 43.812 651.753 69.687C613.053 76.563 575.946 87.795 536.904 93.501C483.804 101.268 435.672 82.485 387.9 61.641C334.863 38.502 282.6 22.284 223.92 27C146.043 33.3 68.706 68.139 0 103.329V108L1080 108Z"
            fill="#1D4ED8"
          />
        </g>
        <defs>
          <clipPath id="clip0_515_2077">
            <rect
              width="1080"
              height="108"
              fill="white"
              transform="matrix(-1 0 0 -1 1080 108)"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="w-full flex flex-col items-center bg-blue-700">
        {/* Container of all Footer Contents */}
        <div className="section__styles flex flex-wrap pt-[36px] pb-[72px] gap-20 items-start justify-center">
          {/* Logo and Socials */}
          <div className="flex flex-col gap-16">
            <Link href="/">
              <div className="nav-logo w-[248px] h-[105px] bg-cover relative">
                <Image src="/logo-white-2.png" alt="Logo" fill />
              </div>
            </Link>
            {/* Socials */}
            <div className="flex gap-8">
              {/* Individual Social */}
              {socialMedias.map((social, index) => (
                <a
                  key={index}
                  target="_blank"
                  href="https://wa.me/201285488199"
                  className="flex gap-2 items-center fill-white duration-100 hover:fill-blue-200"
                >
                  <Image
                    src={social.imgUrl}
                    width={24}
                    height={24}
                    alt={social.socialUrl}
                  />
                </a>
              ))}
            </div>
          </div>
          {/* Map over the columns */}
          {footerLinks.map((column, index) => {
            return (
              <div
                key={index}
                className="flex flex-col text-start items-start gap-4"
              >
                <p className="text-white font-bold">
                  {footerLinks.indexOf(column) === 0 && "General"}
                  {footerLinks.indexOf(column) === 1 && "PES Youth"}
                  {footerLinks.indexOf(column) === 2 && "PES Kids"}
                </p>
                {column.map((link, index) => (
                  <a
                    className="text-white hover:text-blue-200 duration-200"
                    key={index}
                    href={link.url}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Footer;
