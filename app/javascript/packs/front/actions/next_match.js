import { pendingTask, begin, end } from 'react-redux-spinner'
import api from '../api'

function loadNextMatchRequest() {
    return {
        type: 'NEXT_MATCH_REQUEST',
        [ pendingTask ]: begin
    }
}

function loadNextMatchSuccess(data) {
    return {
        type: 'NEXT_MATCH',
        payload: data,
        [ pendingTask ]: end
    }
}

function loadNextMatchFailed(error) {
    return {
        type: 'NEXT_MATCH_FAILD',
        [ pendingTask ]: end
    }
}


export function loadNextMatch() {
    return dispatch => {
        dispatch(loadNextMatchRequest());
        return  api.loadNextMatch()
            .then((res) => {
                dispatch(loadNextMatchSuccess(res.data));
            })
            .catch(error => {
                dispatch(loadNextMatchFailed(error));
            });
    }
}