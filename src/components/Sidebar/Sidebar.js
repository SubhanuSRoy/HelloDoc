import { useState } from "react";
import { NavLink } from "react-router-dom";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  return (
    <>
      {/* <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            /> */}
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-52 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
            href="https://material-tailwind.com?ref=mtd"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-center w-full inline-block"
          >
            <h6>HelloDoc</h6>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/"
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  {/* <Icon name="dashboard" size="2xl" /> */}
                  Write Prescription
                </NavLink>
              </li>
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <NavLink
                  to="/"
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  {/* <Icon name="dashboard" size="2xl" /> */}
                  Login
                </NavLink>
              </li>
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <NavLink
                  to="/"
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  {/* <Icon name="dashboard" size="2xl" /> */}
                  Register
                </NavLink>
              </li>
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <NavLink
                  to="/"
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  {/* <Icon name="dashboard" size="2xl" /> */}
                  Past Prescriptions
                </NavLink>
              </li>
              
            </ul>

            <ul className="flex-col min-w-full flex list-none absolute bottom-0">
              <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-white mb-2">
                <a
                  href="https://material-tailwind.com/documentation/quick-start"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-sm font-light py-3"
                >
                  {/* <Icon name="description" size="2xl" /> */}
                  Documentation
                </a>
              </li>
              <li className="bg-gradient-to-tr from-purple-500 to-purple-700 px-4 rounded-lg text-white">
                <a
                  href="https://www.creative-tim.com/product/material-tailwind-dashboard-react"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-4 text-sm font-light py-3"
                >
                  Free Download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}