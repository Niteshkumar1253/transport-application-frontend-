import React, { Component } from 'react'
import axios from 'axios';
import roadimg from '../images/roadimg.png';
import './index.css'


class Index extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    handleChange = (event) => {
        const temp = event.target.name;
        this.setState({ [temp]: event.target.value });
    }

    resetLoginForm = () => {
        this.setState({ email: '' });
        this.setState({ password: '' });
    }

    handleLogin = (e) => {
        e.preventDefault();
        console.log(this.state.password)
        axios
            .post('http://localhost:9012/login/user', {

                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log(response);
                if (response.data.accessToken) {
                    localStorage.setItem("userdetails", JSON.stringify(response.data));
                    this.props.history.push("/user");
                }
                else {
                    console.log("error");

                }
            })
            .catch(error => {
                this.setState({ error: "Login Credentials Not Correct" });
                this.resetLoginForm();
            })
        this.resetLoginForm();
    }

    render() {
        return (
            <div className="container-fluid pl-0">
                <div className="row my-3 ml-0 mt-4">
                    <div className="col-lg-8 col-md-6 col-sm-12 img-container">
                        <h2 className="mt-2 font-weight-bold"> My Travel</h2>
                        <span><em> The fastest, Easiest way to Gather information..! </em></span>
                        <img className="main-image image-fluid w-100" src={roadimg} alt="" />
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 login-container">
                        <div className="my-5 col-lg-8 rounded border shadow login-box">
                            <h3 className="m-2 pt-2 pb-2 border-bottom ">Log in</h3>
                            <form className="m-2 ">
                                <div className="login-form">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" className="form-control"
                                            onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input type="password" name="password" className="form-control" onChange={this.handleChange} />
                                    </div>
                                    <div className="login">
                                        <div className="form-group form-check">
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label" >Remember me</label>
                                        </div>
                                        <div className="my-2 mx-3">
                                            <button type="submit" className="btn login-btn" onClick={this.handleLogin}>Log in</button>
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                            {this.state.error}
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;

