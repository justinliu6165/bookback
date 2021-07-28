import React from 'react'
import { useSelector } from 'react-redux'
// import { createSelector } from 'reselect'

// const selectBookings = createSelector(
//     (state) => state.bookings.bookings
// )

const SearchDatePage = (props) => {
    const bookings = useSelector(state => state.bookings.bookings);
    return (
        <div>
            {bookings.map((booking, index) => (
                    <div key={index}>
                        <div>{booking.name}</div>
                        <div>{booking.email}</div>
                    </div>
                )
            )}
        </div>
    )
}

export default SearchDatePage