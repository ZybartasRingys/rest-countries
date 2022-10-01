import React from "react";
import "../../scss/searchAndFilter.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function SearchAndFilter({ name }) {
  const [searchCountry, setSearchCountry] = useState("");
  const [searchParams] = useState(["capital", "name"]);

  return (
    <div className="container mt-3">
      <div className="row d-flex flex-column flex-xl-row justify-content-between">
        <div className="col-12 col-xl-5 ">
          <div className="input-group country-input mb-3 border">
            <div className="icon">
              <FaSearch />
            </div>

            <input
              type="text"
              className="form-control  "
              placeholder="Search for a country..."
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={searchCountry}
              onChange={(e) => setSearchCountry(e.target.value)}
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
