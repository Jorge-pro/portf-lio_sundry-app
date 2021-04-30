import React from 'react';

import './Footer.scss';
export default class Footer extends React.Component {

    render(){
    return(
        <div className="containerThree">
            <div className="card-footer mx-11">
                <div className="row mb-8 ">
                    <div className="col-md-4 col-sm-11 col-xs-11">
                        <div className="col-md-12 align-items-center">
                            <div className="text-footer">
                                <h3> SundryApp </h3>
                                    <p> Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula
                                        rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum
                                        vel in justo. 
                                    </p>
                                <div className="social mt-2 mb-3"> 
                                    <i className="fa fa-facebook-official fa-lg"></i> 
                                    <i className="fa fa-instagram fa-lg"></i> 
                                    <i className="fa fa-twitter fa-lg"></i>
                                    <i className="fa fa-facebook"></i> 
                                </div>
                            </div>
                        </div>

                        
                    </div>

                    <div className="col-md-2 col-sm-1 col-xs-1 mb-2"/>
                        <div className="col-md-2 col-sm-4 col-xs-4">
                            <h5 className="heading">Categories</h5>
                                <ul className="card-text-categories">
                                    <ul>
                                        <li><a href="/"><span className="exchanger"></span> Exchanger </a></li>
                                        <li><a href="/"><span className="replace"></span> To replace </a></li>
                                        <li><a href="/"><span className="services"></span> Services</a></li>
                                    </ul>
                                </ul>
                        </div>

                    <div className="col-md-2 col-sm-4 col-xs-4">
                        <h5 className="heading">Learn More</h5>
                            <ul className="card-text-learn">
                                <ul>
                                <li><a href="/"><span className="principles"></span> Our principles </a></li>
                                <li><a href="/"><span className="conduct"></span> Code Of conduct </a></li>
                                <li><a href="/"><span className="suggestions"></span> Our suggestions </a></li>
                                <li><a href="/"><span className="invite"></span> Invite friends </a></li>
                            </ul>
                        </ul>
                    </div>

                    <div className="col-md-2 col-sm-4 col-xs-4">
                        <h5 className="heading">Support</h5>
                            <ul className="card-text-support">
                                <li><a href="/"><span className="contact"></span> About Us </a></li>
                                <li><a href="/"><span className="doubt"></span> Frequently questions </a></li>
                                <li><a href="/"><span className="help"></span> Contact Us </a></li>
                            </ul>
                    </div>
                </div>

                <div className="divider mb-4"/>
                <div className="row-footer"> 
                    <p>© 2021 Sandry App — All Rights Reserved  — 
                        <span className="policy">
                        <a href="/"> Terms of Use & Privacy Policy</a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
 };
}

