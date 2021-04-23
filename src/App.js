import React, { Component } from 'react';

import Toolbar from './components/Header/Toolbar/Toolbar';
import SideDrawer from './components/Header/SideDrawer/SideDrawer';
import Backdrop from './components/Header/Backdrop/Backdrop';
import SearchBar from './components/Main/SearchBar/SearchBar';
import PosterBar from './components/Main/PosterBar/PosterBar';
import Footer from './components/Footer/Footer';


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div className="container pt-3">
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <SearchBar />
          <PosterBar/>
          <Footer />
      </div>
    );
  } 
}

export default App;
