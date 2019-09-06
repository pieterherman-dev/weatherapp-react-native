import * as types from '../constants/ActionTypes';

const initialState = {
      WeahterLocation: 'Brussels',
};


export default function AppReducer(state = initialState, action) {
      switch (action.type) {
        
        case types.WEAHTERLOCATION:
          return {
            ...state,
            WeahterLocation: action.WeahterLocation
          };
      
        default:
          return state;
      }
    }
    