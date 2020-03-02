// import { FETCH_DATA, UPDATE_SMURFS, SET_ERROR, ADD_SMURF } from "../actions"

export const initialState = {
    truck: [{
      id: 0,
      imageOfTruck: "",
      cuisineType: "",
      customerRatings: [],
      customerRatingAvg: 0,
      menu: {
          itemName: "",
          itemDescription: "",
          itemPhotos: [],
          itemPrice: 0,
          customerRatings: [],
          customerRatingAvg: 0
      }, 
      currentLocation: {
          location:"",
          departureTime: ""
      }
    }],
    error: ""
  }

  export const trucksReducer = (state = initialState, action) => {
    switch(action.type) {
    //   case FETCH_DATA: 
    //     return {
    //       ...state,
    //       smurfs: []
    //     }
    //     case UPDATE_SMURFS:
    //       return {
    //         ...state,
    //         smurfs: action.payload,
    //       }
    //     case ADD_SMURF:
    //       return {
    //         ...state,
    //         smurfs: [...state.smurfs, action.payload]
    //       }
    //     case SET_ERROR:
    //       return {
    //         ...state,
    //         error: action.payload
    //       }
  
      default: 
        return state
    }
  }