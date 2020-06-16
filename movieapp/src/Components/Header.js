import React, { Component } from "react";
import limage from "./mainlogo.jpg";

class Header extends React.Component {
  state = {};
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <h2>Stacklearner</h2>
            </td>
            <br />
            <br />
            <td>
              <img
                src={limage}
                style={{
                  width: "60px",
                  height: "60px",
                }}
                alt="logo image"
              ></img>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Header;
