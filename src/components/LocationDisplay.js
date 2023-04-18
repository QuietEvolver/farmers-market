import React from 'react';

const marketSchedule = [  
  {  
     day: "Sunday",
     location: "Lents International",
     hours: "9:00am - 2:00pm",
     booth: "4A"
  },
  {  
     day: "Monday",
     location: "Pioneer Courthouse Square",
     hours: "10:00am - 2:00pm",
     booth: "7C"
  },
  {  
     day: "Tuesday",
     location: "Hillsboro",
     hours: "5:00pm - 8:30pm",
     booth: "1F"
  },
  {  
     day: "Wednesday",
     location: "Shemanski Park",
     hours: "10:00am - 2:00pm",
     booth: "3E"
  },
  {  
     day: "Thursday",
     location: "Northwest Portland",
     hours: "2:00pm - 6:00pm",
     booth: "6D"
  },
  {  
     day: "Saturday",
     location: "Beaverton",
     hours: "10:00am - 1:30pm",
     booth: "9G"
  }
 ];

function getLocationForDay(day) {
  return marketSchedule.filter(daySchedule => daySchedule.day === day)[0];
}

function LocationDisplay(props) {
  const locationDisplayStyle = {
    border: '1px solid black',
    borderRadius: '1rem',
    width: '40vw',
    minHeight: '20rem',
  };

  const scheduleForDay = getLocationForDay(props.selectedDay);

  return (
    <React.Fragment>
      <div style={locationDisplayStyle} className="LocationDisplay">
        <select name="day" className="day-select">
        <option value="">--Please choose a day--</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <div>
          <div>selected: {scheduleForDay.day}</div>
          <div>Location: {scheduleForDay.location}</div>
          <div>hours: {scheduleForDay.hours}</div>
          <div>Booth: {scheduleForDay.booth}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LocationDisplay;