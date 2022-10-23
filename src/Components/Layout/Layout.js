import React from "react";
import Navbar from "./Navbar";
import { useContext } from "react";
import { Context } from "../../Context/StateContext";

const Layout = ({ children }) => {
  const { theme } = useContext(Context);
  return (
    <>
      <main className="main" id={theme}>
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default Layout;
