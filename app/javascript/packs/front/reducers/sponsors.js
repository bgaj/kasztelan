const initialState = {
    sponsors: []
};

export default function (state = initialState, action) {
    switch(action.type) {
        case 'SPONSORS_REQUEST':
            return Object.assign({}, initialState);
        case 'SPONSORS':
            console.log(action.paylod)
            return Object.assign({}, {sponsors: action.payload.data});
        case 'SPONSORS_FAILD':
            return Object.assign({}, initialState);
        default:
            return state;
    }
}