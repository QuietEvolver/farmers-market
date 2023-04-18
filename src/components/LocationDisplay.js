import React from 'react';
import PropTypes from 'prop-types';

function LocationDisplay(props) {
  const locationDisplayStyle = {
    border: '1px solid black',
    borderRadius: '1rem',
    width: '40vw',
    minHeight: '20rem',
    padding: '1rem',
  };

  return (
    <React.Fragment>
      <div style={locationDisplayStyle} className="LocationDisplay">
        
        <div>
          <div>Day selected: {props.day}</div>
          <div>Location: {props.location}</div>
          <div>Hours: {props.hours}</div>
          <div>Booth: {props.booth}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

LocationDisplay.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default LocationDisplay;