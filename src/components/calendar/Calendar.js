import React from 'react'

import CalendarDayTile from './CalendarDayTile'

const Calendar = () => {
    return (
        <div className="calendar">
            <ul className="calendar-bookings">
                <li className="">
                    <CalendarDayTile/>
                </li>
            </ul>
        </div>
    )
}

export default Calendar