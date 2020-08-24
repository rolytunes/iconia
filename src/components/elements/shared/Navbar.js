import React from "react";
import Icon from "../../base/Icon";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="container flex flex-row py-2 px-3 md:px-0 justify-start items-center">
        <Link to="/" className="flex items-center flex-grow">
          <Icon faIcon="dragon" faSize="lg"></Icon>
          <h1 className="ml-3 text-xl">
            ICONIA <span></span>
          </h1>
        </Link>
        <ul className="hidden md:inline-flex text-sm">
          <li className="mr-4">
            <NavLink exact to="/" className="navbar__item">
              Home
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink exact to="/about" className="navbar__item">
              About
            </NavLink>
          </li>
          <li>
            <div className="dropdown inline-block relative">
              <Link class="inline-flex items-center">
                <span class="mr-1">Apps</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </Link>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 w-32 shadow-lg">
                <li>
                  <NavLink
                    exact
                    to="/app/cv"
                    className="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                  >
                    CV
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/app/vr"
                    className="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                  >
                    VR
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/app/blog"
                    className="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/app/erp"
                    className="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                  >
                    ERP
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/app/travel"
                    className=" bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                  >
                    Travelr
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/app/ecommerce"
                    className="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                  >
                    eCommerce
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/app/stream"
                    className="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                  >
                    Stream
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul className="inline-flex text-sm">
          <li className="mr-4 ml-8">EN</li>
          <li>
            <Icon faIcon="toggle-on" faSize="lg"></Icon>
          </li>
        </ul>
      </nav>
      <hr className="container border-gray-700 hidden"></hr>
      <nav className="container flex flex-row py-1 px-3 md:px-0 justify-start text-sm hidden">
        <ul className="inline-flex">
          <li
            class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide text-xs py-2 mr-8"
            href="#"
          >
            Subitem 1
          </li>
          <li
            class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide text-xs py-2 mr-8"
            href="#"
          >
            Subitem 2
          </li>
          <li
            class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide text-xs py-2 mr-8"
            href="#"
          >
            Subitem 3
          </li>
          <li
            class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide text-xs py-2"
            href="#"
          >
            Subitem 4
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
