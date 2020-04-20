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

  onBackClick = (event) => {
    this.props.history.push("/");
  };

  render() {
    console.log(this.props.store);

    return (
      <div>
        <h1>How well are you understanding the content?</h1>
        <form>
          <section id="inputField">
            <label for="feedbackInput">Understanding?</label>
            <br />
            <input
              onChange={this.onInputChange("comprehensionRating")}
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

export default connect()(ComprehensionPage);
