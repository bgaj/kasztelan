import { pendingTask, begin, end } from 'react-redux-spinner'
import api from '../api'

function loadSponsorsRequest() {
    return {
        type: 'SPONSORS_REQUEST',
        [ pendingTask ]: begin
    }
}

function loadSponsorsSuccess(data) {
    return {
        type: 'SPONSORS',
        payload: data,
        [ pendingTask ]: end
    }
}

function loadSponsorsFailed(error) {
    return {
        type: 'SPONSORS_FAILD',
        [ pendingTask ]: end
    }
}


export function loadSponsors() {
    return dispatch => {
        dispatch(loadSponsorsRequest());
        return  api.loadSponsors()
            .then((res) => {
                console.log(res.data)
                dispatch(loadSponsorsSuccess(res.data));
            })
            .catch(error => {
                dispatch(loadSponsorsFailed(error));
            });
    }
}