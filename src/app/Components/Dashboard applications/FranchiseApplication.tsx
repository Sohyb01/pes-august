"use client";
import { deleteFranchiseApplicationData_SA } from "@/app/actions/delete-franchise-application-data";
import React, { useState } from "react";
import Modal from "react-modal";

function FranchiseApplication(props: {
  data: {
    applicationId: number;
    createdAt: Date;
    ApplierName: string;
    ApplierMobile: string;
    ApplierEmail: string;
    ApplierLocation: string;
    ApplierBudget: string;
    DesiredFranchiseLocation: string;
    ApplierProfession: string | null;
    ApplierHeardAboutUs: string | null;
    ApplierMotivation: string | null;
    ApplierAdditionalMessage: string | null;
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
    await deleteFranchiseApplicationData_SA(id);
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
            {props.data.ApplierName}
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
              <p className="text-neutral-500">Applier Location</p>
              <p className="text-neutral-800">{props.data.ApplierLocation}</p>
            </div>
            {/* Input and label */}
            <div className="input-field-and-label">
              <p className="text-neutral-500">Applier Budget</p>
              <p className="text-neutral-800">{props.data.ApplierBudget}</p>
            </div>
            {/* Input and label */}
            <div className="input-field-and-label">
              <p className="text-neutral-500">Desired Franchise Location</p>
              <p className="text-neutral-800">
                {props.data.DesiredFranchiseLocation}
              </p>
            </div>
            {/* Input and label */}
            <div className="input-field-and-label">
              <p className="text-neutral-500">Applier Profession</p>
              <p className="text-neutral-800">{props.data.ApplierProfession}</p>
            </div>
            {/* Input and label */}
            <div className="input-field-and-label">
              <p className="text-neutral-500">
                How the applier heard about PES
              </p>
              <p className="text-neutral-800">
                {props.data.ApplierHeardAboutUs}
              </p>
            </div>
            {/* Input and label */}
            <div className="input-field-and-label col-span-2">
              <p className="text-neutral-500">Applier motivation</p>
              <p className="text-neutral-800">{props.data.ApplierMotivation}</p>
            </div>
            {/* Input and label */}
            <div className="input-field-and-label col-span-2">
              <p className="text-neutral-500">
                Additional message from applier
              </p>
              <p className="text-neutral-800">
                {props.data.ApplierAdditionalMessage}
              </p>
            </div>
            {/* Buttons */}
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

export default FranchiseApplication;
