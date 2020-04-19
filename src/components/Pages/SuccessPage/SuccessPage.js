import React, { Component } from "react";
import { connect } from "react-redux";

class SuccessPage extends Component {
  onNewFeedbackClick = (event) => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Thank You!</h1>
        <button onClick={this.onNewFeedbackClick}>Leave New Feedback</button>
      </div>
    );
  }
}

export default connect()(SuccessPage);
