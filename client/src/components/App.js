import React, { Component } from "react";
import "./App.css";
import NavBar from "./navbar";
import NewTweet from "./newtweet";
import AllTweets from "./AllTweets";
import { handleInitialData } from "../actions/tweets";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tweets: [] };
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  postTweet = content => {
    this.props.dispatch(handleAddTweet(content));
  };

  render() {
    const { loading } = this.props;
    console.log("Loading: ", loading);
    return (
      <div className="App">
        <NavBar />
        <main className="container">
          <NewTweet postTweet={this.postTweet} />
          {loading ? <div>loading</div> : <AllTweets />}
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ tweets }) => {
  return {
    loading: tweets ? false : true
  };
};

export default connect(mapStateToProps)(App);
