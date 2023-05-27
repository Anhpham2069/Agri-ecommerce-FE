import React, { Fragment, createContext } from "react";
import { Navber, Footer, CartModal } from "../partials";
import LoginSignup from "../auth/LoginSignup";


export const LayoutContext = createContext();

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <Navber />
          <LoginSignup />
          <CartModal />
          {/* All Children pass from here */}
          {children}
          {/* <ContentComponent /> */}
        </div>
        <Footer />
        </div>
    </Fragment>
  );
};

export default Layout;
