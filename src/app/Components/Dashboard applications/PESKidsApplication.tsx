"use client";
import { deletePesKidsApplicationData_SA } from "@/app/actions/delete-pes-kids-application";
import React, { useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PESKidsApplication(props: {
  data: {
    applicationId: number;
    createdAt: Date;
    DesiredCourse: string;
    ParentMobile: string;
    ParentEmail: string;
    StudentName: string;
    StudentAge: number;
    StudentMobile: string | null;
    StudentEmail: string | null;
    DesiredMethod: string | null;
    StudentHasLaptop: string;
  };
  key: number;
}) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-150%",
      transform: "translate(-50%, -50%)",
      borderRadius: "30px",
      padding: "0px",
    },
  };

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

  const deleteApplicationFromDatabase = async (id: number) => {
    await deletePesKidsApplicationData_SA(id);
    closeModal();
  };

  return (
    <>
      <div className="applications-grid-item">
        <div className="w-full flex flex-col gap-1">
          <p className="text-neutral-500 line-clamp-2 break-all w-full">
            {improveDateFormat(props.data.createdAt.toString())}
          </p>
          <h3 className="text-neutral-800 line-clamp-2 break-all w-full">
            {props.data.StudentName}
          </h3>
        </div>
        <button
          className="text-blue-500 underline font-bold"
          onClick={() => openModal()}
        >
          View
        </button>
      </div>
      <Modal isOpen={showModal} onRequestClose={closeModal} style={modalStyles}>
        <section className=" text-neutral-800 section__styles rounded-[15px] p-4">
          <div className="flex flex-col gap-8 w-full md:grid grid-cols-2">
            {/* Input and label */}
            <div className="input-field-and-label">
              <p className="text-neutral-500">Course Desired</p>
              <p className="text-neutral-800">{props.data.DesiredCourse}</p>
            </div>
            <div className="input-field-and-label">
              <p className="text-neutral-500">Parent Mobile</p>
              <p className="text-neutral-800">{props.data.ParentMobile}</p>
            </div>
            <div className="input-field-and-label">
              <p className="text-neutral-500">Parent Email</p>
              <p className="text-neutral-800">{props.data.ParentEmail}</p>
            </div>
            <div className="input-field-and-label">
              <p className="text-neutral-500">Student Name</p>
              <p className="text-neutral-800">{props.data.StudentName}</p>
            </div>
            <div className="input-field-and-label">
              <p className="text-neutral-500">Student Age</p>
              <p className="text-neutral-800">{props.data.StudentAge}</p>
            </div>
            <div className="input-field-and-label">
              <p className="text-neutral-500">Student Has Laptop</p>
              <p className="text-neutral-800">{props.data.StudentHasLaptop}</p>
            </div>
            <div className="input-field-and-label">
              <p className="text-neutral-500">Prefers Online / At centre</p>
              <p className="text-neutral-800">{props.data.DesiredMethod}</p>
            </div>
            <div className="input-field-and-label">
              <p className="text-neutral-500">Student Email</p>
              <p className="text-neutral-800">
                {props.data.StudentEmail || "?"}
              </p>
            </div>
            <div className="input-field-and-label">
              <p className="text-neutral-500">Student Mobile</p>
              <p className="text-neutral-800">
                {props.data.StudentMobile || "?"}
              </p>
            </div>
            <div className="col-span-2 flex gap-8">
              <button
                className="w-full p-4 border-[3px] border-neutral-700 border-solid grid place-items-center rounded-[15px] font-bold"
                onClick={() => closeModal()}
              >
                Close
              </button>
              <button
                className="w-full p-4 border-[3px] border-red-700 border-solid grid place-items-center rounded-[15px] font-bold"
                onClick={() =>
                  deleteApplicationFromDatabase(props.data.applicationId)
                }
              >
                Delete
              </button>
            </div>
          </div>
        </section>
      </Modal>
    </>
  );
}

export default PESKidsApplication;
