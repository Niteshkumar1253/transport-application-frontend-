import React, { Component } from 'react'
import axios from 'axios';

import '../../App.css';
import aircraft from '../../images/aircraft.svg';
import authHeader from '../services/authHeader';


export default class Favourite extends Component {
    state = {
        fav: [],
        flag: false,
        index: -1,
        source: "",
        destination: "",
        mode: "",
        email: ""
    };

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("userdetails"));
        if(user){
        this.setState({ email: user.email })
        // console.log('inside email'+user.email);
        axios.get(`http://localhost:9006/api/v1/favourite/${user.email}`, { headers: authHeader() }).then(res => {
            const temp = res.data;
            this.setState({ fav: temp });
        })
    }
    else{
        this.props.history.push("/");
    }
    }
    deleteHandler = (index) => {
        const user = JSON.parse(localStorage.getItem("userdetails"));
        this.setState({ email: user.email })
        console.log('inside email' + user.email);

        const temp = [...this.state.fav];
        // console.log(index);
        temp.splice(index, 1);
        this.setState({ fav: temp });
        axios.delete(`http://localhost:9006/api/v1/favourite/del?email=${user.email}&index=${index}`, { headers: authHeader() });
        // console.log('check');
    }
    handlePopup = (index) => {
        this.setState({ flag: true });
        this.setState({ source: this.state.fav[index].source });
        this.setState({ destination: this.state.fav[index].destination });
        this.setState({ mode: this.state.fav[index].mode });
    }
    render() {
        return (
            <div className="container my-5">
                <h1 className="text-center text-danger mb-2">Favourite!</h1>
                <img src={aircraft} alt="imag" className="img-fluid custom-img"></img>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 py-2 my-3">
                    {
                        this.state.fav.map((t, index) => {
                            return (

                                <div className="col p-3 text-center">
                                    <div className=" border-0 shadow rounded bg-light p-3">
                                        <p className="mb-0">{t.source}</p>
                                        <h1 className="text-danger"> &#8675;</h1>
                                        <p className="mb-0">{t.destination}</p>
                                        {/* <p className="mb-0">({t.mode})</p> */}
                                        <button onClick={() => this.deleteHandler(index)} className="button btn-danger rounded-pill px-3 py-1 mx-1">Delete</button>
                                    </div>


                                </div>



                            )
                        })
                    }
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Routes</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="d-flex flex-row justify-content-around mb-0 ">
                                        <h5 className="font-weight-light text-uppercase">{this.state.source}</h5>
                                        <h1 className="text-danger mt-0 pt-0">&#8674;</h1>
                                        <h5 className="text-uppercase">{this.state.destination}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




/*

                                    <button onClick={() => this.handlePopup(index)} className="button btn-danger rounded-pill px-3 py-1" data-bs-toggle="modal" data-bs-target="#exampleModal" >Show</button>
*/