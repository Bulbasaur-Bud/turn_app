import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//React Version Before 18
ReactDOM.render(<App />, document.getElementById("root"));

//Version 18
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
