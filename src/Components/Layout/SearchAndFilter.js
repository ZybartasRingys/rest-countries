import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchAndFilter() {
  return (
    <div className="container mt-3">
      <div className="row d-flex ">
        <div className="col-12 col-xl-5 ">
          <div class="input-group country-input mb-3 border">
            <div className="icon">
              <FaSearch />
            </div>

            <input
              type="text"
              class="form-control "
              placeholder="Search for a country..."
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
        <div className="col-6 col-xl-2 float-left border">
          <h5>Filter</h5>
        </div>
      </div>
    </div>
  );
}

export default SearchAndFilter;
