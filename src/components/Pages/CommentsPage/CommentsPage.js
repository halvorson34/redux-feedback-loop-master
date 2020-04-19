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

  render() {
    console.log(this.props.store);

    return (
      <div>
        <h1>Any comments you want to leave?</h1>
        <form>
          <div id="inputField">
            <label for="commentsInput">Comments?</label>
            <br />
            <input
              onChange={this.onInputChange("commentsInput")}
              placeholder="whats crack-a-lackin!?"
              type="text"
              id="commentsInput"
              required
            />
          </div>
          <div id="buttonField">
            <button onClick={this.onNextClick}>NEXT</button>
          </div>
        </form>
      </div>
    );
  }
}

//const mapStoreToProps = (store) => ({ store });

export default connect()(CommentsPage);
