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
                    className="navbar__item rounded-t bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                  >
                    CV
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/app/vr"
                    className="navbar__item bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                  >
                    VR
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/app/blog"
                    className="navbar__item bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/app/erp"
                    className="navbar__item bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                  >
                    ERP
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/app/travel"
                    className="navbar__item bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                  >
                    Travelr
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/app/ecommerce"
                    className="navbar__item bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                  >
                    eCommerce
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/app/stream"
                    className="navbar__item rounded-b bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
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
      <hr className="container border-gray-700"></hr>
      <nav className="container flex flex-row py-1 px-3 md:px-0 justify-start text-sm">
        <ul>
          <li>SubItem</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
