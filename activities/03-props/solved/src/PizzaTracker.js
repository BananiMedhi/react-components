import React from 'react';
import PropTypes from 'prop-types';

function PizzaTracker(props) {
  return (
    <div>
      <p>Pizza for: {props.customerName}</p>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: props.progress}}></div>
      </div>
      <br/>
      <p>Pizza for: {props.customerName}</p>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: props.progress}}></div>
      </div>
      {/* BONUS: colors, multiple segments & labels */}
      <br/>
      <p>Pizza for: {props.customerName}</p>
      <div className="progress">
        <div className={`progress-bar bg-${props.progressInfo[0].color}`} role="progressbar" style={{width: props.progressInfo[0].width}}>{props.progressInfo[0].label}</div>
        <div className={`progress-bar bg-${props.progressInfo[1].color}`} role="progressbar" style={{width: props.progressInfo[1].width}}>{props.progressInfo[1].label}</div>
      </div>
    </div>
  );
};

PizzaTracker.propTypes = {
  progress: PropTypes.string,
  customerName: PropTypes.string.isRequired,
  // Bonus 1
//  progressInfo: PropTypes.array.isRequired
  // Bonus 2
  progressInfo: PropTypes.arrayOf(
    PropTypes.shape( {
      color: PropTypes.string,
      width: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired
};

PizzaTracker.defaultProps = {
  customerName: "John",
  progress: 0.25
};

export default PizzaTracker;
