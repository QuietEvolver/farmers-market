import React from 'react';
import PropTypes from 'prop-types';

function LocationDisplay(props) {
  const locationDisplayStyle = {
    border: '1px solid black',
    borderRadius: '1rem',
    width: '30vw',
    minHeight: '20rem',
    padding: '1rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  };

  return (
    <React.Fragment>
      <div style={locationDisplayStyle} className="LocationDisplay">
        <div style={{ fontWeight: 'bold', fontSize: '1.25rem'}}>{props.day}</div>
        <div className='display-row'><span>Location:</span> <span>{props.location}</span></div>
        <div className='display-row'><span>Hours:</span> <span>{props.hours}</span></div>
        <div className='display-row'><span>Booth:</span> <span>{props.booth}</span></div>
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