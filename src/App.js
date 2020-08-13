import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import HomeView from "./Views/HomeView";

import "./App.css"
import "./lux.css";
import Header from "./Components/Header/Header";
import CvView from "./Views/CvView";
import Footer from "./Components/Footer/Footer";
import DisclaimerView from "./Views/DisclaimerView";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'TicketShare App',
      routes: [
        {component: HomeView, path: '/home', exact: true},
        {component: CvView, path: '/CV', exact: true},
        {component: DisclaimerView, path: '/Disclaimer', exact: true},

      ],
    };
  }

  render() {
    return (

        <div className="content">
          <Router>
            <Header/>
              <Switch>
                //...route == route.component = component,
                route.path = path,
                route.exact= exact
                {this.state.routes.map(
                    (route, i) => (
                        <Route key={i} {...route}/>))}
              </Switch>
            <Footer/>
          </Router>
        </div>
    );
  }
}
