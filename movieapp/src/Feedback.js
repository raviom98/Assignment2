import React from "react";
import { Redirect } from "react-router-dom";
import { FormControl } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

// .fieldname{
//   margin-left: 2em;
//   margin-top: 5px;
//   min-width: 18em;
//   height: 30px;
//   padding: 0px 8px;
//   font-size: 16px;
//   font-family: 'Times New Roman', Times, serif;
// }

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
      registerClicked: false,
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
    if (this.state.registerClicked) {
      return <Redirect push to={"/recorded"} />;
    }

    return (
      <div style={{ float: "left" }}>
        <h2>Rate the Course and Instructor</h2>
        <label className="fieldname" htmlFor="instructorname">
          Instructor Name
        </label>
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
        <label style={{ marginRight: 15 }} htmlFor="coursename">
          Course Name
        </label>
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
        <div style={{ float: "left" }}>Give star:</div> &nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select>
          {this.state.feedbackdropdown.map((feed) => (
            <option key={feed.value} value={feed.value}>
              {feed}
            </option>
          ))}
        </select>
        <br />
        <br />
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
