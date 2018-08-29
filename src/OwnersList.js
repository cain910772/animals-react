import React, { Component } from 'react'



export default class OwnersList extends Component {
    render() {
        console.log(this.props.owners)
        return (
            <div className="Owners">
                <h1>Our Great Owners</h1>
                {
                    this.props.owners.map(owner =>
                    <div id={`owner--${owner.id}`} key={owner.id}>
                       <h4>{owner.Name} </h4>
                       <a href="./OwnersList"
                                    onClick={() => this.props.deleteOwners(owner.id)}
                                    className="card-link-Owner">Delete</a>
                    </div>
                    )
                }
            </div>
        );
    }
}