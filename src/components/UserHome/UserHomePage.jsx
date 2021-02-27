import React from 'react'
import "./User.css";
import Dropdown from 'react-bootstrap/Dropdown'
import UserHeader from './UserHeader';

export default function UserHomePage() {
    return (
        <div>
            <UserHeader />
            <div class="container">
                <h1>Online Booking</h1>
            </div>

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Mode
            </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Train</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Bus</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Car</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Boat</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">Cycle</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


            <br />
            <br />
            <br />

            <br />


            <form style={{ "border": "1px solid #ccc" }}>
                <label ><b>Source</b></label>
                <input type="text" placeholder="Enter Source" />

                <label><b>Destination</b></label>
                <input type="password" placeholder="Enter Destination" />

                <div class="clearfix">
                    <button type="button" class="cancelbtn">Cancel Booking</button>
                    <button type="submit" class="signupbtn">proceed Booking</button>
                </div>

            </form>
        </div>



    )
}