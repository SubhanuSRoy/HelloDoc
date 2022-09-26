import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-wrap justify-around items-center pt-4 w-full">
      <img
        src="https://media1.giphy.com/media/htYcYEYT50sPJRB7eR/giphy.gif?cid=6c09b9527209cfb7df8388ab2c406e9f022d4b250d18650d&rid=giphy.gif&ct=s"
        className=""
      />
      <div className="flex flex-col h-1/2">
        <div class="text-center mb-4">
          <p class="text-4xl leading-10 text-white font-regular uppercase">
            Say <span class="text-indigo-600 font-bold">No</span>
          </p>
          <p class="text-4xl leading-10 text-white font-regular uppercase">
            to handwritten prescriptions
          </p>
          <h3 class="text-6xl my-4 sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Say Hello<span class="text-indigo-600">Doc</span>
          </h3>
        </div>
        <div class="flex flex-col text-center gap-y-4 m-4 ">
            <div className="flex flex-col gap-y-4 my-2 items-center w-full">
                <div className="flex items-center justify-start gap-x-4 w-full">
                    <img src="https://c.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif" className="h-12 w-12 rounded-full"/>
                    <p className="text-xl my-4 md:text-3xl leading-normal font-bold tracking-tight text-gray-900">No misunderstandings</p>
                </div>
                <div className="flex items-center justify-start gap-x-4 w-full">
                    <img src="https://c.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif" className="h-12 w-12 rounded-full"/>
                    <p className="text-xl my-4 md:text-3xl leading-normal font-bold tracking-tight text-gray-900">Signature Authentication</p>
                </div>
                <div className="flex items-center justify-start gap-x-4 w-full ">
                    <img src="https://c.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif" className="h-12 w-12 rounded-full"/>
                    <p className="text-xl my-4 md:text-3xl leading-normal font-bold tracking-tight text-gray-900">No Paper Waste</p>
                </div>
            </div>
          <button
            class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
            type="submit"
          >
            <Link to="/login">Login</Link>
          </button>
          <button
            class="shadow bg-white hover:bg-indigo-200 focus:shadow-outline focus:outline-none text-indigo-600 font-bold py-2 px-6 rounded"
            type="submit"
          >
            <Link to="/register">Register</Link>
          </button>
        </div>
      </div>

        
      
    </div>
  );
}

export default Home;
