# Tweet App with React and Redux

Our Tweeter App has been converted to React. However, we're going one step further by using Redux to manage the state of our app.

## Dependencies that we need for Redux

- redux
- react-redux
- redux-logger
- redux-thunk

## Redux DevTools

Redux DevTools is a chrome extension. It gives you a better UI to see what's going on with the Redux store.

[ReduxDevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)


## Folder Structure

In the src folder, we're going to have the following subfolders:

- components
- actions
- reducers

## Create the Redux Store

- We need to create the Redux store in index.js
- We are using 2 middleware:

1. logger from redux-logger => for console.logs of the state
2. thunk from redux-thunk => for running functions returned by action creators

- import { createStore, applyMiddleware } from "redux";
- import logger from "redux-logger";
- import reducer from "./reducers/tweets";
- import thunk from "redux-thunk";
- Create the Redux store:

const store = createStore(reducer, applyMiddleware(thunk, logger))

## Give Any Component Access to the Store

- We'll use Provider from react-redux (React Context API)
- import { Provider } from "react-redux";
- The Provider component will wrap the App component and pass the store to it:

    `ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    );`

## Create the Action Creators for Loading Tweets

- Create receiveTweet action in actions/tweets.js
- Create the action handleInitalData in actions/tweets.js
- handleInitialData takes care of the async call to the database

## Create the Reducer Function 

- The reducer function tells how to update the state
- Switch case on the action type
- Add the reducer function in reducers/tweets.js

## Dispatch the Action

- For something to happen we need to call dispatch (provided by the Redux store)
- We need to call dispatch in componentDidMount of App

### Connecting the App Component to the Store

- In order to access dispatch and properties in the Redux store, we need to connect the component
- We need to use connect from reac-redux
- import { connect } from "react-redux";
- We'll use connect in the export and this will give us access to dispatch:

  `export default connect()(App);`

- We can call handleInitialData with dispatch

  `componentDidMount() { this.props.dispatch(handleInitialData()); }`
 
* Our tweets should now be added on to the store

### Connecting AllTweets to the Store

- We use connect to connect the component to the store
  
  `export default connect()(AllTweets);`

- We can also extract what properties on the state that we need on the component:

    const mapStateToProps = ({ tweets }) => {
      return {
        tweets
      };
    };

    export default connect(mapStateToProps)(AllTweets);

- tweets is then available to AllTweets through props (this.props.tweets)

## Create the Action Creators for Adding a Tweet

- Add a addTweet action in actions/tweets
- Add handleAddTweet to tackle the async call to the database

## Update the Reducer Function

- We need to update the reducer function to deal with ADD_TWEET

## Dispatch the Action 

- We need to dispatch the handleAddTweet action in postTweet of App.js


