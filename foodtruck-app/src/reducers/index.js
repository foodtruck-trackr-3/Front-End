import { FETCH_DATA, UPDATE_TRUCKS, ADD_TRUCK, SET_ERROR } from "../actions";

export const initialState = {
    trucks: [{
      id: 0,
      truckName:"",
      role: "operator",
      imageOfTruck: "",
      foodType: "",
      location: "",
      departureTime: "",
      customerRatings: [],
      customerRatingAvg: 0,
      menu: {
          itemName: "",
          itemDescription: "",
          itemPhotos: [],
          itemPrice: 0,
          customerRatings: [],
          customerRatingAvg: 0
      }
    }],
    error: ""
  }

  export const trucksReducer = (state = initialState, action) => {
    switch(action.type) {
      case FETCH_DATA: 
        return {
          ...state,
          trucks: []
        }
        case UPDATE_TRUCKS:
          return {
            ...state,
            trucks: action.payload,
          }
        case ADD_TRUCK:
          return {
            ...state,
            trucks: [...state.trucks, action.payload]
          }
        case SET_ERROR:
          return {
            ...state,
            error: action.payload
          }
  
      default: 
        return state
    }
  }