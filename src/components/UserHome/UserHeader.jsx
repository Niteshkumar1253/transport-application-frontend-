import React, { Component } from 'react'
import logo from './images.png'
import './UserHeader.css'

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
                                <a class="nav-link ml-5 m-2 font-weight-bold" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link m-2 font-weight-bold" href="#">About Us</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link m-2 font-weight-bold" href="#" >Contact Us</a>
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
                                    <a class="dropdown-item" href="#">
                                    <i class="fa fa-pencil" aria-hidden="true"></i>&nbsp;
                                        Edit Profile</a>
                                    <a class="dropdown-item" href="#">
                                    <i class="fa fa-heart" aria-hidden="true"></i>&nbsp;
                                        Favorites</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">
                                    <i class="fa fa-power-off" aria-hidden="true"></i>
                                        &nbsp;
                                        Log out</a>
                                </div>
                            </div>
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}
