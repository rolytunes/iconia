import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeCurrentApp } from "actions.js";

function Dropdown({ options, onOptionSelect, changeCurrentApp }) {
  return (
    <>
      <div className="dropdown inline-block relative">
        <Link to className="inline-flex items-center">
          <span className="mr-1">Apps</span>
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
              onClick={() => changeCurrentApp("cv")}
              exact
              to="/app/cv"
              className="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
            >
              CV
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => changeCurrentApp("vr")}
              exact
              to="/app/vr"
              className="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
            >
              VR
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => changeCurrentApp("blog")}
              exact
              to="/app/blog"
              className="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => changeCurrentApp("erp")}
              exact
              to="/app/erp"
              className="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
            >
              ERP
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => changeCurrentApp("travel")}
              exact
              to="/app/travel"
              className=" bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
            >
              Travelr
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => changeCurrentApp("ecommerce")}
              exact
              to="/app/ecommerce"
              className="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
            >
              eCommerce
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => changeCurrentApp("stream")}
              exact
              to="/app/stream"
              className="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
            >
              Stream
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({ currentApp: state.iconiaApp.currentApp });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeCurrentApp }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
