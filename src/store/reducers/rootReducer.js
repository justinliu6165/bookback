import { combineReducers } from 'redux'
import authReducer from './authReducer'
import bookingsReducer from './bookingsReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    bookings: bookingsReducer
})

export default rootReducer;