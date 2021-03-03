import React, { Component } from "react";
import axios from "axios";
import "./User.css";
import image from './roadimg.png'
import { Link } from 'react-router-dom'
import Table from "react-bootstrap/Table";


export default class UserHomePage1 extends Component {
  state = {
    recommendation: [{}],
    source: "",
    destination: "",
    srcName: "",
    destName: "",
    srcLon: "",
    srcLat: "",
    destLon: "",
    destLat: "",
  };

  getSrcData = async () => {
    let data = await axios
      .get(
        `https://transportapi.com/v3/uk/places.json?app_id=d3daae57&app_key=75b51dde80aac27aa47974c4e2eee462&query=${this.state.source}`
      )
      .then(({ data }) => data);
    this.setState({ srcLon: data.member[0].longitude });
    this.setState({ srcLat: data.member[0].latitude });
    this.setState({ srcName: data.member[0].name });
  };

  getDestData = async () => {
    let data = await axios
      .get(
        `https://transportapi.com/v3/uk/places.json?app_id=d3daae57&app_key=75b51dde80aac27aa47974c4e2eee462&query=${this.state.destination}}`
      )
      .then(({ data }) => data);
    this.setState({ destLon: data.member[0].longitude });
    this.setState({ destLat: data.member[0].latitude });
    this.setState({ destName: data.member[0].name });
  };

  getRecommendation = async () => {
    let data = await axios
      .get(
        `https://transportapi.com/v3/uk/public/journey/from/lonlat:${this.state.srcLon},${this.state.srcLat}/to/lonlat:${this.state.destLon},${this.state.destLat}.json?app_id=52826d30&app_key=1028832009a7340d2005b01392f1195a`
      )
      .then(({ data }) => data);
    this.setState({ recommendation: data.routes[0].route_parts });
    console.log(data.routes);
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.getSrcData();
    this.getDestData();
    this.getRecommendation();
  };

  addHandler = (index) => {
    axios(
      {
        method : 'post',
        url: 'http://localhost:3090/favourite',
        data: {
            email : 'uniques',
            details : [
              {
                source: this.state.srcName,
                destination: this.state.destName,
                srcLon: this.state.srcLon,
                srcLat: this.state.srcLat,
                destLon: this.state.destLon,
                destLat: this.state.destLat
              }
            ]
        }
      }
    )
  }

  componentDidMount() { }

  render() {
    return (
      <div>

        <div className="main-container">
          <div className="container-fluid pl-0">
            <div className="row my-3 ml-0 mt-4 ">
              <div className="col-lg-8 col-md-6 col-sm-12 img-container">
                <h2 className="mt-2 font-weight-bold"> My Travel</h2>
                <span><em> The fastest, Easiest way to Gather information..! </em></span>
                <img className="main-image1" src={image} alt="" />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 login-container1 my-5">
                <div className="ml-5  col-lg-8 rounded border shadow login-box1 ">
                  <h3 className="m-2 pt-2 pb-2 border-bottom ">Search Route</h3>
                  <form className="m-2">
                    <div className="login-form1">
                      <div class="form-group1 my-3">
                        <label>
                          <b>Source</b>
                        </label>
                        <input type="text" placeholder="Enter Source"
                          onChange={(e) => {
                            this.setState({ source: e.target.value });
                          }}
                        />
                      </div>
                      <div class="form-group1 my-3">
                        <label>
                          <b>Destination</b>
                        </label>
                        <input type="text" placeholder="Enter Destination"
                          onChange={(e) => {
                            this.setState({ destination: e.target.value });
                          }}
                        />
                      </div>
                      <div className="login1 my-3">
                        <button className="btn login-btn1" onClick={this.submitHandler}>Search</button>
                      </div>
                    </div>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>



        <Table striped bordered hover>
          <thead>
            <tr>
              <th>From {this.state.srcName}</th>
              <th>To {this.state.destName}</th>
              <th>Mode</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {this.state.recommendation.map((item) => (
              <tr>
                <td>{item.from_point_name}</td>
                <td>{item.to_point_name}</td>
                <td>{item.mode}</td>
                <td>{item.duration}</td>
              </tr>
            ))}
          </tbody>
          <div>
            <button className="btn login-btn1" onClick={this.addHandler}>Add News</button>
          </div>
        </Table>
      </div>
    );
  }
}
