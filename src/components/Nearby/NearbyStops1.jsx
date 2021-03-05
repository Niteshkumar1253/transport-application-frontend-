import React, { Component } from 'react'
import map from './109-map-location.png'
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown'
import Table from "react-bootstrap/Table";
import './NearbyStops.css'

export default class NearbyStops1 extends Component {
    state = {
        city: "",
        type: "",
        stops: [{}],
        flag: false
    };

    submitHandler = (e) => {
        e.preventDefault();
        this.getData();
        this.setState({ flag: true });
    }

    getData = async () => {
        let data = await axios
            .get(
                `http://transportapi.com/v3/uk/places.json?query=${this.state.city}&type=${this.state.type}&app_id=52826d30&app_key=1028832009a7340d2005b01392f1195a`
            )
            .then(({ data }) => data);
        this.setState({ stops: data.member });
    };



    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="row mb-5">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="box">
                            <div className="mx-2">
                                <input type="text"
                                    className="border border-secondary bg-white mt-0"
                                    placeholder="City"
                                    name="city"
                                    value={this.state.city}
                                    onChange={(event) => {
                                        this.setState({ city: event.target.value });
                                    }} />
                            </div>

                            <div className="mx-4 drop">
                                <select name="type"
                                    className="border border-danger rounded bg-sucess drop"
                                    value={this.state.type}
                                    onChange={(event) => {
                                        this.setState({ type: event.target.value });
                                    }}>
                                    <option value="train_station" selected>Train</option>
                                    <option value="bus_stop">Bus</option>
                                    <option value="tube_station">Tube</option>
                                </select>
                            </div>
                            <div className = "mx-4">
                                <input type="submit" className="btn btn-danger srch-btn" value="Search"
                                    onClick={this.submitHandler} />
                            </div>
                        </div>


                        <div>
                            {
                                this.state.flag ?
                                    <div>
                                        <Table striped bordered hover>
                                            <thead>
                                                    <tr>
                                                        <th>{this.state.type} mode of station nearby {this.state.city} </th>
                                                    </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.stops.map((item) => (
                                                    <tr>
                                                        <td>{item.name}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>

                                    </div>
                                    : null
                            }
                        </div>


                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 image-cont">
                        <img className="image-fluid w-100" src={map} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
