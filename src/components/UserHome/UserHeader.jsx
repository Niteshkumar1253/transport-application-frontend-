import React, { Component } from 'react'
import images from './images.png'
import './UserHeader.css'
import { Link } from 'react-router-dom'

export default class UserHeader extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow rounded">
                    <img className="navbar-brand img-logo" href="#to" src={images} alt=""></img>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active ml-lg-5">
                                <Link className="nav-link ml-lg-5 m-2 font-weight-bold" to="/user">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link m-2 font-weight-bold" href="#to">About Us</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link m-2 font-weight-bold" href="#to" >Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-2 font-weight-bold" to="/nearby">Nearby Places</Link>
                            </li>
                        </ul>
                        <ul className="mr-5 ml-0 my-lg-0">
                            <div className="btn-group">
                                <button className="btn user-menu-btn  btn-md dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                                    &nbsp;
                                    User Name
                                </button>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/update">
                                        <i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;
                                       Edit Profile</Link>
                                    <Link className="dropdown-item" to="/favourite">
                                        <i className="fa fa-heart" aria-hidden="true"></i>&nbsp;
                                        Favorites</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/" onClick={() => {localStorage.removeItem("userdetails")}}>
                                        <i className="fa fa-power-off" aria-hidden="true"></i>
                                        &nbsp;
                                        Log out</Link>
                                </div>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
