import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-6 px-16 border-t border-gray-200 font-light flex flex-col lg:flex-row justify-between items-center">
      <p className="text-gray-700 mb-6 lg:mb-0">
        Copyright &copy; {new Date().getFullYear()}{" "}
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="text-light-blue-500 hover:text-light-blue-700"
        >
          AIOverflow
        </a>
      </p>

      <ul className="list-unstyled flex">
        <li className="mr-6">
          <a
            className="text-gray-700 hover:text-gray-900 font-medium block text-sm"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/subhanu-sankar-roy/"
          >
            Subhanu's LinkedIN
          </a>
        </li>
        <li className="mr-6">
          <a
            className="text-gray-700 hover:text-gray-900 font-medium block text-sm"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/chethan-reddy-0201791ba/"
          >
            Chethan's LinkedIN
          </a>
        </li>
        <li className="mr-6">
          <Link
            className="text-gray-700 hover:text-gray-900 font-medium block text-sm"
            to="/"
          >
            Home
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
