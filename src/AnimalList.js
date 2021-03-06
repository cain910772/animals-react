import React, { Component } from 'react'


export default class AnimalList extends Component {
    render () {
        return (
            <section className="animals">
            <h3>Our Lovley Animals</h3>
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {animal.name}
                                <a href="./animals"
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}





