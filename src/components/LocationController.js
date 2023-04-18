import React from "react";
import LocationDisplay from "./LocationDisplay";

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
     day: "Friday",
     location: "Sellwood",
     hours: "7:00am - 12:00pm",
     booth: "213F"
  },
  {  
     day: "Saturday",
     location: "Beaverton",
     hours: "10:00am - 1:30pm",
     booth: "9G"
  }
];

const getLocationForDay = day => marketSchedule.filter(daySchedule => daySchedule.day === day)[0];

class LocationController extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: "Monday"
    };
  }

  handleSelect = (e) => {
    this.setState(() => ({
      selectedDay: e.target.value
    }));
  }
  
  render() {
    const dayData = getLocationForDay(this.state.selectedDay);
    return (
      <React.Fragment>
        <select name="day" className="day-select" onChange={this.handleSelect}>
        <option value="">--Please choose a day--</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <LocationDisplay 
          day={dayData.day}
          location={dayData.location}
          hours={dayData.hours}
          booth={dayData.booth}
        />
      </React.Fragment>
    );
  }
}

export default LocationController;
