import React, { Component } from "react";
// import "./SignUp.css";
import axios from 'axios'

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      city: null,
      phoneNo: null,
      image: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        city: "",
        phoneNo: "",
        image: "",
      },
    };
  }

  formDataFunction = () => {
    const formData = new FormData();
    formData.append("firstName", this.state.firstName)
    formData.append("lastName", this.state.lastName)
    formData.append("email", this.state.email)
    formData.append("password", this.state.password)
    formData.append("city", this.state.city)
    formData.append("phoneNo", this.state.phoneNo)
    formData.append("file", '')
    return formData;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      // console.log(`
      //       --SUBMITTING--
      //       First Name: ${this.state.firstName}
      //       Last Name: ${this.state.lastName}
      //       Email: ${this.state.email}
      //       Password: ${this.state.password}
      //       City: ${this.state.city}
      //       Phone Number: ${this.state.phoneNo}
      //     `);

      axios.put(`http://localhost:9013/userprofile/v1/userprofile`, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        city: this.state.city,
        phoneNo: this.state.phoneNo,
        image: ' c'
      },
        {
          onUploadProgress: progressEvent => {
            console.log('upload progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100))
          }

        }).then(res => {
          console.log(res.data)
        }

        )

    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      case "city":
        formErrors.city =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "phoneNo":
        formErrors.phoneNo =
          value.length !== 10 ? "Enter 10 character phone number" : "";
        break;
      case "image":
        formErrors.image =
          value.size > 1024 ? "File Size large" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };





  componentDidMount() {

    const user = JSON.parse(localStorage.getItem("userdetails"));
    // this.setState({email:user.email})
    if(user)
    {
    axios.get(
      `http://localhost:9013/userprofile/v1/userprofile/${user.email}`, {
      'headers': {
        'Access-Control-Allow-Origin': '*',

      }
    }
    )
      .then((res) => {
        this.setState(res.data)
      }).catch(error => {
        console.log("error")
      });

    // console.log(data);
    }
    else
    {
      this.props.history.push("/");
    }



  }


  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper" isfetching={this.state.isFetching}>
        <div className="form-wrapper">
          <h1>Edit Profile</h1>
          <div className="text-center">
          {this.state.image ?
            <img width='250' height='150' alt = "" src={`data:image/*;base64,${this.state.image}`} /> :
            ''}
            </div>


          <form onSubmit={this.handleSubmit} noValidate >
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                value={this.state.lastName}
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                value={this.state.email}
                readOnly
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                value={this.state.password}
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="city">
              <label htmlFor="city">City</label>
              <input
                className={formErrors.city.length > 0 ? "error" : null}
                placeholder="City"
                type="text"
                name="city"
                noValidate
                value={this.state.city}
                onChange={this.handleChange}
              />
              {formErrors.city.length > 0 && (
                <span className="errorMessage">{formErrors.city}</span>
              )}
            </div>
            <div className="phoneNo">
              <label htmlFor="phoneNo">Phone Number</label>
              <input
                className={formErrors.phoneNo.length > 0 ? "error" : null}
                placeholder="Phone Number"
                type="number"
                name="phoneNo"
                noValidate
                value={this.state.phoneNo}
                onChange={this.handleChange}
              />
              {formErrors.phoneNo.length > 0 && (
                <span className="errorMessage">{formErrors.phoneNo}</span>
              )}
            </div>
            {/* <div className="image">
              <label htmlFor="image">User Image</label>
              <input
                className={formErrors.image.size > 0 ? "error" : null}
                placeholder="Upload Image"
                type="file"
                name="image"
                noValidate
                onChange={(e) => {
                  this.setState({ 'image': e.target.files[0] })
                  console.log(e.target.files[0])
                }}
              />
              {formErrors.phoneNo.length > 0 && (
                <span className="errorMessage">{formErrors.image}</span>
              )}
            </div> */}
            <div className="createAccount">
              <button type="submit" onClick={this.handleSubmit}>Update</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}