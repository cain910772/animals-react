import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import EmployeeList from "./EmployeeList.js"



class Kennel extends Component {


    // state = {
    //     employees: this.employeesFromAPI,
    //     locations: this.locationsFromAPI
    // }

    render() {
        return (
            <article className="kennel">
                {/* <LocationList locations={this.state.locations} /> */}
                {/* <EmployeeList employees={this.state.employees} /> */}
            </article>
        )
    }
}

export default Kennel