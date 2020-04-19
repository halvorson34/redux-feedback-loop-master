import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class ReviewPage extends Component {
  submitFeedback = (event) => {
    const feedback = {
      feeling: this.props.store.feelingReducer.feelingRating,
      understanding: this.props.store.comprehensionReducer.comprehensionRating,
      support: this.props.store.supportReducer.supportRating,
      comments: this.props.store.commentsReducer.commentsInput,
    };

    axios
      .post("/feedback", feedback)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/success");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  render() {
    return (
      <div>
        <h1>Review Your Feedback</h1>
        <div>
          <h4>Feelings: {this.props.store.feelingReducer.feelingRating}</h4>
          <h4>
            Understanding:{" "}
            {this.props.store.comprehensionReducer.comprehensionRating}
          </h4>
          <h4>Support: {this.props.store.supportReducer.supportRating}</h4>
          <h4>Comments: {this.props.store.commentsReducer.commentsInput}</h4>
          <button onClick={this.submitFeedback}>SUBMIT</button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ReviewPage);
