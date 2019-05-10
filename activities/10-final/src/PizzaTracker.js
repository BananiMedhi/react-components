import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './PizzaTracker.css';
import moment from 'moment';

const pizzaOrderMinutes = 30;

function PizzaTracker(props) {
  const onUpdateProgress = (newProgress) => {
    console.log(`order ${props.id} updated to progress ${newProgress}`);
    props.onUpdateProgress(props.id,newProgress);
  }
  const onCompleteOrder = () => {
    console.log(`order ${props.id} is complete`);
    props.onCompleteOrder(props.id);
  }
  const onSelectOrder = ()  => {
    props.onSelectOrder(props.id);
  }

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

  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">Pizza for: {props.customerName}</h6>
        <div className="progress" style={{height:"40px"}}>
          <div onClick={() => onUpdateProgress(0)} className={`progress-bar ${props.progress === 0 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Ordered</div>
          <div onClick={() => onUpdateProgress(1)} className={`progress-bar ${props.progress === 1 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Prepping</div>
          <div onClick={() => onUpdateProgress(2)} className={`progress-bar ${props.progress === 2 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Cooking</div>
          <div onClick={() => onUpdateProgress(3)} className={`progress-bar ${props.progress === 3 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Quality</div>
          <div onClick={() => onUpdateProgress(4)} className={`progress-bar ${props.progress === 4 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Delivery</div>
        </div>
        <div className="orderInfo">
          <div className="orderPlaced">
            Order placed: {props.orderReceived.format('hh:mm a')}
          </div>
          <div className="timeRemaining">
            Complete in: {`${Math.floor(timeRemaining/60)}:${timeRemaining%60}`}
          </div>
        </div>
      </div>
      { props.isEmployee === true ? 
        <div className="card-footer">
          <button onClick={onCompleteOrder}>Remove</button>
          <button onClick={onSelectOrder}>Select</button>
        </div>
        : null
      }
    </div>
    );
  };

PizzaTracker.propTypes = {
  id: PropTypes.number.isRequired,
  isEmployee: PropTypes.bool,
  customerName: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  onUpdateProgress: PropTypes.func,
  orderReceived: PropTypes.object.isRequired,
  onCompleteOrder: PropTypes.func
};

PizzaTracker.defaultProps = {
  customerName: "John",
  isEmployee: true,
  id: 1,
  orderReceived: moment(),
  progress: 2
};

export default PizzaTracker;
