import React, { useState } from 'react'
import './NearbyStops.css'
import map from './109-map-location.png'
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown'
import Table from "react-bootstrap/Table";

function NearbyStops() {
    const [city, setCity] = useState();
    const [type, setType] = useState();
    const [stops, setStops] = useState([]);
    const[flag,setFlag] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        async function getData() {
            const res = await axios.get(
                `http://transportapi.com/v3/uk/places.json?query=${city}&type=${type}&app_id=52826d30&app_key=1028832009a7340d2005b01392f1195a`
            ).then(res =>
                setStops(res.data.member)
            );

        }
        getData();
        setFlag(true);
    }


    return (
        <div>
            <h1 className="m-5 display-4 text-left">Near By Stops</h1>

            <div className="part">
                <div className="part-one ml-5">
                    <form action="">
                        <div className="form-row mx-5 ">
                            <div className="col-6">
                                <input type="text"
                                    className="border border-secondary bg-white form mt-0 drop"
                                    placeholder="City"
                                    name="city"
                                    value={city}
                                    onChange={(event) => {
                                        setCity(event.target.value);
                                    }} />
                            </div>

                            <div className="col-6">
                                <select name="type"
                                    className="form-control border-secondary drop"
                                    value={type}
                                    onChange={(event) => {
                                        setType(event.target.value);
                                    }}>
                                    <option value="train_station" selected>Train</option>
                                    <option value="bus_stop">Bus</option>
                                    <option value="tube_station">Tube</option>
                                </select>

                            </div>

                            <div className="col-2">
                                <input type="submit" className="btn-secondary drop" value="Search"
                                    onClick={submitHandler} />
                            </div>
                        </div>
                    </form>

                    {
                        flag ?
                            <div>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>{this.state.type} mode of station nearby {this.state.city} </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stops.map((item) => (
                                            <tr>
                                                <td>{item.name}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                              
                            </div>
                            : null
                    }

                    {/* <table class=" m-4 ml-5 text-center">
                        <thead>
                            <th scope="col" className="mb-2 lead font-weight-bold"> {type}</th>
                        </thead>
                        {
                            stops.map(item =>
                                <tr className="m-1 p-2">
                                    <td>{item.name}</td>
                                </tr>

                            )
                        }
                    </table> */}

                </div>
                <div>
                    <img className="image-fluid" src={map} alt="" />
                </div>
            </div>
        </div>
    )
}

export default NearbyStops