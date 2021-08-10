import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase';
import Calendar from '../components/calendar/Calendar';

const SearchDatePage = () => {
    useFirestoreConnect([
        { collection: 'bookings' }
    ])
    
    const bookings = useSelector(state => {
        return state.firestore.ordered.bookings
    });

    return (
        <div>
            {/* {bookings && bookings.map((booking, index) => (
                    <div key={index}>
                        <div>{booking.name}</div>
                        <div>{booking.email}</div>
                    </div>
                )
            )} */}
            <Calendar/>
        </div>
    )
}

export default SearchDatePage