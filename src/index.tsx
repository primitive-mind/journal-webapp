import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLoguxCreator } from "@logux/redux";
import { IndexedStore } from "@logux/client";
import reducer from './reducers'

const initialState = { value: '' }

const createStore = createLoguxCreator({
  store: new IndexedStore(),
  subprotocol: "1.0.0",
  server: "ws://localhost:31337",
  userId: "asedsami",
  token: ""
});

const store = createStore(
	reducer,
  composeWithDevTools()
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__?.()
// )

store.client.start();

ReactDOM.render(

	<React.StrictMode>
    <Provider store={store}>
	    <App />
    </Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
