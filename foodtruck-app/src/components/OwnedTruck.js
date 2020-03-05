import React from 'react';
import { Link } from "react-router-dom";

const OwnedTruck = props => {
    return (
        props.trucks.map((truck) => {
          return <div key={truck.id}>
            <div>{truck.truckName}</div>
            <div>{truck.foodType}</div>
            <div>{truck.location}</div>
            <Link to={`/update-truck/${truck.id}`}>
                Edit Truck
            </Link>
            <button>
                Delete Truck
            </button>
            </div>
        })
    )
}

export default OwnedTruck 