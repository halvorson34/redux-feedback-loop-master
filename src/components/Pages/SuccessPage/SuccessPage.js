import React, { Component } from "react";
import { connect } from "react-redux";

class SuccessPage extends Component {
  render() {
    return (
      <div>
        <p>SuccessPage</p>
      </div>
    );
  }
}

export default connect()(SuccessPage);
