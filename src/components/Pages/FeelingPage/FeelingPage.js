import React, { Component } from "react";
import { connect } from "react-redux";
import "./FeelingPage.css";

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
        <form>
          <div id="inputField">
            <label for="feelingInput">Feeling?</label>
            <br />
            <input
              onChange={this.onInputChange("feelingRating")}
              placeholder="1 to 5"
              type="text"
              id="feelingInput"
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

export default connect()(FeelingPage);
