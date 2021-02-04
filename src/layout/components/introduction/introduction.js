import React, { Component } from 'react';
import './introduction.css';
import  profile from '../../../assets/Anas Alam.jpg'

export default class Introduction extends Component {
    render() {
        return (
            <div className="introduction">
                <div className="profilePicture">
                    <img src={profile} alt="profile_Image"/>
                </div>
                <div className="candidateDetail">
                    <div className="nameAndRole">
                        <h1>ANAS ALAM</h1>
                        <h4>FRONT-END WEB DEVELOPER</h4>
                    </div>
                    <div className="otherDetails">
                        <div className="left">
                            <p className='address'><i className="fas fa-map-marker-alt"></i>46H/9/1, Shamsul Huda Road, Kolkata-700017</p>
                            <a href="tel:7044804030"><i className="fas fa-phone-alt"></i>+91 70448 04030</a>
                        </div>
                        <div className="right">
                            <a href="mailto:anasalam027@gmail.com" target="_blank"><i className="fas fa-envelope"></i>anasalam027@gmail.com</a>
                            <a href="https://github.com/aannaassalam" target="_blank"><i className="fab fa-github"></i>https://github.com/aannaassalam</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
