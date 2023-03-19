import React, { Component } from "react";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";
import Others from "./components/Others";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    // this.onDivClicked = this.onDivClicked.bind(this);
  }

  // onDivClicked() {
  //   console.log('Name has been clicked');
  // }

  render() {
    return (
      <div className="container">
        <div className="nav">Create Your CV</div>
        <div className="cv-template">
          <Contact />
          <hr style={{ color: 'rgb(20, 20, 20)' }} />
          <Summary />
          <Skills />
          <Work />
          <Education />
          <Others />
        </div>
        <div className="footer">Made By Jing</div>
      </div>
    );
  }
}

export default App;
