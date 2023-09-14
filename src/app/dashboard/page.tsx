import React from "react";
import prisma from "../lib/prisma";
import UploadCertificateForm from "../Components/UploadCertificateForm";

async function Dashboard() {
  const ApplicationData = await prisma.applicationData.findMany({});
  const CertificateData = await prisma.certificate.findMany({});
  //   console.log(ApplicationData);

  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] pt-[144px] ">
      <section className="flex flex-col items-center w-full pb-[72px] section__styles gap-16 ">
        {/* Applications Container */}
        <div className="flex flex-col w-full items-center text-start gap-4">
          <h1 className="text-blue-900 text-start w-full">Applications</h1>
          <div className="flex flex-col w-full p-5 bg-white shadow-effect">
            <div className="overflow-x-auto scroll-styling">
              <table className="table table-xs table-pin-rows table-pin-cols bg-white scroll-styling">
                <thead>
                  <tr className="flex gap-2 bg-white">
                    <td>Parent Email</td>
                    <td>Parent Mobile #</td>
                    <td>Student Name</td>
                    <td>Student Age</td>
                    <td>Student Gender</td>
                    <td>Student Mobile #</td>
                    <td>Student has Laptop/PC?</td>
                    <td>Date Submitted</td>
                  </tr>
                </thead>
                <tbody>
                  {ApplicationData.map((application, key) => {
                    return (
                      <tr key={key} className="flex gap-2 bg-white">
                        <td>{application.parentEmail}</td>
                        <td>{application.parentMobile}</td>
                        <td>{application.studentName}</td>
                        <td>{application.studentAge}</td>
                        <td>{application.studentGender}</td>
                        <td>{application.studentMobile}</td>
                        <td>{application.studentHasLaptop}</td>
                        <td>{application.createdAt.toString()}</td>
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
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Certificates Form Container */}
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
