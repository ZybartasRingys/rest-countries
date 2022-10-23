import React from "react";
import "../../scss/navbar.scss";
import { FaMoon } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../../Context/StateContext";

function Navbar() {
  const { toggleTheme } = useContext(Context);
  return (
    <header>
      <div className="container-fluid navigation shadow-sm border ">
        <div className="row nav-row ">
          <div className="col-12 col-xxl-12 navigation-col mx-auto d-flex justify-content-between align-items-center">
            <div className="col-6 d-flex justify-content-start">
              <a className="where" href="/">
                Where in the world?
              </a>
            </div>
            <div
              className="col-6 d-flex justify-content-end
             dark-mode"
            >
              <span className="moon">
                <FaMoon className="moon-icon" />
              </span>
              <h2 className="dark" onClick={toggleTheme}>
                Dark Mode
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
