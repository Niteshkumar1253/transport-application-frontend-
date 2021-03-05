import React, { Component } from "react";
import axios from "axios";
import "./User.css";
import image from './roadimg.png'
import Table from "react-bootstrap/Table";
import authHeader from "../services/authHeader";


export default class UserHomePage extends Component {
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
    error: "",
    email:"",
    flag: false
  };

  getSrcData = async () => {
    try {
      let data = await axios
        .get(
          `https://transportapi.com/v3/uk/places.json?app_id=d3daae57&app_key=75b51dde80aac27aa47974c4e2eee462&query=${this.state.source}`
        )
        .then(({ data }) => data);
      this.setState({ srcLon: data.member[0].longitude });
      this.setState({ srcLat: data.member[0].latitude });
      this.setState({ srcName: data.member[0].name });
      this.setState({error: ""});
    }
    catch (error) {
      this.setState({error: "No route between these combination exist"});
    }
  };

  getDestData = async () => {
    try {
      let data = await axios
        .get(
          `https://transportapi.com/v3/uk/places.json?app_id=d3daae57&app_key=75b51dde80aac27aa47974c4e2eee462&query=${this.state.destination}}`
        )
        .then(({ data }) => data);
      this.setState({ destLon: data.member[0].longitude });
      this.setState({ destLat: data.member[0].latitude });
      this.setState({ destName: data.member[0].name });
      this.setState({error: ""});
    }
    catch (error) {
      this.setState({error: "No route between these combination exist"});
    }

  };

  getRecommendation = async () => {
    try{let data = await axios
      .get(
        `https://transportapi.com/v3/uk/public/journey/from/lonlat:${this.state.srcLon},${this.state.srcLat}/to/lonlat:${this.state.destLon},${this.state.destLat}.json?app_id=52826d30&app_key=1028832009a7340d2005b01392f1195a`
      )
      .then(({ data }) => data);
    this.setState({ recommendation: data.routes[0].route_parts });
    this.setState({ flag: true });
      }
      catch (error) {
        this.setState({error: "No route between these combination exist"});
      }
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
        url: 'http://localhost:9006/api/v1/favourite',
        data: {
            email : this.state.email,
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
        },
        headers: authHeader()
      }
    )
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("userdetails"));
    if(user){
    this.setState({email:user.email})
    console.log(user.email);
   } else{
     this.props.history.push("/");
   }
  }
  
  render() {
    return (
      <div>
          <div className="container-fluid pl-0">
            <div className="row my-3 ml-0 mt-4">
              <div className="col-lg-8 col-md-6 col-sm-12 img-container">
                <h2 className="mt-2 font-weight-bold"> My Travel</h2>
                <span><em> The fastest, Easiest way to Gather information..! </em></span>
                <img className="main-image1 imf-fluid"  src={image} alt="" />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 login-container1 my-5">
                <div className="ml-lg-5 mt-lg-5 col-lg-8 rounded border shadow login-box1 ">
                  <h3 className="m-2 pt-2 pb-2 border-bottom ">Search Route</h3>
                  <form className="m-2">
                    <div className="login-form1">
                      <div class="form-group1 my-3">
                        <label>
                          <b>Source</b>
                        </label>
                        <input type="text" 
                        name="source"
                        value={this.state.source}
                        className="plac" placeholder="Enter Source"
                          onChange={(e) => {
                            this.setState({ source: e.target.value });
                          }}
                        />
                      </div>
                      <div class="form-group1 my-3">
                        <label>
                          <b>Destination</b>
                        </label>
                        <input type="text" 
                        name="destination"
                        value={this.state.destination}
                        className="plac" placeholder="Enter Destination"
                          onChange={(e) => {
                            this.setState({ destination: e.target.value });
                          }}
                        />
                      </div>
                      <div className="login1 my-3">
                        <button className="btn login-btn1" onClick={this.submitHandler}>Search</button>
                      </div>
                      <div>
                        <p>{this.state.error}</p>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>
        </div>
        {
          this.state.flag ?
            <div>
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
              </Table>
              <div className="add-fav mb-3">
                <button className="btn text-center fav-btn1" onClick={this.addHandler}>Add Route To favourite</button>
              </div>
            </div>
            : null
        }
      </div>
    );
  }
}
