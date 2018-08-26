const initialState = {
    data: null
};

export default function (state = initialState, action) {
    switch(action.type) {
        case 'PREV_MATCH_REQUEST':
            return Object.assign({}, initialState);
        case 'PREV_MATCH':
            return Object.assign({}, {data: action.payload.data});
        case 'PREV_MATCH_FAILD':
            return Object.assign({}, initialState);
        default:
            return state;
    }
}