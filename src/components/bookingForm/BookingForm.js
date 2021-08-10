import React, { useState } from 'react'
import { createBookings } from '../../store/actions/bookingsActions'
import { useDispatch } from 'react-redux'

const BookingForm = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const reset = () => {
        setName("")
        setEmail("")
    }

    const handSubmit = (e) => {
        e.preventDefault()

        let datestart = new Date()
        let dateend = new Date(datestart.setDate(datestart.getDate() + 7))

        if(name !== "" || email !== "") {
            dispatch(createBookings({name, email, datestart, dateend}))
            reset()
        }
    }

    return (
        <div className="booking-modal">
            <form onSubmit={handSubmit} className="booking-form">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <span>8/10/12 to 12/10/12</span>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default BookingForm