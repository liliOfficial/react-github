import React from "react";

const Header = (props) => {
  const { sortBy } = props;
  return (
    <div className="row">
      <div className="col-sm-6">
        <h2>GitHub Repositories</h2>
      </div>
      <div className="col-sm-6 text-sm-right pt-2 mb-3">
        Sort by:
        <div className="btn-group ml-2" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => sortBy("id")}
          >
            Id
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => sortBy("star")}
          >
            Star
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => sortBy("watchers_count")}
          >
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
