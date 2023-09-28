"use client";
import React, { useRef, useState } from "react";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";
import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "../api/uploadthing/core";
import { UploadFileResponse } from "uploadthing/client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addPesTeamMember_SA } from "../actions/add-pes-member-data";

export type StringOrUndefined = string | undefined;

const AddPESMemberForm = () => {
  const [memberName, setMemberName] = useState("");
  const [memberRole, setMemberRole] = useState("");
  const [memberFacebookURL, setMemberFacebookURL] =
    useState<StringOrUndefined>(undefined);
  const [memberInstagramURL, setMemberInstagramURL] =
    useState<StringOrUndefined>(undefined);
  const [memberLinkedinURL, setMemberLinkedinURL] =
    useState<StringOrUndefined>(undefined);
  const [images, setImages] = useState<UploadFileResponse[]>([]);

  // Client Action on Submit
  const clientCertificateAction = async () => {
    if (!images.length) {
      toast.error("Please upload an certificate image!");
      return;
    }
    // Create the Data to send to the server action
    const data = {
      name: memberName,
      role: memberRole,
      facebookUrl: memberFacebookURL,
      instagramUrl: memberInstagramURL,
      linkedinUrl: memberLinkedinURL,

      imgUrl: images[0].url.length ? images[0].url : "Missing",
    };
    // Call the server action to add it to the database
    await addPesTeamMember_SA(data);
    // Display success message
    toast.success("Member has been added successfully!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // Reset the input fields
    setMemberName("");
    setMemberRole("");
    setMemberFacebookURL("");
    setMemberInstagramURL("");
    setMemberLinkedinURL("");
    setImages([]);
  };

  return (
    <form
      action={clientCertificateAction}
      className="flex flex-col w-full p-5 bg-white shadow-effect gap-4 max-w-[400px]"
    >
      <input
        onChange={(e) => setMemberName(e.target.value)}
        type="text"
        name="memberName"
        placeholder="Person name *"
        id=""
        className="input-field text-sm w-full"
        required
        value={memberName}
      />
      <input
        onChange={(e) => setMemberRole(e.target.value)}
        type="text"
        name="memberRole"
        placeholder="Person role *"
        id=""
        className="input-field text-sm w-full"
        required
        value={memberRole}
      />
      <input
        onChange={(e) => setMemberFacebookURL(e.target.value)}
        type="text"
        name="memberRole"
        placeholder="Facebook Profile URL"
        id=""
        className="input-field text-sm w-full"
        required
        value={memberFacebookURL}
      />
      <input
        onChange={(e) => setMemberInstagramURL(e.target.value)}
        type="text"
        name="memberRole"
        placeholder="Instagram Profile URL"
        id=""
        className="input-field text-sm w-full"
        required
        value={memberInstagramURL}
      />
      <input
        onChange={(e) => setMemberLinkedinURL(e.target.value)}
        type="text"
        name="memberRole"
        placeholder="Linkedin Profile URL"
        id=""
        className="input-field text-sm w-full"
        required
        value={memberLinkedinURL}
      />
      {memberName !== "" && memberRole !== "" && (
        <>
          <p>Person Image</p>
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
        </>
      )}
      <button
        type="submit"
        className="grid place-items-center bg-blue-500 text-white text-md px-8 h-12 w-full disabled:bg-blue-900"
      >
        Add team member
      </button>
    </form>
  );
};

// With Zod and stuff, but no image
// function AddPESKidsCourseForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     reset,
//     getValues,
//   } = useForm<AddPESMemberFormDatatype>({
//     resolver: zodResolver(AddPESMemberFormSchema),
//   });

//   // This function will be called when the user submits the form
//   const onSubmit = async (data: AddPESMemberFormDatatype) => {
//     // Set isSubmitting to true
//     //
//     // Pause for a second
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     //
//     // Call the server action to submit data in to database, get back response
//     const response = await addPesTeamMember_SA(data);
//     // Toasts
//     if (response.success) {
//       // If response successful, Success Toast
//       toast.success("Your application has been submitted successfully!", {
//         position: "bottom-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//       reset();
//     } else {
//       // If there is an error in the response, Error toast
//       toast.error(`${response?.error}`, {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     }
//     // Set isSubmitting to false?
//     //
//     // Call the server action to revalidate path / redirect?
//     //
//     // Reset the form?
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="flex flex-col w-full p-5 bg-white shadow-effect gap-4 max-w-[400px]"
//     >
//       <input
//         placeholder="Member Name"
//         className="input-field text-sm w-full"
//         required
//         {...register("name")}
//       />
//       <input
//         placeholder="Member Role"
//         className="input-field text-sm w-full"
//         required
//         {...register("role")}
//       />
//       <input
//         placeholder="Facebook profile URL"
//         className="input-field text-sm w-full"
//         required
//         {...register("facebookUrl")}
//       />
//       <input
//         placeholder="Instagrm profile URL"
//         className="input-field text-sm w-full"
//         required
//         {...register("instagramUrl")}
//       />
//       <input
//         placeholder="Linkedin profile URL"
//         className="input-field text-sm w-full"
//         required
//         {...register("linkedinUrl")}
//       />
//       <button type="submit" disabled={isSubmitting} className="submit-button">
//         Add course
//       </button>
//     </form>
//   );
// }

export default AddPESMemberForm;
