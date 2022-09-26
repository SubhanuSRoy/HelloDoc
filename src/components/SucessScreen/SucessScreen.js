import React from "react";
import { Link } from "react-router-dom";

function SucessScreen() {
  const docEmail = localStorage.getItem("docEmail");
  return (
    <div className="bg-white p-5 h-screen flex flex-col items-center justify-evenly">
      <h1 className="text-4xl leading-10 text-white font-regular">
        Your prescription has been sent to your {docEmail}. Please check and
        sign.
      </h1>
      <h2 className="text-3xl leading-10 text-white font-regular">Patient will receive a copy of the same on their email, after you sign.</h2>
      <img src="https://c.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif" alt="tick" />
      <button
        class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
        type="submit"
      >
        <Link to="/add">New Prescription</Link>
      </button>
    </div>
  );
}

export default SucessScreen;
