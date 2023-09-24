"use client";
import { deleteSchoolPartnershipApplicationData_SA } from "@/app/actions/delete-school-partnership-data";
import React, { useState } from "react";
import Modal from "react-modal";

function PartnershipApplication(props: {
  data: {
    applicationId: number;
    createdAt: Date;
    SchoolName: string;
    ApplierName: string;
    ApplierMobile: string;
    ApplierEmail: string;
    ApplierRoleInSchool: string;
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
    await deleteSchoolPartnershipApplicationData_SA(id);
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
            {props.data.SchoolName}
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
            <div className="input-field-and-label col-span-2">
              <p className="text-neutral-500">School Name</p>
              <p className="text-neutral-800">{props.data.SchoolName}</p>
            </div>
            {/* Input and label */}
            <div className="input-field-and-label">
              <p className="text-neutral-500">Applier Name</p>
              <p className="text-neutral-800">{props.data.ApplierName}</p>
            </div>
            {/* Input and label */}
            <div className="input-field-and-label">
              <p className="text-neutral-500">Applier Mobile</p>
              <p className="text-neutral-800">{props.data.ApplierMobile}</p>
            </div>
            {/* Input and label */}
            <div className="input-field-and-label">
              <p className="text-neutral-500">Applier Email</p>
              <p className="text-neutral-800">{props.data.ApplierEmail}</p>
            </div>
            {/* Input and label */}
            <div className="input-field-and-label">
              <p className="text-neutral-500">Applier Role in School</p>
              <p className="text-neutral-800">
                {props.data.ApplierRoleInSchool}
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

export default PartnershipApplication;
