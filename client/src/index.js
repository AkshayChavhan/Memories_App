import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { Provider } from 'react-redux';  //allow access store from anywhere
import { createStore, applyMiddleware, compose } from "redux";
// configureStore
import thunk from 'redux-thunk';
import reducers from "./reducers/index";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root"));