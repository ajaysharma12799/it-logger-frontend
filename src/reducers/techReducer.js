import {ADD_TECH, DELETE_TECH, GET_TECH, TECH_ERROR, SET_LOADING} from "../actions/types";

const initialState = {
    techs: null,
    loading: false,
    error: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case SET_LOADING:
            return { ...state, loading: true }

        case GET_TECH:
            return {...state, techs: payload, loading: false};

        case ADD_TECH:
            return {...state, techs: [...state.techs, payload], loading: false};

        case DELETE_TECH:
            return {...state, techs: state.techs.filter(t => t.id !== payload), loading: false};

        case TECH_ERROR:
            return {...state, error: payload};

        default:
            return state;
    }
}