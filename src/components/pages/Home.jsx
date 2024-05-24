import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import resume from "../../assets/NavdeepBal_Frontendeveloper_resume.pdf";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="container">
        <div className="horizontal-scrolling-items">
          <div className="horizontal-scrolling-items__item">
            Code by Navdeep Bal Code by Navdeep Bal Code by Navdeep Bal Code by
            Navdeep Bal
          </div>

          <div className="horizontal-scrolling-items__item">
            Code by Navdeep Bal Code by Navdeep Bal Code by Navdeep Bal Code by
            Navdeep Bal
          </div>
        </div>
      </div>

      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              FRONTEND DEVELOPER
              <p className="hidden sm:block text-3xl">Download Resume</p>
            </h2>
            <div className="flex justify-end gap-6">
              <Link
                to="https://github.com/NaviBal11"
                target="_blank"
                className="icon-link transform hover:scale-110 transition-transform duration-300"
              >
                <FaGithub size={36} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/navdeep-kaur-webdeveloper/"
                target="_blank"
                className="icon-link transform hover:scale-110 transition-transform duration-300"
              >
                <FaLinkedin size={36} />
              </Link>
              <Link
                to={resume}
                target="_blank"
                download
                className="inline-flex text-white items-center px-5 py-2 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              >
                <svg
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                &nbsp; Resume
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-96"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="image1"
          />
        </div>
      </aside>

      <div className="grid  place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="image2"
        />
      </div>
      <div className="flex flex-col items-center ">
        <p className="mt-2 text-sm">CONTACT DETAILS :</p>
        <p className="mb-10 font-medium">navikainth11@gmail.com</p>
      </div>
    </div>
  );
}
