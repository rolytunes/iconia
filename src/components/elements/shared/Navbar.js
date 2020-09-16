import React from "react";
import { Icon } from "components/base/index";
import { NavLink, Link } from "react-router-dom";
import Dropdown from "components/elements/Dropdown";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeCurrentApp } from "actions.js";

const Navbar = ({ changeCurrentApp, ...props }) => {
  return (
    <>
      <nav className="container flex flex-row py-2 px-3 md:px-0 justify-start items-center">
        <Link
          onClick={() => changeCurrentApp("")}
          to="/"
          className="flex items-center flex-grow"
        >
          <Icon faIcon="dragon" faSize="lg"></Icon>
          <h1 className="ml-3 text-xl">
            ICONIA <span className="text-base">{props.currentApp}</span>
          </h1>
        </Link>
        <ul className="hidden md:inline-flex text-sm">
          <li className="mr-4">
            <NavLink
              onClick={() => changeCurrentApp("")}
              exact
              to="/"
              className="navbar__item"
            >
              Start
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              onClick={() => changeCurrentApp("")}
              exact
              to="/about"
              className="navbar__item"
            >
              About
            </NavLink>
          </li>
          <li>
            <Dropdown></Dropdown>
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
            className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide text-xs py-2 mr-8"
            href="#"
          >
            Subitem 1
          </li>
          <li
            className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide text-xs py-2 mr-8"
            href="#"
          >
            Subitem 2
          </li>
          <li
            className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide text-xs py-2 mr-8"
            href="#"
          >
            Subitem 3
          </li>
          <li
            className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide text-xs py-2"
            href="#"
          >
            Subitem 4
          </li>
        </ul>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => ({ currentApp: state.iconiaApp.currentApp });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeCurrentApp }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
