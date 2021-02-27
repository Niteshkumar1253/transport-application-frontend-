import React from 'react'
import logo from './images.png'
import './Header.css'

export default function Header() {
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
                        <button class="btn register-btn my-5 mr-5 my-sm-0" type="submit">Register</button>
                    </ul>
                </div>
            </nav>
        
        </div>
    )
}
