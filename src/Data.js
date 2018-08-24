import React, { Component } from "react"
import ReactDOM from "react-dom";

class ApiCall extends Component {
    constructor() {
    super();
    this.state ={
        employees:[],

    };
    console.log("employees");
}




componentDidMount (){
    fetch("http://localhost:8088/employeesFromAPI")
    .then( results=>{
       return results.json();
    }).then (data =>{
        let employees = data;
      console.log(employees);
    })
}


render() {
    return (
        document.querySelector("#hello")

    )}
}

export default ApiCall

