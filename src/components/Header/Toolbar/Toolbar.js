import React from 'react';

import DrawerToggleButton from'../SideDrawer/DrawerToggleButton';
import './Toolbar.scss';

const toolbar = props => (
  <header className="toolbar">

    
    <nav className="toolbar_navegation">
      <div className="toobar_toggle_button">
          <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo"><a href="/">SundryApp</a></div>
      <div className="spacer"/>
      <div className="toolbar_navegation-items">
        <ul>
          <li><a href="/" alt="site">Home</a></li>
          <li><a href="/" alt="site">How it works</a></li>
          <li><a href="/" alt="site">Sign in</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;