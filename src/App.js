import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./assets/icons/fa";
import Navbar from "./components/elements/shared/Navbar";
import Home from "./components/pages/main/Home";
import NotFound from "./components/pages/main/NotFound";
import About from "./components/pages/main/About";
import Blog from "./components/pages/blog/index";
import CV from "./components/pages/cv/index";
import ERP from "./components/pages/erp/index";
import Stream from "./components/pages/stream/index";
import Travel from "./components/pages/travel/index";
import VR from "./components/pages/vr/index";
import BottomNav from "./components/elements/shared/BottomNav";

class App extends Component {
  render() {
    return (
      <>
        <div className="bg-gray-800 text-gray-300">
          <Navbar></Navbar>
        </div>
        <Switch>
          <Route exact strict path="/" component={Home}></Route>
          <Route exact strict path="/about" component={About} />
          <Route exact strict path="/blog" component={Blog} />
          <Route exact strict path="/cv" component={CV} />
          <Route exact strict path="/erp" component={ERP} />
          <Route exact strict path="/stream" component={Stream} />
          <Route exact strict path="/travel" component={Travel} />
          <Route exact strict path="/vr" component={VR} />
          <Route exact strict path="/404" component={NotFound} />
        </Switch>
        <footer className="container hidden px-2 md:px-0 md:block text-center text-xs">
          Iconia Copyright 2020
        </footer>
        <BottomNav></BottomNav>
      </>
    );
  }
}

export default App;
