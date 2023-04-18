import React from 'react';
import PropTypes from 'prop-types';

function ProduceDisplay(props) {
  const produceDisplayStyle = {
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
      <div style={produceDisplayStyle} className="ProduceDisplay">
        {/* <div style={{ fontWeight: 'bold', fontSize: '1.25rem'}}>{props.day}</div>
        <div className='display-row'><span>Location:</span> <span>{props.location}</span></div>
        <div className='display-row'><span>Hours:</span> <span>{props.hours}</span></div>
        <div className='display-row'><span>Booth:</span> <span>{props.booth}</span></div> */}
        <div style={{ fontWeight: 'bold', fontSize: '1.25rem'}}>{props.month}</div>
        {props.selection.map((item, index) => {

          return <div id={'produce-' + index}>{item}</div>;
        })}      
      </div>
    </React.Fragment>
  );
}

ProduceDisplay.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};

export default ProduceDisplay;