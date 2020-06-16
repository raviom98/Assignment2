import React from "react";
import "./styleforcard.css";

const course = (props) => (
  <div className="course">
    <p>
      <strong>Course Name: </strong>
      {props.name}
    </p>
    <p>
      <strong>Technology: </strong>
      {props.tech}
    </p>
    <p>
      <strong>Course Instructor: </strong>
      {props.courseinstructor}
    </p>
    <p>
      <strong>Course Fees: </strong>
      {props.coursefees}
    </p>
  </div>
);

export default course;
