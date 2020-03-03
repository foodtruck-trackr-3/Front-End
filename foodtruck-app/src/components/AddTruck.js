import React, { useState } from 'react';
import { connect } from "react-redux";
import { postData } from '../actions';

const AddTruck = props => {

  const  [ truck, setTruck ]  = useState({
      truckName:"",
      owner: "",
      imageOfTruck: "",
      foodType: "",
      location: "",
      departureTime: "",
  });

  const handleChanges = e => {
    setTruck({ 
      ...truck,
      [e.target.name] : e.target.value 
    });
    // console.log("rd: SmurfForm: handleChanges: smurf object, ", smurf);
  }

  const handleAddTruck = e => {
    e.preventDefault();
    props.postData(truck);
    // console.log("rd: SmurfForm: handleAddSmurf, smurf object, ", smurf);
  }

  return (
      <div>
        <form onSubmit={handleAddTruck}>
          <input
            type="text"
            name="truckName"
            value={truck.truckName}
            onChange={handleChanges}
            placeholder="Your Truck's name"
          />
          <input
            type="text"
            name="owner"
            value={truck.owner}
            onChange={handleChanges}
            placeholder="Owner"
          />
          <input 
            type="url"
            name="imageOfTruck"
            value={truck.imageOfTruck}
            onChange={handleChanges}
            placeholder="Provide a URL to your truck photo"
          />
          <input 
            type="text"
            name="foodType"
            value={truck.foodType}
            onChange={handleChanges}
            placeholder="Type of food"
          />
          <input 
            type="text"
            name="location"
            value={truck.location}
            onChange={handleChanges}
            placeholder="Current location"
          />
          <input 
            type="text"
            name="departureTime"
            value={truck.departureTime}
            onChange={handleChanges}
            placeholder="Departure Time"
          />
          <button>Add Truck</button>
        </form>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  { postData }
)(AddTruck);