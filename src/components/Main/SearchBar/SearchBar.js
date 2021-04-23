import React from 'react';

import "./SearchBar.scss";

const searchBar = props => {
    return (
      <div className="containerOne">
          <form className="card card-sm">
              <div className="card-body row no-gutters align-items-center">
                  <div className="col">
                      <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search here..."/>
                  </div>
                  <div className="col-auto">
                      <button className="col btn btn-orange-moon"> Search </button>
                  </div>
              </div>
          </form>
      </div> 
    );
}

export default searchBar;