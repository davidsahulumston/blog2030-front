import React, { Fragment } from "react";
import NavBar from "../Home/NavBar/NavBar";
import Footer from "../Home/Footer/Footer";

function Layout(props) {
  return (
    <Fragment>
      <NavBar />
      {props.children}
      <Footer />
    </Fragment>
  );
}

export default Layout;
