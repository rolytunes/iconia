import React from "react";
import Icon from "../../base/Icon";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container flex flex-row py-3 px-3 md:px-0 justify-between items-center">
      <a href="." className="flex items-center">
        <Icon faIcon="dragon" faSize="lg"></Icon>
        <h1 className="ml-3 text-xl">ICONIA</h1>
      </a>
      <ul className="inline-flex text-sm">
        <li className="mr-4">
          <NavLink exact to="/" className="navbar__item">
            Home
          </NavLink>
        </li>
        <li className="mr-8">
          <NavLink exact to="/about" className="navbar__item">
            About
          </NavLink>
        </li>
        <li className="mr-4">ES</li>
        <li>
          <Icon faIcon="toggle-on" faSize="lg"></Icon>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
