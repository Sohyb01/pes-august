import React from "react";
import ApplicationForm from "../Components/ApplicationForm";

function ApplyPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] pt-[144px] ">
      <section className="flex flex-col items-center w-full pb-[72px] section__styles ">
        {/* Application form container */}
        <ApplicationForm></ApplicationForm>
      </section>
    </div>
  );
}

export default ApplyPage;
