import React from "react";
import Icon from "../../base/Icon";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container flex flex-row py-3 px-3 md:px-0 justify-start items-center">
      <a href="." className="flex items-center flex-grow">
        <Icon faIcon="dragon" faSize="lg"></Icon>
        <h1 className="ml-3 text-xl">
          ICONIA <span></span>
        </h1>
      </a>
      <ul className="hidden md:inline-flex text-sm">
        <li className="mr-4">
          <NavLink exact to="/" className="navbar__item">
            Home
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink exact to="/cv" className="navbar__item">
            CV
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink exact to="/vr" className="navbar__item">
            VR
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink exact to="/blog" className="navbar__item">
            Blog
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink exact to="/erp" className="navbar__item">
            ERP
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink exact to="/travel" className="navbar__item">
            Travelr
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink exact to="/ecommerce" className="navbar__item">
            eCommerce
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink exact to="/stream" className="navbar__item">
            Stream
          </NavLink>
        </li>
      </ul>
      <ul className="inline-flex text-sm">
        <li className="mr-4 ml-8">ES</li>
        <li>
          <Icon faIcon="toggle-on" faSize="lg"></Icon>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
