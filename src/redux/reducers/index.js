import { combineReducers } from 'redux';


const turnIntoRoute = (inputString) =>{
    return inputString.replace(/\W+/g, '-').toLowerCase();
}
const newRouteInput = (state='', action) =>{
    switch (action.type) {
        case 'ROUTE_INPUT':
            return turnIntoRoute(action.payload);
        case 'CLEAR_INPUT':
            return '';    
        default:
            return state;
    }       
}
const pollStatus = (state={}, action) =>{
    switch(action.type) {
        case 'SET_STATUS':
            return action.payload.data;
        case 'CLEAR_STATUS':
            return {};
        default:
            return state;
    }
}
const idReducer = (state=null, action) =>{
    switch(action.type){
        case 'SET_ID':
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    newRouteInput,
    pollStatus,
    idReducer,
    // loginMessage,
    // registrationMessage,
  });