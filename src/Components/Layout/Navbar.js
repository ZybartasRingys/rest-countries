import React from "react";
import "../../scss/navbar.scss";
import { BsMoon } from "react-icons/bs";

function Navbar() {
  return (
    <header>
      <div className="container-fluid navigation shadow-sm bg-white rounded">
        <div className="row nav-row">
          <div className="col-12 col-xxl-11 navigation-col mx-auto d-flex justify-content-between align-items-center">
            <div className="col-6">
              <a className="where" href="/">
                Where in the world?
              </a>
            </div>
            <div className="col-5 d-flex justify-content-end">
              <span className="moon">
                <BsMoon />
              </span>
              <h2 className="dark">Dark Mode</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
