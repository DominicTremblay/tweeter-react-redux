import React, { Component } from "react";
import "./NewTweet.css";
import PropTypes from "prop-types";

class NewTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxChar: 140,
      charLeft: 140
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const counter = e.target.lastElementChild;
    const content = e.target.text.value;
    if (content) {
      this.props.postTweet(content);
      e.target.text.value = "";
      e.target.text.focus();
      counter.textContent = this.state.maxChar;
    } else {
      document.querySelector(".error-msg").innerText = "Please, enter a tweet!";
      e.target.text.focus();
    }
  };

  charCount = e => {
    const txtArea = e.target;
    const contentLength = txtArea.value.length;
    const charLeft = this.state.maxChar - contentLength;
    const counter = e.target.nextElementSibling.nextElementSibling;
    this.setState({ charLeft });
    charLeft <= 0
      ? counter.classList.add("error-msg")
      : counter.classList.remove("error-msg");
  };

  render() {
    return (
      <section className="new-tweet">
        <h2>Compose Tweet</h2>
        <div className="error-msg" />
        <form className="clearfix" onSubmit={this.handleSubmit}>
          <textarea
            name="text"
            placeholder="What are you humming about?"
            onKeyUp={this.charCount}
          />
          <input type="submit" value="Tweet" />
          <span className="counter">{this.state.charLeft}</span>
        </form>
      </section>
    );
  }
}

NewTweet.propTypes = {
  postTweet: PropTypes.func.isRequired
};

export default NewTweet;
