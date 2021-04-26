import React from 'react';

import "./PosterBar.scss";

const posterBar = props => {
    return (
      <div className="containerTwo">
          <form>
              <div className="row">
                  <div className="col">
                    <h4 className="card-title"> Announcement </h4> 
                  </div>
                  <div className="col">
                      <div className="card">
                          <div className="card-body">
                            <h3 className="card-title">  Announcement Title  </h3>
                            <h4 className="card-title"> - Announcement Details </h4>
                            <p className="card-text"> Some example text. Some example text. </p>
                            <a href="/" className="card-link"> Contact link </a>
                            <a href="/" className="card-link"> Another link </a>
                          </div>
                      </div>
                  </div>
              </div>
          </form>
      </div>
    );
};   

export default posterBar;