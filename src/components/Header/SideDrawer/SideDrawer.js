import React from 'react';

import './SideDrawer.scss';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    
  return(
    <nav className={drawerClasses}>
      <ul>
          <li><a href="/"><span className="home"></span> Home </a></li>
          <li><a href="/"><span className="how-it-works"></span> How it works </a></li>
          <li><a href="/"><span className="sign-in"></span> Sign In</a></li>
          <li><a href="/"><button className="col btn btn-orange-moon"> Create an account </button></a></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;