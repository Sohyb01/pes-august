import React from "react";

function FindCertificateForm() {
  return (
    <form className="flex gap-2 items-center w-full">
      <input
        type="text"
        name="certificateCode"
        id=""
        className="input-field text-sm"
      />
      <button
        type="submit"
        className="grid place-items-center bg-blue-500 text-white text-md px-8 h-10 w-full disabled:bg-blue-900"
      >
        View Certificate
      </button>
    </form>
  );
}

export default FindCertificateForm;
