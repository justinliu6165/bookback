import React from 'react'

const CalendarDayTile = ({ date, name, isBooked}) => {
    return (
        <div>
            {date}
            {name}
            {isBooked ? "unavailable" : "available"}
        </div>
    )
}

export default CalendarDayTile