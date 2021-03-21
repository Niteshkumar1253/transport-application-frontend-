import React from 'react'
import logo from './images.png'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow rounded">
                <img className="navbar-brand img-logo" href="#" src={logo} alt=""></img>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link m-2 font-weight-bold" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link m-2 font-weight-bold" href="#to">About Us</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link m-2 font-weight-bold" href="#to" >Contact Us</a>
                        </li>
                    </ul>
                    <ul className="mr-5 my-lg-0">
                        <Link className="btn register-btn mr-5 my-sm-0" to="/register"type="submit">Register</Link>
                    </ul>
                </div>
            </nav>
        
        </div>
    )
}
