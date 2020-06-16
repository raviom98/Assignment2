import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./FooterPage.css";
import { MDBIcon, MDBBtn } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

class FooterPage extends Component {
  state = {};
  render() {
    return (
      // <div className="footerFix">
      //   <h5 className="title">Footer Content</h5>
      //   <p>
      //     Here you can use rows and columns here to organize your footer
      //     content.
      //   </p>

      //   <h5 className="title">Links</h5>
      //   <ul>
      //     <li className="list-unstyled">
      //       <a href="#!">Link 1</a>
      //     </li>
      //     <li className="list-unstyled">
      //       <a href="#!">Link 2</a>
      //     </li>
      //     <li className="list-unstyled">
      //       <a href="#!">Link 3</a>
      //     </li>
      //     <li className="list-unstyled">
      //       <a href="#!">Link 4</a>
      //     </li>
      //   </ul>
      // </div>
      <div className="footerFix">
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="4">
                <h5 className="title">Privacy Policy</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </MDBCol>
              <MDBCol md="6">
                <h5 className="title">
                  <b>Social Presence</b>
                </h5>
                <a
                  href="https://www.youtube.com/"
                  style={{ margin: 10 }}
                  className="youtube social"
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>

                <a
                  href="https://www.twitter.com/"
                  style={{ margin: 10 }}
                  className="twitter social"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>

                <a
                  href="https://www.instagram.com/"
                  style={{ margin: 10 }}
                  className="instagram social"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                {/* <MDBBtn size="lg" social="fb">
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>
                <MDBBtn size="lg" social="tw">
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>

                <MDBBtn size="lg" tag="a" floating social="tw">
                  <MDBIcon fab icon="twitter" />
                </MDBBtn> */}

                {/* <ul>
                  <li className="list-unstyled">
                    <a href="#!">Instagram</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Facebook</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Gmail</a>
                  </li>
                </ul> */}
              </MDBCol>
              <MDBCol md="6">
                <h5 className="title">Contact Us</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

export default FooterPage;
