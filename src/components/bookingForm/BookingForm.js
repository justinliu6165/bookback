import React, { useState } from 'react'

const BookingForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const reset = () => {
        setName("")
        setEmail("")
    }

    const handSubmit = (e) => {
        e.preventDefault()
        alert("Submit")
        reset()
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