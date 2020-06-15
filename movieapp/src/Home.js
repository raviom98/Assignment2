import React from "react";
import image1 from "./rboot.png";
import image2 from "./reactlogo.png";
import image3 from "./responsive.png";
import Carousel from "react-bootstrap/Carousel";

// export const Home = () => (
//     <div>
//         <h1>
//             Home Page!
//         </h1>

//         <p> Home Sweet Home!</p>

//     </div>

// )

class Home extends React.Component {
  state = {};
  onStoriesClick(clientparam) {
    // alert(`hello, ${clientparam}`);
    this.setState({ clientStoriesClicked: true });
    this.setState({ client: clientparam });
  }

  render() {
    return (
      <div>
        <h1>Home Page!</h1>

        <Carousel style={{ width: "50%", align: "center" }}>
          <Carousel.Item>
            <div>
              <img
                className="d-block w-100"
                src={image1}
                onClick={() => this.onStoriesClick("client1")}
                style={{ width: "40px", height: "230px" }}
                alt="First slide"
              />
              Bootstrap is a potent front-end framework used to create modern
              websites and web apps. It's open-source and free to use, yet
              features numerous HTML and CSS templates for UI interface elements
              such as buttons and forms.
            </div>

            <Carousel.Caption>
              {/* <h3>Start with Bootstrap</h3> */}
              <p color="black">Bootstrap is best!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img
                className="d-block w-100"
                src={image2}
                style={{ width: "40px", height: "230px" }}
                alt="Third slide"
              />
              React. js is an open-source JavaScript library that is used for
              building user interfaces specifically for single-page
              applications. It's used for handling the view layer for web and
              mobile apps.
            </div>

            <Carousel.Caption>
              <p color="black">React is traesure!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {
              <div>
                <img
                  className="d-block w-100"
                  src={image3}
                  style={{ width: "40px", height: "230px" }}
                  alt="Third slide"
                />
                Responsive web design is an approach to web design that makes
                web pages render well on a variety of devices and window or
                screen sizes.
              </div>
            }

            <Carousel.Caption>
              <p color="black">Make it Responsive!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Home;
