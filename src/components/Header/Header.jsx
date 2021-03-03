import React from 'react'
import logo from './images.png'
import './Header.css'
import { Link } from 'react-router-dom'

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
                            <Link class="nav-link ml-5 m-2 font-weight-bold" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link m-2 font-weight-bold" href="#">About Us</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link m-2 font-weight-bold" href="#" >Contact Us</a>
                        </li>
                    </ul>
                    <ul class="mr-5 my-lg-0">
                        <Link class="btn register-btn my-5 mr-5 my-sm-0" to="/register"type="submit">Register</Link>
                    </ul>
                </div>
            </nav>
        
        </div>
    )
}
