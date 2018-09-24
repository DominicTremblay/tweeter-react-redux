import React from "react";
import "./Article.css";
import PropTypes from "prop-types";

const Article = props => {
  const {
    user: {
      name,
      handle,
      avatars: { regular }
    },
    content: { text }
  } = props;

  const hover = e => {
    e.currentTarget.style.opacity = 1;
    e.currentTarget.lastElementChild.lastElementChild.style.opacity = 1;
  };

  const hoverReset = e => {
    e.currentTarget.style.opacity = 0.6;
    e.currentTarget.lastElementChild.lastElementChild.style.opacity = 0;
  };

  return (
    <article className="tweet" onMouseEnter={hover} onMouseLeave={hoverReset}>
      <header className="clearfix">
        <img src={regular} alt="avatar" />
        <h3>{name}</h3>
        <h4>{handle}</h4>
      </header>

      <div className="content">{text}</div>

      <footer className="clearfix">
        <p className="time-stamp">10 days ago</p>
        <div className="icons">
          <i className="fas fa-flag" />
          <i className="fas fa-heart" />
          <i className="fas fa-retweet" />
        </div>
      </footer>
    </article>
  );
};

Article.propTypes = {
  content: PropTypes.shape({
    text: PropTypes.string
  }),
  user: PropTypes.shape({
    name: PropTypes.string,
    handle: PropTypes.string,
    avatars: PropTypes.shape({
      regular: PropTypes.string
    })
  })
};

export default Article;
