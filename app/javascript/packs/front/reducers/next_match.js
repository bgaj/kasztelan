const initialState = {
    data: null
};

export default function (state = initialState, action) {
    switch(action.type) {
        case 'NEXT_MATCH_REQUEST':
            return Object.assign({}, initialState);
        case 'NEXT_MATCH':
            return Object.assign({}, {data: action.payload.data});
        case 'NEXT_MATCH_FAILD':
            return Object.assign({}, initialState);
        default:
            return state;
    }
}