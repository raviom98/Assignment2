import React from "react";
import { Redirect } from "react-router-dom";
import { FormControl } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

class Feeback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructorname: "",
      coursename: "",
      suggestions: "",
      givestar: "",
      feedbackdropdown: [1, 2, 3, 4, 5],
      loginClicked: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  registerClick = () => {
    this.setState({ registerClicked: true });
  };

  render() {
    return (
      <div>
        <h2>Rate the Course and Instructor</h2>
        <label htmlFor="instructorname">Instructor Name</label>
        &nbsp;&nbsp;
        <input
          type="text"
          name="instructorname"
          placeholder="Enter Instructor Nname"
          value={this.state.instructorname}
          onChange={this.handleChange}
          required="required"
        />
        <br />
        <br />
        <br />
        <label htmlFor="coursename">Course Name</label>
        &nbsp;&nbsp;
        <input
          type="text"
          name="coursename"
          placeholder="Enter course name"
          value={this.state.coursename}
          onChange={this.handleChange}
          required="required"
        />
        <br />
        <br />
        <br />
        <label htmlFor="suggestions">Course Name</label>
        &nbsp;&nbsp;
        <input
          type="text"
          name="suggestions"
          placeholder="Give feedback.."
          value={this.state.suggestions}
          onChange={this.handleChange}
          required="required"
        />
        <br />
        <br />
        <div>Give star:</div> &nbsp;
        <select>
          {this.state.feedbackdropdown.map((feed) => (
            <option key={feed.value} value={feed.value}>
              {feed}
            </option>
          ))}
        </select>
        <div className="footer_1">
          <button type="button" className="button" onClick={this.registerClick}>
            Submit!
          </button>
        </div>
      </div>
    );
  }
}

export default Feeback;
