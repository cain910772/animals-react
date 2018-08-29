import React, { Component } from "react"
import ReactDOM from "react-dom";
import Kennel from "./Kennel"
import ApplicationsViews from"./ApplicationViews"
import EmployeeList from "./EmployeeList";
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div>
          <Login />
      <EmployeeList />
      </div>
    );
  }
}

export default App;
