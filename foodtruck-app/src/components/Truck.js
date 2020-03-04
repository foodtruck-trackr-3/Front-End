import React from 'react';

const Truck = ({trucks}) => {
    return (
        trucks.map((truck) => {
          return <div key={truck.id}>
              <div>{truck.truckName}</div>
              <div>{truck.foodType}</div>
              <div>{truck.location}</div>
              </div>
        })
    )
}

export default Truck 