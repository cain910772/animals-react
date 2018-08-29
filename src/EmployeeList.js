import React, { Component } from 'react'


export default class EmployeeList  extends Component {
    render() {
        return (
            <div className="employees">
                <h2>Our Amazing Employees</h2>
                {
                    this.props.employees.map(employee =>
                    <div id={`employee--${employee.id}`} key={employee.id}>
                       <h4>{employee.name}</h4>
                       <a href="EmployesList"
                                    onClick={() => this.props.deleteEmployee(employee.id.name)}
                                    className="card-link-Employee">Delete</a>
                    </div>
                    )
                }
            </div>
        );
    }
}
