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
        <iframe
          src="https://giphy.com/embed/OHZ1gSUThmEso"
          width="480"
          height="313"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/college-gif-finals-OHZ1gSUThmEso">
            via GIPHY
          </a>
        </p>
        <button onClick={this.onNewFeedbackClick}>Leave New Feedback</button>
      </div>
    );
  }
}

export default connect()(SuccessPage);
