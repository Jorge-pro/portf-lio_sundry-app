import React from 'react';

import "./PosterBar.scss";

let advertisement = {id: '', title: '', details: '', contact: '', telephone: '', email: '', site: '', socialNetwork: '', category: ''};


export default class PosterBar extends React.Component {

    constructor() {
      super();
      this.state = {advertisement: advertisement};
      }

    componentDidMount() {
      fetch('http://localhost:8080/advertisement')
      .then(res => res.json())
      .then (res => {
        console.log(res);
        this.setState({advertisement:res[0]});
      })
    }
          
    render (){
      return(
        <div className="containerTwo">
            <div className="col">
                <div className="cardTwo">
                    <div className="card-body">
                      <h3 className="card-title">  Announcement About  </h3>
                      <h4 className="card-title"> - Here is information about Announcement </h4>
                        <p> <strong> id: </strong> {this.state.advertisement.id} </p>
                        <p> <strong> title:</strong> {this.state.advertisement.title} </p>
                        <p> <strong> details: </strong> {this.state.advertisement.details} </p>
                        <p> <strong> contact :</strong> {this.state.advertisement.contact} </p>
                        <p> <strong> telephone: </strong> {this.state.advertisement.telephone} </p>
                        <p> <strong> email: </strong> {this.state.advertisement.email} </p>
                        <p> <strong> site: </strong> {this.state.advertisement.site} </p>
                        <p> <strong> socialNetwork: </strong> {this.state.advertisement.socialNetwork} </p>
                        <p> <strong> category: </strong> {this.state.advertisement.category} </p>
                        <a href="/" className="card-link"> Contact link </a>
                        <a href="/" className="card-link"> Another link </a>
                    </div>
                </div>
            </div>
        </div>
        );
      }
  }   
