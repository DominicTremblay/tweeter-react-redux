export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const ADD_TWEET = "ADD_TWEET";

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets: tweets
  };
}

export function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet
  };
}

export function handleAddTweet(tweet) {
  return dispatch => {
    fetch("http://localhost:8080/tweets", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({ text: tweet })
    })
      .then(response => response.json())
      .then(tweet => {
        dispatch(addTweet(tweet));
      })
      .catch(error => console.error(`Fetch Error =\n`, error));
  };
}
