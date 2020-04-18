import React, { Component } from "react";
import { connect } from "react-redux";

class FeelingPage extends Component {
  state = {
    feelingRating: "",
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
    this.props.dispatch({ type: "SET_FEELING_RATING", payload: this.state });
    this.props.history.push("/comprehension");
  };

  render() {
    console.log(this.props.store);
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <label for="feelingInput">Feeling?</label>
        <input
          onChange={this.onInputChange("feelingRating")}
          placeholder="1 to 5"
          type="text"
          id="feelingInput"
        />
        <button onClick={this.onNextClick}>NEXT</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(FeelingPage);
