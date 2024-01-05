import React, { useState, useEffect } from 'react';

const DateDifference = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [differenceInDays, setDifferenceInDays] = useState(null);


  // date Pick cal

  // import * as React from 'react';
  // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
  // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
  // import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
  
  // export default function BasicDateCalendar() {
  //     return (
  //       <LocalizationProvider dateAdapter={AdapterDayjs}>
  //         <DateCalendar />
  //       </LocalizationProvider>
  //     );
  //   }



  useEffect(() => {
    if (startDate && endDate) {
      calculateDateDifference();
    }
  }, [startDate, endDate]);

  const handleDateChange = (event, setDateFunction) => {
    setDateFunction(event.target.value);
    setDifferenceInDays(null); // Reset the difference when dates change
  };

  const calculateDateDifference = () => {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);

    if (date1 && date2 && date2 >= date1) {
      const differenceInMs = date2 - date1;
      const millisecondsInADay = 1000 * 60 * 60 * 24;
      const differenceInDays = Math.floor(differenceInMs / millisecondsInADay);
      setDifferenceInDays(differenceInDays);
      console.log(`The difference between the dates is ${differenceInDays} days.`);
    } else {
      console.log('Please select valid dates.');
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(event) => handleDateChange(event, setStartDate)}
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(event) => handleDateChange(event, setEndDate)}
        />
      </div>
      {differenceInDays !== null && (
        <p>The difference between the dates is {differenceInDays} days.</p>
      )}
      {differenceInDays === null && endDate && endDate < startDate && (
        <p>Please select an end date after the start date.</p>
      )}
    </div>
  );
};

export default DateDifference;
