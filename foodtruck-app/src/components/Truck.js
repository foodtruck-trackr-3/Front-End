import React from 'react';

const Truck = ({trucks}) => {
    return (
        trucks.map((truck) => {
          return <div>
              <div>{truck.truckName}</div>
              <div>{truck.imageOfTruck}</div>
              <div>{truck.foodType}</div>
              <div>{truck.location}</div>
              <div>{truck.departureTime}</div>
              </div>
        })
    )
}

export default Truck 