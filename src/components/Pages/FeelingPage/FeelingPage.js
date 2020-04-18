import React, { Component } from "react";
import { connect } from "react-redux";

class FeelingPage extends Component {
  render() {
    return (
      <div>
        <p>FeelingPage</p>
      </div>
    );
  }
}

export default connect()(FeelingPage);
