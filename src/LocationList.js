import React, {Component} from 'react';
// import Kennel from "./Kennel";
// import SouthNashKennel from "./SouthNashKennel";



export default class LocationList extends Component {
    render() {
        return (
            <div className="locations">
                <h4>Our Locations</h4>
                {
                    this.props.locations.map(location =>
                    <div id={`location--${location.id}`} key={location.id}>
                       <h4>{location.name}</h4>
                       <p>{location.address}</p>
                    </div>
                    )
                }
            </div>
        );
    }
}

