const initState = {
    bookings: [
        {
            name: "Justin Liu",
            email: "sds@sda.com",
            bookingRef: "sdkfljsrh23iu24h"
        },
        {
            name: "Justin Liu",
            email: "sds@sda.com",
            bookingRef: "sdkfljsrh23iu24h"
        },
        {
            name: "Justin Liu",
            email: "sds@sda.com",
            bookingRef: "sdkfljsrh23iu24h"
        }
    ]
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