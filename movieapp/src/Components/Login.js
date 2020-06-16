import React from "react";
//import "./loginstyle.scss";
import { Redirect } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";

// export class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
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
//         <div className="header">LOGIN</div>
//         <div className="content">
//           <div className="form">
//             <div className="form-group">
//               <label htmlFor="username">Username/Email</label>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="username"
//                 value={this.state.email}
//                 onChange={this.handleChange}
//                 required="required"
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
//           </div>
//         </div>
//         <div className="footer">
//           <button type="button" className="button" onClick={this.loginClick}>
//             Login
//           </button>
//         </div>
//         <a href="/forgotpassword">Forgot Password?</a>
//         <a href="/register">Not a member yet? Register Now!</a>
//       </div>
//     );
//   }
// }

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
    return (
      <div>
        <MuiThemeProvider>
          <div>
            {/* <AppBar title="Login" /> */}
            <h2>Login </h2>
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
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
              label="Login"
              primary={true}
              style={style}
              onClick={(event) => this.loginClick(event)}
            />
          </div>
        </MuiThemeProvider>

        <div className="links">
          <br></br>
          <a href="/forgotpassword">Forgot Password?</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/register">Not a member yet? Register Now!</a>
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Login;
