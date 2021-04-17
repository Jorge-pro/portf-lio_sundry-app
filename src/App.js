import React, { Component } from 'react';


import Toolbar from './components/Header/Toolbar/Toolbar';
import SideDrawer from './components/Header/SideDrawer/SideDrawer';
import Backdrop from './components/Header/Backdrop/Backdrop';
import SearchBar from './components/Main/SearchBar/SearchBar';
import SearchBar2 from './components/Main/PosterBar/PosterBar';


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
      <div style={{height:'100%'}}>

         
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
          

          <div className="">
            <br/>
            <SearchBar />
            <br/>
            <SearchBar2/>
          </div>

          <div className="footer">
            <p>eu sou Footer</p>
          </div>
      
      </div>
    );
  } 
}

export default App;
