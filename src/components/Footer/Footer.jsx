import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="footer-top text-left">
                <div className="container">
                    <div className="row">
                        <div className="md-mb-30 sm-mb-30 col-md-3 col-sm-6 col-xs-12 segment-one">
                            <h3>My Travel</h3>
                            <p>A UK based Website, with information about 
                                trains,buses and tube stations. We help you plan your
                                daily journey with ease.
                            </p>
                        </div>
                        <div className="md-mb-30 sm-mb-30 col-md-3 col-sm-6 col-xs-12 segment-two">
                            <h2>Useful links</h2>
                            <ul>
                                <li><a href="#">Trains</a></li>
                                <li><a href="#">Buses</a></li>
                                <li><a href="#">Cars</a></li>
                                <li><a href="#">Tubes</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 segment-three sm-mb-30 ">
                            <h2>Follow Us</h2>
                            <p>Please follow us on our Social media Profile in order to keep Updated.</p>
                            <a href=""><i className="fa fa-facebook"></i></a>
                            <a href=""><i className="fa fa-twitter" ></i></a>
                            <a href=""><i className="fa fa-linkedin" ></i></a>
                            <a href=""><i className="fa fa-pinterest" ></i></a>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 segment-four sm-mb-30 ">
                            <h2>Our Newsletter</h2>
                            <p>Subscribe to our Monthly newsletter. Please Provide your email Id.</p>
                            <form className="form-inline">
                                <div className="form-group">
                                    <input type="email" />
                                    <input type="submit" value="Subscribe"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <p className="footer-bottom-text">All Rights reserved by &copy;TravelOne,2021</p>
        </footer>
    )
}
