import React, { useState } from 'react'
import {addMonths, subMonths} from "date-fns";

import CalendarHeader from './CalendarHeader';
import CalendarDays from './CalendarDays';
import CalendarCells from './CalendarCells';

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const nextMonth = () => {
        let current = addMonths(currentMonth, 1);
        setCurrentMonth(current);
    };

    const prevMonth = () => {
        let current = subMonths(currentMonth, 1);
        setCurrentMonth(current);
    };

    return (
        <div className="calendar">
            <CalendarHeader 
                currentMonth={currentMonth} 
                nextMonth={nextMonth} 
                prevMonth={prevMonth} 
            />
            <CalendarDays currentMonth={currentMonth} />
            <CalendarCells 
                currentMonth={currentMonth} 
            />
        </div>
    )
}

export default Calendar