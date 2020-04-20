import React, { Component } from "react";
import { connect } from "react-redux";

class CommentsPage extends Component {
  state = {
    commentsInput: "",
  };

  onInputChange = (input) => (event) => {
    this.setState(
      {
        [input]: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onNextClick = (event) => {
    this.props.dispatch({
      type: "SET_COMMENTS_INPUT",
      payload: this.state,
    });
    this.props.history.push("/review");
  };

  onBackClick = (event) => {
    this.props.history.push("/support");
  };

  render() {
    console.log(this.props.store);

    return (
      <div>
        <h1>Any comments you want to leave?</h1>
        <form>
          <section id="inputField">
            <label for="feedbackInput">Comments?</label>
            <br />
            <input
              onChange={this.onInputChange("commentsInput")}
              placeholder="whats crack-a-lackin!?"
              type="text"
              id="feedbackInput"
            />
          </section>
          <section id="buttonField">
            <button onClick={this.onBackClick} id="backButton">
              BACK
            </button>
            <button onClick={this.onNextClick} id="nextButton">
              NEXT
            </button>
          </section>
        </form>
      </div>
    );
  }
}

//const mapStoreToProps = (store) => ({ store });

export default connect()(CommentsPage);
