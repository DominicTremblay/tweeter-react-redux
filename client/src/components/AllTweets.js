import React from "react";
import "./AllTweets.css";
import Article from "./Article";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const AllTweets = ({ tweets }) => {
  const articles = tweets ? (
    tweets.map(tweet => {
      return (
        <Article key={tweet._id} user={tweet.user} content={tweet.content} />
      );
    })
  ) : (
    <div>Loading</div>
  );
  return <section id="all-tweets">{articles}</section>;
};

AllTweets.propTypes = {
  tweets: PropTypes.array
};

const mapStateToProps = ({ tweets }) => {
  return {
    tweets
  };
};

export default connect(mapStateToProps)(AllTweets);
