import React, { Component } from "react";
import "./assets/icons/fa";
import Navbar from "./components/elements/shared/Navbar";
import BottomNav from "./components/elements/shared/BottomNav";
import routes from "./config/routes";

class App extends Component {
  render() {
    return (
      <>
        <div className="bg-gray-800 text-gray-300">
          <Navbar></Navbar>
        </div>
        {routes}
        <footer className="container hidden px-2 md:px-0 md:block text-center text-xs">
          Iconia Copyright 2020
        </footer>
        <BottomNav></BottomNav>
      </>
    );
  }
}

export default App;
