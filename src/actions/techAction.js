import {ADD_TECH, GET_TECH, DELETE_TECH, SET_LOADING, TECH_ERROR} from "./types";

export const setLoading = () => {
    return {
        type: SET_LOADING,
    }
}

export const getTechs = () => async (dispatch) => { // Get Techs from Server
    try {
        setLoading();
        const response = await fetch("/techs");
        const data = await response.json();
        dispatch({
            type: GET_TECH,
            payload: data
        });
    } catch (error) {
        console.error(`${error.message}, error coming from getTech`);
        dispatch({
            type: TECH_ERROR,
            payload: error.message
        });
    }
}

export const addTech = (tech) => async (dispatch) => {
    try {
        setLoading();
        const response = await fetch("/techs", {
            method: "POST",
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        dispatch({
            type: ADD_TECH,
            payload: data
        })
    } catch (error) {
        console.error(`${error.message}, error coming from addTech`);
        dispatch({
            type: TECH_ERROR,
            payload: error.message
        });
    }
}

export const deleteTech = (id) => async (dispatch) => {
    try {
        setLoading();
        await fetch(`/techs/${id}`, {
            method: "DELETE"
        });
        dispatch({
            type: DELETE_TECH,
            payload: id
        });
    } catch (error) {
        console.error(`${error.message}, error coming from deleteTech`);
        dispatch({
            type: TECH_ERROR,
            payload: error.message
        });
    }
}
