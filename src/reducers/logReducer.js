import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOGS, DELETE_LOGS, UPDATE_LOGS, SET_CURRENT, CLEAR_CURRENT, SEARCH_LOGS} from "../actions/types";

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SET_LOADING:
            return { ...state, loading: true }

        case GET_LOGS:
            return { ...state, logs: payload, loading: false }

        case ADD_LOGS: 
            console.log(state.logs)
            console.log(payload);
            return {...state, logs: [...state.logs, payload], loading: false}
        
        case DELETE_LOGS:
            return {
                ...state,
                logs: state.logs.filter(log => log._id !== payload),
                loading: false,
            }
        case UPDATE_LOGS:
            return {
                ...state,
                logs: state.logs.map((log) => log._id === payload._id ? payload : log),
                loading: false
            }

        case SET_CURRENT:
            return {...state, current: payload}
        
        case CLEAR_CURRENT:
            return {...state, current: null}
        
        case SEARCH_LOGS:
            return {
                ...state,
                logs: payload
            };

        case LOGS_ERROR:
            console.error(payload);
            return {...state, error: payload}

        default:
            return state;
    }

}