import React, { PureComponent } from "react";
import logo from "../logo.svg";
import "../App.css";

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSpin: 1,
      desSpin: "App-logo rotate",
      comment: "Welcome to React"
    };
  }
  handleClick = e => {
    if (this.state.isSpin === 1) {
      this.setState({ isSpin: 0 });
    } else {
      this.setState({ isSpin: 1 });
    }
  };
  render() {
    if (this.state.isSpin === 1) {
      this.setState({ desSpin: "App-logo rotate" });
      this.setState({ comment: "Welcome to React" });
    } else {
      this.setState({ desSpin: "App-logo" });
      this.setState({ comment: "Stop" });
    }
    return (
      <div>
        <img
          onClick={this.handleClick}
          src={logo}
          className={this.state.desSpin}
          alt="logo"
        />
        <h1 className="App-title"> {this.state.comment}</h1>
      </div>
    );
  }
}

export default Header;
