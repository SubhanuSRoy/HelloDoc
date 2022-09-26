import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [items, setItems] = useState([]);
  const [docEmail, setdocEmail] = useState("");
  const [docPassword, setdocPassword] = useState("");

  const navigate = useNavigate();

  //   useEffect(() => {
  //     localStorage.setItem('docName', JSON.stringify(items));
  //   }, [items]);
  const loginDoc = (event) => {
    event.preventDefault();

    axios
      .post("https://hellosign-backend.herokuapp.com/login", {
        DoctorEmail: docEmail,
        Password: docPassword,
      })
      .then((response) => {
        console.log("user data:", response);
        localStorage.setItem(
          "docName",
          JSON.stringify(response.data.DoctorName)
        );
        localStorage.setItem(
          "docEmail",
          JSON.stringify(response.data.DoctorEmail)
        );
        localStorage.setItem(
          "docPassword",
          JSON.stringify(response.data.Password)
        );
        localStorage.setItem(
          "docPhoneNo",
          JSON.stringify(response.data.PhoneNo)
        );
        localStorage.setItem(
          "docProfession",
          JSON.stringify(response.data.Profession)
        );

        navigate("/add");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className=" bg-transparent flex flex-col p-2 justify-center items-center">
      <div class="text-center">
        <p class="text-2xl md:text-4xl  leading-10 text-white font-regular ">
          Say <span class="text-indigo-600 font-bold">No</span>
        </p>
        <p class="text-2xl md:text-4xl leading-10 text-white font-regular ">
          to handwritten prescriptions
        </p>
        <h3 class="text-6xl my-4 sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Login to Hello<span class="text-indigo-600">Doc</span>
        </h3>
      </div>
      <img
        src="https://media1.giphy.com/media/htYcYEYT50sPJRB7eR/giphy.gif?cid=6c09b9527209cfb7df8388ab2c406e9f022d4b250d18650d&rid=giphy.gif&ct=s"
        className="h-32 my-4"
      />
      <form
        className="flex flex-col bg-white  rounded p-5 justify-center items-center w-1/2"
        onSubmit={loginDoc}
      >
        <div class="flex flex-wrap text-center -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
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

        <div class="flex flex-wrap text-center -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
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
        </div>
        <button
          class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
          type="submit"
        >
          Login
        </button>
        <div class="md:flex md:items-center mt-4 hover:text-indigo-600">
          <Link to="/register">Create New Account?</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
