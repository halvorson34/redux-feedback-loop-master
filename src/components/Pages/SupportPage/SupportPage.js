import React, { Component } from "react";
import { connect } from "react-redux";

class SupportPage extends Component {
  render() {
    return (
      <div>
        <p>SupportPage</p>
      </div>
    );
  }
}

export default connect()(SupportPage);
