import { FETCH_TERM, FETCH_LOCATION } from '../actions/types';

const initialState = {
    searchResults: [],
    locationResults: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_TERM:
            return {
                ...state,
                items: action.payload
            }
            break;
        case FETCH_LOCATION:
            return {
                ...state,
                items: action.payload
            }
            break;
        default:
            return state;
    }
}