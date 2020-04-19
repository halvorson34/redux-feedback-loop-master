import React, { Component } from "react";
import { connect } from "react-redux";

class SupportPage extends Component {
  state = {
    supportRating: "",
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
      type: "SET_SUPPORT_RATING",
      payload: this.state,
    });
    this.props.history.push("/comments");
  };

  render() {
    console.log(this.props.store);

    return (
      <div>
        <h1>How well are you being supported?</h1>
        <form>
          <div id="inputField">
            <label for="supportInput">Support?</label>
            <br />
            <input
              onChange={this.onInputChange("supportRating")}
              placeholder="1 to 5"
              type="text"
              id="supportInput"
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

export default connect()(SupportPage);
