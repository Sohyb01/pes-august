import React from "react";
import prisma from "@/app/lib/prisma";
import UploadCertificateForm from "@/app/Components/UploadCertificateForm";

async function Dashboard() {
  const pesKidsApplicationData = await prisma.pesKidsApplicationData.findMany(
    {}
  );
  const pesYouthApplicationData = await prisma.pesYouthApplicationData.findMany(
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
