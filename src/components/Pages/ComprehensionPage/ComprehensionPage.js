import React, { Component } from "react";
import { connect } from "react-redux";

class ComprehensionPage extends Component {
  render() {
    return (
      <div>
        <p>ComprehensionPage</p>
      </div>
    );
  }
}

export default connect()(ComprehensionPage);
