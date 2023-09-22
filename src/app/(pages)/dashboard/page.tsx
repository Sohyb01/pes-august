import React from "react";
import prisma from "../lib/prisma";
import UploadCertificateForm from "../Components/UploadCertificateForm";

async function Dashboard() {
  const parentApplicationData = await prisma.parentApplicationData.findMany({});
  const studentApplicationData = await prisma.studentApplicationData.findMany(
    {}
  );
  const CertificateData = await prisma.certificate.findMany({});

  // Server action to delete a certificate from database
  const removeCertificate = async (certificateCode: string) => {
    await prisma.certificate.delete({
      where: {
        id: certificateCode,
      },
    });
  };

  // Function to turn dates into better format
  const improveDateFormat = (longDate: string) => {
    // Parse the input string into a Date object
    const datetime = new Date(longDate);

    // Get the month, date, and year components
    const month = datetime.toLocaleString("en-US", { month: "short" });
    const date = datetime.getDate();
    const year = datetime.getFullYear();
    // Format the date components into the desired format
    const formattedDate = `${month} ${date} ${year}`;

    return formattedDate;
  };

  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] pt-[144px] ">
      <section className="flex flex-col items-center w-full pb-[72px] section__styles gap-16 ">
        {/* Parents applications (kids) Container */}
        <div className="flex flex-col w-full items-center text-start gap-4">
          <h1 className="text-blue-900 text-start w-full">
            Parent Applications (kids)
          </h1>
          <div className="flex flex-col w-full p-5 bg-white shadow-effect">
            <div className="overflow-x-auto scroll-styling">
              <table className="table table-xs table-pin-rows table-pin-cols bg-white scroll-styling">
                <thead>
                  <tr className="flex gap-2 bg-white">
                    <td>Application Date</td>
                    <td>Parent Email</td>
                    <td>Parent Mobile #</td>
                    <td>Student Name</td>
                    <td>Student Age</td>
                    <td>Student Gender</td>
                    <td>Student Mobile #</td>
                    <td>Student has Laptop/PC?</td>
                  </tr>
                </thead>
                <tbody>
                  {parentApplicationData.map((application, key) => {
                    return (
                      <tr key={key} className="flex gap-2 bg-white">
                        <td>
                          {improveDateFormat(application.createdAt.toString())}
                        </td>
                        <td>{application.parentEmail}</td>
                        <td>{application.parentMobile}</td>
                        <td>{application.studentName}</td>
                        <td>{application.studentAge}</td>
                        <td>{application.studentGender}</td>
                        <td>{application.studentMobile}</td>
                        <td>{application.studentHasLaptop}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* University Student applications */}
        <div className="flex flex-col w-full items-center text-start gap-4">
          <h1 className="text-blue-900 text-start w-full">
            University Students Applications
          </h1>
          <div className="flex flex-col w-full p-5 bg-white shadow-effect">
            <div className="overflow-x-auto scroll-styling">
              <table className="table table-xs table-pin-rows table-pin-cols bg-white scroll-styling">
                <thead>
                  <tr className="flex gap-2 bg-white">
                    <td>Application Date</td>
                    <td>Name</td>
                    <td>University</td>
                    <td>Faculty</td>
                    <td>Academic Year</td>
                    <td>Email</td>
                    <td>Mobile #</td>
                    <td>Additional Message</td>
                  </tr>
                </thead>
                <tbody>
                  {studentApplicationData.map((application, key) => {
                    return (
                      <tr key={key} className="flex gap-2 bg-white">
                        <td>
                          {improveDateFormat(application.createdAt.toString())}
                        </td>
                        <td>{application.studentName}</td>
                        <td>{application.studentUniversity}</td>
                        <td>{application.studentFaculty}</td>
                        <td>{application.studentAcademicYear}</td>
                        <td>{application.studentEmail}</td>
                        <td>{application.studentMobile}</td>
                        <td>{application.studentAdditionalMessage}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Certificates Container */}
        <div className="flex flex-col w-full items-center text-start gap-4">
          <div className="flex items-center justify-start w-full gap-8">
            <h1 className="text-blue-900 text-start">Certificates</h1>
          </div>
          <div className="flex flex-col w-full p-5 bg-white shadow-effect">
            <div className="overflow-x-auto scroll-styling">
              <table className="table table-xs table-pin-rows table-pin-cols bg-white scroll-styling">
                <thead>
                  <tr className="flex gap-2 bg-white">
                    <td>Name on Certificate</td>
                    <td>Certificate ID</td>
                  </tr>
                </thead>
                <tbody>
                  {CertificateData.map((certificate, key) => {
                    return (
                      <tr key={key} className="flex gap-2 bg-white">
                        <td>{certificate.studentName}</td>
                        <td>{certificate.id}</td>
                        <td>
                          <a
                            href={`${certificate.imgUrl}`}
                            target="_blank"
                            className="underline text-blue-500"
                          >
                            View Certificate
                          </a>
                        </td>
                        <td className="hidden">
                          <form className="text-red-500">
                            <button type="submit" className="underline">
                              Delete Certificate
                            </button>
                          </form>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Add Certificate Form Container */}
        <div className="flex flex-col w-full items-center text-start gap-4">
          <div className="flex items-center justify-start w-full gap-8">
            <h1 className="text-blue-900 text-start">Upload Certificate</h1>
          </div>
          <UploadCertificateForm></UploadCertificateForm>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
