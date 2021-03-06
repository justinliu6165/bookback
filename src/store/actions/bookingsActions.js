export const createBookings = (booking) => {
    return (dispatch, getState, { getFirestore }) => {
        // Make async call to database
        const firestore = getFirestore();

        firestore
            .collection('bookings')
            .add({
                ...booking,
                createdAt: new Date()
            }, { merge: true })
            .then(() => {
                dispatch({type: "CREATE_BOOKING", payload: booking})
            })
            .catch(err => {
                dispatch({type: "CREATE_BOOKING_ERROR", payload: err})
            })
        }
}
