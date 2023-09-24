"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import { deletePesKidsCourse_SA } from "@/app/actions/delete-pes-kids-course";

function PESKidsCourse(props: {
  data: {
    id: number;
    courseName: string;
    courseDuration: string;
    courseImageURL: string | null;
    isAvailable: boolean;
  };
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

  return (
    <>
      <div className="course-item">
        <h1 className="text-neutral-800 w-full sm:w-fit">
          {props.data.courseName}
        </h1>
        <button
          onClick={() => openModal()}
          className="text-blue-700 underline font-bold w-full sm:w-fit"
        >
          View
        </button>
      </div>
      <Modal isOpen={showModal} onRequestClose={closeModal} style={modalStyles}>
        <section className=" text-neutral-800 section__styles rounded-[15px] p-4">
          <div className="flex flex-col gap-8 w-full md:grid grid-cols-2">
            {/* Input and label */}
            <div className="input-field-and-label col-span-2">
              <p className="text-neutral-500">Course Name</p>
              <p className="text-neutral-800">{props.data.courseName}</p>
            </div>
            {/* Input and label */}
            <div className="input-field-and-label">
              <p className="text-neutral-500">Course Duration</p>
              <p className="text-neutral-800">{props.data.courseDuration}</p>
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
                onClick={() => {
                  deletePesKidsCourse_SA(props.data.id);
                  closeModal();
                }}
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

export default PESKidsCourse;
