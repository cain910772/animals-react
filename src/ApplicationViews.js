import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from "./AnimalList"
import LocationList from './LocationList'
import EmployeeList from './EmployeeList'
import OwnersList from './OwnersList'
import Login from "./Login"




export default class ApplicationViews extends Component {

// Check if credentials are in local storage
isAuthenticated = () => localStorage.getItem("credentials") !== null




    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    deleteAnimal = id => {
        fetch(`http://localhost:8088/animals/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:8088/animals`))
            .then(e => e.json())
            .then(animals => this.setState({
                animals: animals
            }))
    }

    deleteEmployee = (id) => {
        fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            // .then(() => fetch(`http://localhost:8088/employees`))
            // .then(e => e.json())
            .then(employees => this.setState({
                employees: employees
            }))
    }

    deleteOwners = id => {
        fetch(`http://localhost:8088/owners/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:8088/owners`))
            .then(e => e.json())
            .then(owners => this.setState({
                owners: owners
            }))
        }
    




    componentDidMount() {
        const newState = {}

        fetch("http://localhost:8088/locations")
            .then(r => r.json())
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:8088/animals")
                .then(r => r.json()))
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:8088/employees")
                .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:8088/owners")
                .then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
        console.log(newState)
    }



    render() {
        return (
            <div className="navbar2">
                <React.Fragment>
                    <Route path="/login" component={Login} />

                    <Route exact path="/" render={(props) => {
                        return <LocationList locations={this.state.locations} />
                    }} />
                    <Route exact path="/animals" render={(props) => {
                        return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                    }} />
                    <Route exact path="/employees" render={(props) => {
                        return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                    }} />
                    <Route exact path="/owners" render={(props) => {
                        return <OwnersList deleteOwners={this.deleteOwners} owners={this.state.owners} />
                    }} />

                </React.Fragment>
            </div>
        )
    }
}