import * as types from '../constants/ActionTypes';


export function setWeatherLocation(aLocation) {
  return {
    type: types.USERNAME,
    WeaterLocation: aLocation
  };
}
