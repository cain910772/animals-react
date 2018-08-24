import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"
import Kennel from "./components/Kennel"
import ApiCall from "./Data.js"

import registerServiceWorker from "./registerServiceWorker";
import "./index.css";


ReactDOM.render(<Kennel />, document.querySelector("#root"));
ReactDOM.render(<ApiCall />, document.querySelector("#tryThis"));

registerServiceWorker();