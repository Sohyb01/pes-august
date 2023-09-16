"use client";
import React, { useRef, useState } from "react";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";
import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "../api/uploadthing/core";
import { UploadFileResponse } from "uploadthing/client";
import toast from "react-hot-toast";
import { addCertificateToDatabase } from "../actions/add-certificate-data";

function UploadCertificateForm() {
  const [certificateName, setCertificateName] = useState("");
  const [certificateCode, setCertificateCode] = useState("");
  const [images, setImages] = useState<UploadFileResponse[]>([]);

  // Client Action on Submit
  const clientCertificateAction = async () => {
    if (!images.length) {
      toast.error("Please upload an certificate image!");
      return;
    }
    // Create the Data to send to the server action
    const data = {
      id: certificateCode.toUpperCase(),
      studentName: certificateName,
      imgUrl: images[0].url.length ? images[0].url : "Missing",
    };
    // Call the server action to add it to the database
    await addCertificateToDatabase(data);
    // Display success message
    toast.success("Certificate Successfully added!");
    // Reset the input fields
    setCertificateName("");
    setCertificateCode("");
    setImages([]);
    // console.log(data);
  };

  return (
    <form
      action={clientCertificateAction}
      className="flex flex-col w-full p-5 bg-white shadow-effect gap-4 max-w-[400px]"
    >
      <input
        onChange={(e) => setCertificateName(e.target.value)}
        type="text"
        name="certificateName"
        placeholder="Name on Certificate"
        id=""
        className="input-field text-sm w-full"
        required
        value={certificateName}
      />
      <input
        onChange={(e) => setCertificateCode(e.target.value)}
        type="text"
        name="certificateCode"
        placeholder="Code on Certificate"
        id=""
        className="input-field text-sm w-full"
        required
        value={certificateCode}
      />
      {certificateCode !== "" && certificateName !== "" && (
        <UploadButton<OurFileRouter>
          endpoint="imageUploader"
          className="bg-blue-100 py-4 ut-button:bg-white px-4 ut-allowed-content:text-sm ut-allowed-content:text-neutral-950 ut-button:shadow-effect ut-button:font-bold ut-button:px-6 ut-button:py-4 ut-button:w-full ut-button:border-[1px] ut-button:border-sold ut-button:border-blue-700 ut-button:text-blue-700 ut-button:disabled"
          onClientUploadComplete={(res) => {
            if (res) {
              setImages(res);
              const json = JSON.stringify(res);
              // Do something with the response
              toast.success(
                "File Uploaded Successfully \n Complete the form and press submit!***"
              );
            }
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            toast.error(`ERROR! ${error.message}`);
          }}
        />
      )}
      <button
        type="submit"
        className="grid place-items-center bg-blue-500 text-white text-md px-8 h-12 w-full disabled:bg-blue-900"
      >
        Upload Certificate
      </button>
    </form>
  );
}

export default UploadCertificateForm;
