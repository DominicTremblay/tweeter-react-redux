import { receiveTweets } from "./tweets";

export function handleInitialData() {
  return dispatch => {
    return fetch("/tweets")
      .then(res => res.json())
      .then(tweets => dispatch(receiveTweets(tweets)));
  };
}
