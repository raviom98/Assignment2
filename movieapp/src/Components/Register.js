// import React from "react";
// //import "./loginstyle.scss";
// import { Redirect } from "react-router-dom";
// import { NavigationBar } from "./NavigationBar";

// export class Register extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//       email: "",
//       loginClicked: false,
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

//   loginClick = () => {
//     this.setState({ loginClicked: true });
//   };

//   render() {
//     if (this.state.loginClicked) {
//       return <Redirect push to={"/"} />;
//     }

//     return (
//       <div className="base-container">
//         <div className="header">Register</div>
//         <div className="content">
//           <div className="form">
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="username"
//                 value={this.state.username}
//                 onChange={this.handleChange}
//                 required="required"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="email"
//                 value={this.state.email}
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="password"
//                 value={this.state.password}
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="footer">
//               <button
//                 type="button"
//                 className="button"
//                 onClick={this.loginClick}
//               >
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="footer">
//           <button type="button" className="button" onClick={this.loginClick}>
//             Login
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import AppBar from 'material-ui/AppBar';
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import axios from "axios";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      loginClicked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClick = () => {
    this.setState({ loginClicked: true });
  };
  render() {
    if (this.state.loginClicked) {
      return <Redirect push to={"/login"} />;
    }

    return (
      <div>
        <MuiThemeProvider>
          <div>
            {/* <AppBar title="Register" /> */}
            <h2>Register</h2>
            <TextField
              hintText="Enter your First Name"
              floatingLabelText="First Name"
              onChange={(event, newValue) =>
                this.setState({ first_name: newValue })
              }
            />
            <br />
            <TextField
              hintText="Enter your Last Name"
              floatingLabelText="Last Name"
              onChange={(event, newValue) =>
                this.setState({ last_name: newValue })
              }
            />
            <br />
            <TextField
              hintText="Enter your Email"
              type="email"
              floatingLabelText="Email"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={(event) => this.loginClick(event)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;
