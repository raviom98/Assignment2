import React, { Component } from "react";
//import Aux from "./hoc/Auxilary";
import Aux from "react-aux";
import Course from "./Course";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

class Search extends React.Component {
  state = {
    course: [
      {
        id: "1",
        name: "Web development",
        tech: "description of web development",
        courseinstructor: "Ravi",
      },
      {
        id: "2",
        name: "Advance software development",
        tech: "description of Advance software development",
        courseinstructor: "Ravi",
        coursefees: "$200",
      },
      {
        id: "3",
        name: "Cloud computing",
        tech: "description of Cloud computing",
        courseinstructor: "Ravi",
        coursefees: "$300",
      },
      {
        id: "4",
        name: "Communication Skills",
        tech: "description of Communication Skills",
        courseinstructor: "Ravi",
        coursefees: "$400",
      },
      {
        id: "5",
        name: "Data warehousing",
        tech: "description of Data warehousing",
        courseinstructor: "Ravi",
        coursefees: "$500",
      },
      {
        id: "6",
        name: "Deep learning",
        tech: "description of Deep learning",
        courseinstructor: "Ravi",
        coursefees: "$200",
      },
    ],
    searchValue: "",
  };

  onTagsChange = (event, values) => {
    this.setState(
      {
        searchValue: values,
      },
      () => {}
    );
  };

  courseHandler = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  render() {
    const courseVal = [...this.state.course];

    let searchCourse = Object.keys(courseVal)
      .map((tKey) => {
        return [...Array(courseVal[tKey])].map((j, i) => {
          return j.name === this.state.searchValue ? (
            <Course
              name={j.name}
              tech={j.tech}
              courseinstructor={j.courseinstructor}
              coursefees={j.coursefees}
            />
          ) : null;
        });
      })
      .reduce((arr, ele) => {
        return arr.concat(ele);
      }, []);

    return (
      <Aux style={{ textAlign: "center" }}>
        <center>
          <h1>Search Course</h1>
          <Autocomplete
            id="free-solo-demo"
            onChange={this.onTagsChange}
            options={this.state.course.map((option) => option.name)}
            renderInput={(params) => (
              <TextField
                {...params}
                type="text"
                value={this.state.searchValue}
                onChange={this.courseHandler}
                label="Search here for courses"
                margin="normal"
                variant="filled"
                style={{ width: 1000 }}
              />
            )}
          />
        </center>
        {searchCourse}
      </Aux>
    );
  }
}

export default Search;
