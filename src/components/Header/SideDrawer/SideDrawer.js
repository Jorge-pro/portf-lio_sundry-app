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
            <li>
              <a href="/" alt="site">Home</a>
            </li>
            <li>
              <a href="/" alt="site">How it works</a>
            </li>
            <li>
              <a href="/" alt="site">Sign in</a>
            </li>            
        </ul>
    </nav>
  );
};

export default sideDrawer;