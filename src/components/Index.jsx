import React from 'react'
import image from './roadimg.png'
import './index.css'
import { Link } from 'react-router-dom'

export default function Index() {
    return (
        <div className="main-container">
            <div className="container-fluid pl-0">
                <div className="row my-3 ml-0 mt-4 ">
                    <div className="col-lg-8 col-md-6 col-sm-12 img-container">
                        <h2 className="mt-2 font-weight-bold"> My Travel</h2>
                        <span><em> The fastest, Easiest way to Gather information..! </em></span>
                        <img className="main-image" src={image} alt="" />
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 login-container">
                        <div className="ml-5 my-5 col-lg-8 rounded border shadow login-box">
                            <h3 className="m-2 pt-2 pb-2 border-bottom ">Log in</h3>
                            <form className="m-2 ">
                                <div className="login-form">
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label >Password</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    <div className="login">
                                        <div class="form-group form-check">
                                            <input type="checkbox" className="form-check-input" />
                                            <label class="form-check-label" >Remember me</label>
                                        </div>
                                        <div className="my-2 mx-3">
                                            <Link type="submit" class="btn login-btn" to="/user">Log in</Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
