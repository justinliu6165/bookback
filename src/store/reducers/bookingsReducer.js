const initState = {
    bookings: []
};

const bookingsReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_BOOKING":
            return state;
        case "CREATE_BOOKING_ERROR":
            return state;
        default:
            return state;
    }
}

export default bookingsReducer;