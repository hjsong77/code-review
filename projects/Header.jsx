import React, { PureComponent } from "react";
import logo from "../logo.svg";
import "../App.css";

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSpin: true
    };
  }
  handleClick = e => {
    if (this.state.isSpin === true) {
      this.setState({
        isSpin: false
      });
    } else {
      this.setState({
        isSpin: true
      });
    }
  };
  render() {
    return (
      <div>
        <img
          onClick={this.handleClick}
          src={logo}
          className={this.state.isSpin ? "App-logo rotate" : "App-logo"}
          alt="logo"
        />
        <h1 className="App-title">
          {" "}
          {this.state.isSpin ? "Welcome to React" : "Stop"}
        </h1>
      </div>
    );
  }
}

export default Header;
