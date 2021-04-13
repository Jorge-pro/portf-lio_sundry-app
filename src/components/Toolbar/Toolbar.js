import React from 'react';

import DrawerToggleButton from'../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

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
          <li><a href="/">Home</a></li>
          <li><a href="/">Sign in</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;