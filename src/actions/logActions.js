import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOGS, DELETE_LOGS, UPDATE_LOGS, SET_CURRENT, CLEAR_CURRENT, SEARCH_LOGS} from "./types";

// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading();
//         const response = await fetch("/logs");
//         const data = await response.json();
//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         });
//     }
// }

export const addLog = (log) => async (dispatch) => { // Add Log to Server
    try {
        setLoading();
        const response = await fetch("/logs", {
            method: "POST",
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        dispatch({
            type: ADD_LOGS,
            payload: data
        })
    } catch (error) {
        console.error(`${error.message}, error coming from addLog`);
        dispatch({
            type: LOGS_ERROR,
            payload: error.message
        });
    }
}

export const getLogs = () => async (dispatch) => { // Get Logs from Server
    try {
        setLoading();
        const response = await fetch("/logs");
        const data = await response.json();
        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (error) {
        console.error(`${error.message}, error coming from getLogs`);
        dispatch({
            type: LOGS_ERROR,
            payload: error.message
        });
    }
}

export const deleteLog = (id) => async (dispatch) => { // Delete Log from Server
    try {
        setLoading();
        await fetch(`/logs/${id}`, {
            method: "DELETE"
        });
        dispatch({
            type: DELETE_LOGS,
            payload: id
        });
    } catch (error) {
        console.error(`${error.message}, error coming from deleteLog`);
        dispatch({
            type: LOGS_ERROR,
            payload: error.message
        });
    }
}

export const setCurrentLog = (log) => { // Set Current Log
    return {
        type: SET_CURRENT,
        payload: log
    }
}

export const clearCurrentLog = () => { // Clear Current Log
    return {
        type: CLEAR_CURRENT,
    }
}

export const updateLog = (log) => async (dispatch) => { // Update Log to Server
    try {
        setLoading();
        const response = await fetch(`/logs/${log.id}`, {
            method: "PUT",
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        dispatch({
            type: UPDATE_LOGS,
            payload: data
        })
    } catch (error) {
        console.error(`${error.message}, error coming from updateLog`);
        dispatch({
            type: LOGS_ERROR,
            payload: error.message
        });
    }
}

export const searchLog = (text) => async (dispatch) => { // Search Log from Server
    try {
        setLoading();
        const response = await fetch(`/logs?q=${text}`);
        const data = await response.json();
        console.log(data);
        dispatch({
            type: SEARCH_LOGS,
            payload: data
        })
    } catch (error) {
        console.error(`${error.message}, error coming from searchLog`);
        dispatch({
            type: LOGS_ERROR,
            payload: error.message
        });
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING,
    }
}