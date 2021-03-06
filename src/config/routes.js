import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "components/pages/main/Home";
import NotFound from "components/pages/main/NotFound";
import About from "components/pages/main/About";
import Blog from "components/pages/blog/index";
import CV from "components/pages/cv/index";
import ERP from "components/pages/erp/index";
import Stream from "components/pages/stream/index";
import Travel from "components/pages/travel/index";
import VR from "components/pages/vr/index";
import ECommerce from "components/pages/ecommerce/index";

export default (
  <Switch>
    <Route exact strict path="/" component={Home}></Route>
    <Route exact strict path="/about" component={About} />
    <Route exact strict path="/app/blog" component={Blog} />
    <Route exact strict path="/app/cv" component={CV} />
    <Route exact strict path="/app/erp" component={ERP} />
    <Route exact strict path="/app/stream" component={Stream} />
    <Route exact strict path="/app/travel" component={Travel} />
    <Route exact strict path="/app/vr" component={VR} />
    <Route exact strict path="/app/ecommerce" component={ECommerce} />
    <Route component={NotFound} />
  </Switch>
);
