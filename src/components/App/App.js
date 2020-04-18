import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import CommentsPage from "../Pages/CommentsPage/CommentsPage";
import ComprehensionPage from "../Pages/ComprehensionPage/ComprehensionPage";
import FeelingPage from "../Pages/FeelingPage/FeelingPage";
import ReviewPage from "../Pages/ReviewPage/ReviewPage";
import SuccessPage from "../Pages/SuccessPage/SuccessPage";
import SupportPage from "../Pages/SupportPage/SupportPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <br />

          <Route exact path="/" component={FeelingPage} />
          <Route exact path="/comprehension" component={ComprehensionPage} />
          <Route exact path="/support" component={SupportPage} />
          <Route exact path="/comments" component={CommentsPage} />
          <Route exact path="/review" component={ReviewPage} />
          <Route exact path="/success" component={SuccessPage} />
        </Router>
      </div>
    );
  }
}

export default App;
