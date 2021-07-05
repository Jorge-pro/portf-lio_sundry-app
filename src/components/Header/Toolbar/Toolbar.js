import React from 'react';

import DrawerToggleButton from'../SideDrawer/DrawerToggleButton';
import './Toolbar.scss';

const toolbar = props =>( 
  <header className="toolbar">
    <nav className="toolbar_navegation">
        <div className="toobar_toggle_button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar_logo"><a href="/">SundryApp</a></div>
        <div className="spacer"/>
        <div className="toolbar_navegation-items">
            <ul>
              <li><a href="/"><span className="home"></span> Home </a></li>
              <li><a href="/"><span className="how-it-works"></span> How it works </a></li>
              <li><a href="/"><span className="sign-in"></span> Sign In</a></li>
              <li><a href="/"><button className="col btn btn-orange-moon"> Create an account </button></a></li>
            </ul>
        </div>
      </nav>
  </header>
);

export default toolbar;
