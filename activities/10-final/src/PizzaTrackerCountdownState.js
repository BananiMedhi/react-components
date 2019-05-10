import React, { useState, useEffect}  from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const pizzaOrderMinutes = 30;

function PizzaTracker(props) {
  let orderTimeRemaining = props.orderReceived.clone().add(pizzaOrderMinutes,'minutes').diff(moment(), 'seconds');
  let [timeRemaining, setTimeRemaining] = useState(orderTimeRemaining);
  useEffect(
    () => {
      console.log(`starting timeout effect`)
      let countdownInterval = setInterval( () => {
        console.log(`setInterval fired`);
        setTimeRemaining(t => t-1)
      }, 1000);
      return () => {
        clearTimeout(countdownInterval);
      }
    },
    []
  )
  let orderReceived = props.orderReceived.format(`HH:mm:ss`)
  return (
    <div>
      <p>Pizza for: {props.customerName}</p>
      <div className="progress">
        <div className={`progress-bar ${props.progress === 0 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Ordered</div>
        <div className={`progress-bar ${props.progress === 1 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Prepping</div>
        <div className={`progress-bar ${props.progress === 2 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Cooking</div>
        <div className={`progress-bar ${props.progress === 3 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Quality</div>
        <div className={`progress-bar ${props.progress === 4 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Delivery</div>
      </div>
      <div>
        <p>Order Received: {`${orderReceived}`}</p>
        <p>Time Remaining: {`${Math.floor(timeRemaining/60)}:${timeRemaining%60}`}</p>
      </div>
    </div>
  );
};

PizzaTracker.propTypes = {
  customerName: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  orderReceived: PropTypes.object.isRequired
};

PizzaTracker.defaultProps = {
  customerName: "John",
  progress: 2
};

export default PizzaTracker;
