import React from "react";

export default function Searchcityform() {
  return (
    <div>
      <form className="change-city-form" id="search-bar">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type a city..."
            aria-label="Change City"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
