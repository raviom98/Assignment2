import React from "react";
import { Redirect } from "react-router-dom";

export class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      submitClicked: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitClick = () => {
    this.setState({ submitClicked: true });
  };

  render() {
    if (this.state.submitClicked) {
      return <Redirect push to={"/PasswordReset"} />;
    }

    return (
      <div className="base-container">
        <div className="header">Enter your registered email address</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required="required"
              />

              <p>Your new password will be sent to this email.</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="button" onClick={this.submitClick}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
