function reducer(state, action) {
    console.log(action.payload);
    switch(action.type) {
        case 'GET_WEATHER_DATA':
            return action.payload;
        default:
            return state;
    }
}

export default reducer;