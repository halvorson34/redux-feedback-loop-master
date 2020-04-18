import React, { Component } from "react";
import { connect } from "react-redux";

class ReviewPage extends Component {
  render() {
    return (
      <div>
        <p>ReviewPage</p>
      </div>
    );
  }
}

export default connect()(ReviewPage);
