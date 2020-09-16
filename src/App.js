import React, { Component } from "react";
import "assets/icons/fa";
import Navbar from "components/elements/shared/Navbar";
import BottomNav from "components/elements/shared/BottomNav";
import routes from "config/routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { save, load } from "redux-localstorage-simple";

const createStoreWithMiddleware = applyMiddleware(
  save() // Saving done here
)(createStore);

const store = createStoreWithMiddleware(
  rootReducer,
  load(),
  composeWithDevTools()
);

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <div className="bg-gray-800 text-gray-300">
            <Navbar></Navbar>
          </div>
          {routes}
          <footer className="container hidden px-2 md:px-0 md:block text-center text-xs">
            Iconia Copyright 2020
          </footer>
          <BottomNav></BottomNav>
        </Provider>
      </>
    );
  }
}

export default App;
