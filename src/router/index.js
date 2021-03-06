import { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import * as path from "./path";

const Home = lazy(() => import("views/Home"));
const AboutUs = lazy(() => import("views/AboutUs"));
const Projects = lazy(() => import("views/Projects"));
const ContactUs = lazy(() => import("views/ContactUs"));
const Error = lazy(() => import("views/Error"));

function Router() {
  return (
    <>
      <Switch>
        <Route exact path={path.HOME} component={Home} />
        <Route exact path={path.ABOUTUS} component={AboutUs} />
        <Route exact path={path.PROJECTS} component={Projects} />
        <Route exact path={path.CONTACTUS} component={ContactUs} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default Router;
