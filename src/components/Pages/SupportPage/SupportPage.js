import React, { Component } from "react";
import { connect } from "react-redux";

class SupportPage extends Component {
  state = {
    supportRating: "",
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  onNextClick = (event) => {
    this.props.dispatch({
      type: "SET_SUPPORT_RATING",
      payload: this.state,
    });
    this.props.history.push("/comments");
  };

  onBackClick = (event) => {
    this.props.history.push("/comprehension");
  };

  render() {
    console.log(this.props.store);

    return (
      <div>
        <h1>How well are you being supported?</h1>
        <form>
          <section id="inputField">
            <label for="feedbackInput">Support?</label>
            <br />
            <input
              onChange={this.onInputChange("supportRating")}
              placeholder="1 to 5"
              type="text"
              id="feedbackInput"
              required
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

export default connect()(SupportPage);
