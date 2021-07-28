import { combineReducers } from 'redux'
import authReducer from './authReducer'
import bookingsReducer from './bookingsReducer'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    bookings: bookingsReducer,
    firestore: firestoreReducer
})

export default rootReducer;