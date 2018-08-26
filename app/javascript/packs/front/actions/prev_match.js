import { pendingTask, begin, end } from 'react-redux-spinner'
import api from '../api'

function loadPrevMatchRequest() {
    return {
        type: 'PREV_MATCH_REQUEST',
        [ pendingTask ]: begin
    }
}

function loadPrevMatchSuccess(data) {
    return {
        type: 'PREV_MATCH',
        payload: data,
        [ pendingTask ]: end
    }
}

function loadPrevMatchFailed(error) {
    return {
        type: 'PREV_MATCH_FAILD',
        [ pendingTask ]: end
    }
}


export function loadPrevMatch() {
    return dispatch => {
        dispatch(loadPrevMatchRequest());
        return  api.loadPrevMatch()
            .then((res) => {
                dispatch(loadPrevMatchSuccess(res.data));
            })
            .catch(error => {
                dispatch(loadPrevMatchFailed(error));
            });
    }
}