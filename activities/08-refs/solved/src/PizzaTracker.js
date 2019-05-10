import React from 'react';
import PropTypes from 'prop-types';

function PizzaTracker(props) {
  const onUpdateProgress = (newProgress) => {
    console.log(`order ${props.id} updated to progress ${newProgress}`);
    props.onUpdateProgress(props.id,newProgress);
  }
  const onCompleteOrder = () => {
    console.log(`order ${props.id} is complete`);
    props.onCompleteOrder(props.id);
  }
  return (
    <div>
      <p>Pizza for: {props.customerName}</p>
      <div className="progress">
        <div onClick={() => onUpdateProgress(0)} className={`progress-bar ${props.progress === 0 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Ordered</div>
        <div onClick={() => onUpdateProgress(1)} className={`progress-bar ${props.progress === 1 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Prepping</div>
        <div onClick={() => onUpdateProgress(2)} className={`progress-bar ${props.progress === 2 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Cooking</div>
        <div onClick={() => onUpdateProgress(3)} className={`progress-bar ${props.progress === 3 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Quality</div>
        <div onClick={() => onUpdateProgress(4)} className={`progress-bar ${props.progress === 4 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Delivery</div>
      </div>
      <button onClick={onCompleteOrder}>Complete</button>
    </div>
  );
};

PizzaTracker.propTypes = {
  id: PropTypes.number.isRequired,
  customerName: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  onUpdateProgress: PropTypes.func.isRequired,
  onCompleteOrder: PropTypes.func.isRequired
};

PizzaTracker.defaultProps = {
  customerName: "John",
  progress: 2
};

export default PizzaTracker;
