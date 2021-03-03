import React, { useState } from 'react'
import './NearbyStops.css'
import map from './109-map-location.png'
import axios from 'axios'

function NearbyStops() {
    const [city, setCity] = useState();
    const [type, setType] = useState();
    const [stops, setStops] = useState([]);

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
                                    className="border border-secondary bg-white form-control mt-0"
                                    placeholder="City"
                                    name="city"
                                    value={city}
                                    onChange={(event) => {
                                        setCity(event.target.value);
                                    }} />
                            </div>

                            <div className="col-6">
                                <select name="type"
                                    className="form-control border-secondary"
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
                                <input type="submit" className="btn btn-secondary" value="Search"
                                    onClick={submitHandler} />
                            </div>
                        </div>
                    </form>

                    <table class=" m-4 ml-5 text-center">
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
                    </table>

                </div>
                <div className="part-two">
                    <img style={{ width: 35 + 'vw', height: 80 + 'vh' }} src={map} alt="" />
                </div>
            </div>
        </div>
    )
}

export default NearbyStops