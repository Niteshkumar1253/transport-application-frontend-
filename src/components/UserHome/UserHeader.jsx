import React, { Component } from 'react'
import logo from './images.png'
import './UserHeader.css'
import { Link } from 'react-router-dom'

export default class UserHeader extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-white shadow rounded">
                    <img class="navbar-brand img-logo" href="#" src={logo}></img>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active ml-5">
                                <Link class="nav-link ml-5 m-2 font-weight-bold" to="/user">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link m-2 font-weight-bold" href="#">About Us</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link m-2 font-weight-bold" href="#" >Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link m-2 font-weight-bold" to="/nearby">Nearby Places</Link>
                            </li>
                        </ul>
                        <ul class="mr-5 my-lg-0">
                            <div class="btn-group">
                                <button class="btn user-menu-btn  btn-md dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                                    &nbsp;
                                    User Name
                                </button>
                                <div class="dropdown-menu">
                                    <Link class="dropdown-item" to="/update">
                                        <i class="fa fa-pencil" aria-hidden="true"></i>&nbsp;
                                       Edit Profile</Link>
                                    <Link class="dropdown-item" to="/favourite">
                                        <i class="fa fa-heart" aria-hidden="true"></i>&nbsp;
                                        Favorites</Link>
                                    <div class="dropdown-divider"></div>
                                    <Link class="dropdown-item" to="/">
                                        <i class="fa fa-power-off" aria-hidden="true"></i>
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
