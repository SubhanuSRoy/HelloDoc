import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Prescripton() {
  const navigate = useNavigate();

  const [docName, setdocName] = useState("Dr. Devi Shetty");
  const [docEmail, setdocEmail] = useState("shetty.devi@gmail.com");
  const [pName, setpName] = useState("");
  const [pEmail, setpEmail] = useState("");
  const [pGender, setpGender] = useState("");
  const [pAge, setpAge] = useState(0);
  const [noOfMeds, setnoOfMeds] = useState(2);

  const [med1Name, setmed1Name] = useState("");
  const [med1Dose, setmed1Dose] = useState("");
  const [med1Time, setmed1Time] = useState("");

  const [med2Name, setmed2Name] = useState("");
  const [med2Dose, setmed2Dose] = useState("");
  const [med2Time, setmed2Time] = useState("");

  const [med3Name, setmed3Name] = useState("");
  const [med3Dose, setmed3Dose] = useState("");
  const [med3Time, setmed3Time] = useState("");

  const [info, setinfo] = useState("");
  const [med, setmed] = useState([]);
  const [medication, setmedication] = useState([]);

  //   const { register, handleSubmit } = useForm();
  //   const [data, setData] = useState("");
  //   const medList = [];

  //   for (let i = 0; i < noOfMeds; i++) {
  //     medList.push(

  //     );
  //   }

  const onMedsEnter = (data, event) => {
    event.preventDefault();
    for (let i = 1; i <= noOfMeds; i++) {
      console.log(data[`med-${i}-name`]);
    }
  };
  const onPrescribe = (event) => {
    event.preventDefault();
    // console.log(med1Name, med1Dose, med1Time);
    const profession = JSON.parse(localStorage.getItem("docProfession"));
    // const phoneNo = JSON.parse(localStorage.getItem("docPhoneNo"));
    
    axios
      .post("https://hellosign-backend.herokuapp.com/sendform", {
        PatientName: pName,
        PatientEmail: pEmail,
        PatientGender:pGender,
        PatientAge:pAge,
        DoctorName: docName,
        DoctorInfo: profession,
        // DoctorNo: phoneNo,
        DoctorEmail: docEmail,
        Medication: [
          [med1Name, med1Dose, med1Time],
          [med2Name, med2Dose, med2Time],
          [med3Name, med3Dose, med3Time],
        ],
        AdditionalInfo: info,
      })
      .then((response) => {
        console.log("data status", response.data.Status);
        if(response.data.Status=="True")
        {
          navigate("/sucess")
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
    // setData(data)
  };

  useEffect(() => {
    setdocName(JSON.parse(localStorage.getItem("docName")));
    setdocEmail(JSON.parse(localStorage.getItem("docEmail")));
    
  }, []);

  return (
    <div className="bg-blue-500 w-full overflow-hidden flex items-center justify-center">
      <div className="flex items-center justify-end w-full  ">
        <div class="m-12 mt-2 mb-2 rounded-md p-5 w-full bg-white">
          <div class="text-center mb-4">
            <p class="text-sm leading-7 text-gray-500 font-regular uppercase">
              Write a prescription
            </p>
            <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Hello <span class="text-indigo-600">{docName.toUpperCase()}</span>
            </h3>
          </div>

          <form class="w-full" onSubmit={onPrescribe}>
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
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Patient Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  value={pName}
                  onChange={(e) => {
                    setpName(e.target.value.toUpperCase());
                  }}

                  // placeholder="Dr. Devi Shetty"
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
                  Patient's Email
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="email"
                  value={pEmail}
                  onChange={(e) => {
                    setpEmail(e.target.value);
                  }}

                  // placeholder="shetty.devi@gmail.com"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Age of Patient
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="number"
                  value={pAge}
                  onChange={(e) => {
                    setpAge(e.target.value);
                  }}
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Gender
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  value={pGender}
                  onChange={(e) => {
                    setpGender(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3 mb-4">
                <label
                  class="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Add 3 medicines
                </label>
                {/* <input
                  type="number"
                  onChange={(e) => setnoOfMeds(e.target.value)}
                  className="appearance-none w-10 ml-4 bg-gray-200 text-gray-700 border rounded leading-tight focus:outline-none focus:bg-white"
                /> */}

                <div className="flex px-2">
                  <input
                    class="appearance-none block w-1/3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mr-2 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id=""
                    type="text"
                    value={med1Name}
                    onChange={(e) => {
                      setmed1Name(e.target.value);
                    }}
                    placeholder="Name of medicine"
                  />
                  <input
                    class="appearance-none block w-1/3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mr-2 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id=""
                    type="text"
                    value={med1Dose}
                    onChange={(e) => {
                      setmed1Dose(e.target.value);
                    }}
                    placeholder="Dosage"
                  />
                  <input
                    class="appearance-none block w-1/3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mr-2 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="text"
                    value={med1Time}
                    onChange={(e) => {
                      setmed1Time(e.target.value);
                    }}
                    placeholder="Time of day"
                  />
                </div>

                <div className="flex px-2">
                  <input
                    class="appearance-none block w-1/3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mr-2 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id=""
                    type="text"
                    value={med2Name}
                    onChange={(e) => {
                      setmed2Name(e.target.value);
                    }}
                    placeholder="Name of medicine"
                  />
                  <input
                    class="appearance-none block w-1/3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mr-2 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id=""
                    type="text"
                    value={med2Dose}
                    onChange={(e) => {
                      setmed2Dose(e.target.value);
                    }}
                    placeholder="Dosage"
                  />
                  <input
                    class="appearance-none block w-1/3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mr-2 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="text"
                    value={med2Time}
                    onChange={(e) => {
                      setmed2Time(e.target.value);
                    }}
                    placeholder="Time of day"
                  />
                </div>

                <div className="flex px-2">
                  <input
                    class="appearance-none block w-1/3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mr-2 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id=""
                    type="text"
                    value={med3Name}
                    onChange={(e) => {
                      setmed3Name(e.target.value);
                    }}
                    placeholder="Name of medicine"
                  />
                  <input
                    class="appearance-none block w-1/3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mr-2 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id=""
                    type="text"
                    value={med3Dose}
                    onChange={(e) => {
                      setmed3Dose(e.target.value);
                    }}
                    placeholder="Dosage"
                  />
                  <input
                    class="appearance-none block w-1/3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mr-2 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="text"
                    value={med3Time}
                    onChange={(e) => {
                      setmed3Time(e.target.value);
                    }}
                    placeholder="Time of day"
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-62 w-full ml-2">
                <label
                  class="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Additional Info
                </label>
                <textarea
                  value={info}
                  onChange={(e) => {
                    setinfo(e.target.value);
                  }}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mr-2 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>
              </div>
              <div class="flex justify-between w-full px-3">
                <div class="md:flex md:items-center">
                  <label class="block text-gray-500 font-bold">
                    <input class="mr-2 leading-tight" type="checkbox" />
                    <span class="text-sm">Agree to terms and conditions</span>
                  </label>
                </div>
                <button
                  class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Prescribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Prescripton;
