import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { putData } from '../actions';

const initialItem = {
    truckName:"",
    foodType: "",
    location: "",
}

const UpdateTruck = props => {

  const  [ item, setItem ]  = useState(initialItem);

  useEffect(() => {
    const selectedItem = props.trucks.find(item => {
        return `${item.id}` === props.match.params.id;
    });
    console.log("rd: UpdateTruck, selectedItem", selectedItem);
    if (selectedItem) {
        setItem(selectedItem)
    }
  }, [props.trucks, props.match.params.id])

  const handleChanges = e => {
    setItem({ 
      ...item,
      [e.target.name] : e.target.value 
    });
  }

  const handleUpdateTruck = e => {
    e.preventDefault();
    props.putData(item);
  }

  return (
      <div>
        <form onSubmit={handleUpdateTruck}>
          <input
            type="text"
            name="truckName"
            value={item.truckName}
            onChange={handleChanges}
            placeholder="Your Truck's name"
          />
          {/* <input 
            type="url"
            name="imageOfTruck"
            value={truck.imageOfTruck}
            onChange={handleChanges}
            placeholder="Provide a URL to your truck photo"
          /> */}
          <input 
            type="text"
            name="foodType"
            value={item.foodType}
            onChange={handleChanges}
            placeholder="Type of food"
          />
          <input 
            type="text"
            name="location"
            value={item.location}
            onChange={handleChanges}
            placeholder="Current location"
          />
          {/* <input 
            type="text"
            name="departureTime"
            value={truck.departureTime}
            onChange={handleChanges}
            placeholder="Departure Time"
          /> */}
          <button>Update Truck</button>
        </form>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    trucks: state.trucks
  }
}

export default connect(
  mapStateToProps,
  { putData }
)(UpdateTruck);