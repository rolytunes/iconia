import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <nav className="container flex flex-col rounded font-sans mb-2 mt-5">
        <ol className="list-reset flex flex-row items-center text-gray-500 text-sm">
          <li>
            <Link to="/" className="hover:text-red-500 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="">App</li>
        </ol>
        <h2 className="flex-grow text-2xl">About</h2>
      </nav>
      <main className="container px-3 mt-3 md:px-0 flex-grow">ddsfs</main>
    </>
  );
};

export default About;
