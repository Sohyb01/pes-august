import PartnershipApplication from "@/app/Components/Dashboard applications/PartnershipsApplication";
import prisma from "@/app/lib/prisma";
import React from "react";

async function page() {
  const PartnershipsApplicationsData =
    await prisma.schoolPartnershipApplicationData.findMany({});
  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] pt-[144px] ">
      <section className="flex flex-col items-center w-full pb-[72px] section__styles gap-4 ">
        <h1 className="text-start heading text-neutral-800 text-2xl font-bold w-full">
          School Partnership Applications
        </h1>
        {/* Dashboard Data display grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 grid-flow-row w-full">
          {/* Grid item (Application) */}
          {PartnershipsApplicationsData.map((application, key) => (
            <PartnershipApplication
              data={application}
              key={key}
            ></PartnershipApplication>
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;
