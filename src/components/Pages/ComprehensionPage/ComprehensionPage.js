import React, { Component } from "react";
import { connect } from "react-redux";

class ComprehensionPage extends Component {
  state = {
    comprehensionRating: "",
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
      type: "SET_COMPREHENSION_RATING",
      payload: this.state,
    });
    this.props.history.push("/support");
  };

  render() {
    console.log(this.props.store);

    return (
      <div>
        <h1>How well are you understanding the content?</h1>
        <form>
          <div id="inputField">
            <label for="comprehensionInput">Understanding?</label>
            <br />
            <input
              onChange={this.onInputChange("comprehensionRating")}
              placeholder="1 to 5"
              type="text"
              id="comprehensionInput"
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

export default connect()(ComprehensionPage);
