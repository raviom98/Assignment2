import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import { NotAMatch } from "./NotAMatch";
import { Layout } from "./Components/Layout";
import { NavigationBar } from "./Components/NavigationBar";
import { Search } from "./Components/Search";
import { Profile } from "./Components/Profile";
import { MyBookings } from "./Components/MyBookings";
import { Offers } from "./Components/Offers";
import { HelpAndSupport } from "./Components/HelpAndSupport";
import { AboutUs } from "./Components/AboutUs";
import FooterPage from "./Components/FooterPage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Feedback from "./Feedback";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/profile" component={Profile} />
              <Route path="/mybookings" component={MyBookings} />
              <Route path="/offers" component={Offers} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />

              <Route path="/helpandsupport" component={HelpAndSupport} />
              <Route path="/aboutus" component={AboutUs} />
              <Route path="/feedback" component={Feedback} />

              <Route component={NotAMatch} />
            </Switch>
          </Router>
        </Layout>
        <FooterPage />
      </React.Fragment>
    );
  }
}
export default App;
