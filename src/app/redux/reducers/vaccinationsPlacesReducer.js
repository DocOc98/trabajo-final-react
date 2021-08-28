import { GET_USERS_ERROR, GET_USERS_LOADING, GET_USERS_OK } from "../actions/usersActions";

const initialState = {
    loading: false,
    places: [],
    error: null
}

export const vaccinationsPlacesReducer = (state = initialState, action) => {
    //const { type, payload } = action;
    switch(action.type) {
        case "LOAD_PLACES":
            return { ...state, places: action.payload };
        case "DELETE_LAST_PLACE":
            return { ...state, places: state.places.pop() }
        default:
            return state;
    }
}