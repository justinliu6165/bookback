export const createBookings = (booking) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make async call to database
        const firestore = getFirestore();

        firestore
            .collection('bookings')
            .add({
                ...booking,
                createdAt: new Date()
            })
            .then(() => {
                dispatch({type: "CREATE_BOOKING", payload: booking})
            })
            .catch(err => {
                dispatch({type: "CREATE_BOOKING_ERROR", payload: err})
            })
        }
}