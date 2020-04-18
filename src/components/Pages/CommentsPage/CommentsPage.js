import React, { Component } from "react";
import { connect } from "react-redux";

class CommentsPage extends Component {
  render() {
    return (
      <div>
        <p>CommentsPage</p>
      </div>
    );
  }
}

export default connect()(CommentsPage);
