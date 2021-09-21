import {ADD_TECH, GET_TECH, DELETE_TECH, SET_LOADING, TECH_ERROR, GET_SINGLE_TECH} from "./types";
import { API } from '../API';

export const setLoading = () => {
    return {
        type: SET_LOADING,
    }
}

export const getSingleTech = (id) => async (dispatch) => {
    try {
        setLoading();
        const response = await fetch(`${API}/technicians/getTechnician/${id}`);
        const data = await response.json();
        console.log(data);
        dispatch({
            type: GET_SINGLE_TECH,
            payload: data
        });
    } catch (error) {
        console.error(`${error.message}, error coming from getSingleTech`);
        dispatch({
            type: TECH_ERROR,
            payload: error.message
        });
    }
}

export const getTechs = () => async (dispatch) => { // Get Techs from Server
    try {
        setLoading();
        const response = await fetch(`${API}/technicians/allTechnicians`);
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
        const response = await fetch(`${API}/technicians/addTechnician`, {
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
        await fetch(`${API}/technicians/deleteTechnician/${id}`, {
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
