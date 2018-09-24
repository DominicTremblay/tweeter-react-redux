import { RECEIVE_TWEETS, ADD_TWEET } from "../actions/tweets";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        tweets: action.tweets
      };
    case ADD_TWEET:
      return {
        ...state,
        tweets: [action.tweet, ...state.tweets]
      };

    default:
      return state;
  }
}
