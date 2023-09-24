import PESYouthNavbar from "@/app/Components/PESYouthNavbar";
import React from "react";

function PESYouth() {
  return (
    <>
      <PESYouthNavbar></PESYouthNavbar>
      <div className="flex flex-col items-center w-full min-h-[100vh] pt-[144px] ">
        <section className="flex flex-col items-center w-full pb-[72px] section__styles gap-10 ">
          PES Youth
        </section>
      </div>
    </>
  );
}

export default PESYouth;
