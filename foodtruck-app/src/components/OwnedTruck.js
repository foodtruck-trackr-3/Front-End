import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { delTruck, getMyTrucks } from '../actions';



const OwnedTruck = props => {

    const deleteTruck = item => {
        props.delTruck(item);   
    }

    // const getNewTrucks = () => {
    //     getMyTrucks();
    // }

    useEffect(() => {
        getMyTrucks();
     }, []);


    return (
        props.trucks.map((truck) => {
          return <div key={truck.id}>
            <div>{truck.truckName}</div>
            <div>{truck.foodType}</div>
            <div>{truck.location}</div>
            <Link to={`/update-truck/${truck.id}`}>
                Edit Truck
            </Link>
            <button onClick={e => {
                e.stopPropagation();
                deleteTruck(truck);
            }}>
                Delete Truck
            </button>
            </div>
        })
    )
}

const mapStateToProps = state => {
    return {

    }
  }
  
  export default connect(
    mapStateToProps,
    { delTruck, getMyTrucks }
  )(OwnedTruck);