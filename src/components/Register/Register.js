import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [docName, setdocName] = useState("");
  const [docEmail, setdocEmail] = useState("");
  const [phone, setphone] = useState("");
  const [docPassword, setdocPassword] = useState("");
  const [docProfession, setdocProfession] = useState("");
  const [docPassword2, setdocPassword2] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const registerDoc = (event) => {
    event.preventDefault();

    if (docPassword === docPassword2) {
      setLoading(true);
      axios
        .post("https://hellosign-backend.herokuapp.com/newRegistration", {
          DoctorName: docName,
          DoctorEmail: docEmail,
          PhoneNo: phone,
          Profession: docProfession,
          Password: docPassword,
        })
        .then((response) => {
          setLoading(false);
          console.log("data status", response);

          navigate("/login");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      alert("Please enter same password");
      setdocPassword("");
      setdocPassword2("");
    }
  };
  return (
    <div className="bg-transparent flex flex-col p-4 justify-center items-center">
      {loading && <h1>Loading...</h1>}

      <div class="text-center mb-4">
        <p class="text-2xl md:text-4xl  leading-10 text-white font-regular ">
          Say <span class="text-indigo-600 font-bold">No</span>
        </p>
        <p class="text-2xl md:text-4xl leading-10 text-white font-regular ">
          to handwritten prescriptions
        </p>
        <h3 class="text-6xl my-4 sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Register on Hello<span class="text-indigo-600">Doc</span>
        </h3>
      </div>
      <form
        className="flex flex-col bg-white  rounded p-5 justify-center items-center w-1/2"
        onSubmit={registerDoc}
      >
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Doctor Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Your name"
              value={docName}
              onChange={(e) => {
                setdocName(e.target.value);
              }}
              required
            />
            {/* <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Doctor's Email
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="email"
              placeholder="Your Email"
              value={docEmail}
              onChange={(e) => {
                setdocEmail(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Doctor Phone
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => {
                setphone(e.target.value);
              }}
              required
            />
            {/* <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Doctor Qualifications
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="MBBS, MD Neuroscience"
              value={docProfession}
              onChange={(e) => {
                setdocProfession(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Password
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="password"
              placeholder="Password"
              value={docPassword}
              onChange={(e) => {
                setdocPassword(e.target.value);
              }}
              required
            />
            {/* <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Re Enter password
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="password"
              placeholder="Re enter password"
              value={docPassword2}
              onChange={(e) => {
                setdocPassword2(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div class="flex justify-between w-full px-3">
          <div class="md:flex md:items-center">
            <Link to="/login">Login?</Link>
          </div>
          <button
            class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
