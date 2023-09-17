import React from "react";
import Image from "next/image";
import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] pt-[144px]">
      <section className="flex flex-col items-center w-full pb-[72px] section__styles gap-10 ">
        <div className="flex flex-col items-center text-center max-w-[192px] gap-2">
          <div className="relative w-full aspect-[192/81.6]">
            <Image src="/logo-blue-min.png" alt="PES Logo" fill />
          </div>
          <h1 className="text-xl text-blue-900">Page not found</h1>
          <Link href="/" className="text-blue-600 underline text-sm">
            Return to home
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;
