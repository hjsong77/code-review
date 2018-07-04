import React, { Component } from "react";
import moment from "moment";
import "moment/locale/ko";
moment.locale("ko");
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
    };
    this.nTimer = setInterval(this.handleTick, 1000);
  }
  handleTick = () => {
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <div>현재시간:{moment().format("YYYY-MM-DD A hh:mm:ss")}</div>
        <div>{moment(this.props.expireDate).fromNow()} 강의 종료합니다. </div>
      </div>
    );
  }
}

export default Timer;
