"use client";

import { startTransition, useState } from "react";
import FindCertificateForm from "../Components/FindCertificateForm";
import { getCertificate } from "../actions/get-certificate";
import prisma from "../lib/prisma";
import Image from "next/image";
import Link from "next/link";

const CertificatesPage = () => {
  const [certificate, setCertificate] = useState<{
    id: string;
    studentName: string;
    imgUrl: string;
  } | null>(null);
  //
  const clientAction = async (formdata: FormData) => {
    const Id = formdata.get("certificateCode")?.toString() || "";
    console.log(Id);
    startTransition(() => {
      getCertificate(Id).then((res) => {
        // console.log(res);
        setCertificate(res);
      });
    });
  };

  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] pt-[144px] ">
      <section className="flex flex-col items-center w-full pb-[72px] section__styles gap-10 ">
        <h1 className="text-2xl text-blue-700 font-bold">
          Check a Certificate
        </h1>
        {/* Input and label */}
        <div className="flex flex-col items-center text-start gap-2">
          <p className="w-full text-start text-blue-900">Certificate Code</p>
          {/* Input and submit */}
          <form
            action={clientAction}
            className="flex gap-2 items-center w-full"
          >
            <input
              type="text"
              name="certificateCode"
              id=""
              className="input-field text-sm"
            />
            <button
              type="submit"
              className="grid place-items-center bg-blue-500 text-white text-md px-8 h-10 w-full disabled:bg-blue-900"
            >
              View Certificate
            </button>
          </form>
        </div>
        {/* Certificate result */}
        {certificate !== null && (
          <div className="flex flex-col items-center p-5 gap-8 bg-white shadow-effect">
            {/* Image container */}
            <Image
              width={268}
              height={190}
              src={certificate.imgUrl}
              alt="Certificate image"
            />
            {/* Links container */}
            <div className="flex gap-4 text-blue-500 underline">
              <a href={certificate.imgUrl}>View Certificate</a>
            </div>
          </div>
        )}
        {certificate === null && (
          <div className="flex flex-col items-center gap-5 hidden">
            <p className="text-red-600">
              No Certificate Found! Please enter a valid code
            </p>
            <div className="flex gap-2 items-center justify-center">
              <p className="text-blue-900">Need Support?</p>
              <Link
                href="/contact"
                className="grid place-items-center bg-blue-500 text-white text-md px-8 h-10 w-full disabled:bg-blue-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default CertificatesPage;
