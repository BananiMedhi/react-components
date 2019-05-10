import React, {useState} from 'react';
import PizzaTracker from './PizzaTracker';

function PizzaCustomerContainer(props) {
  return (
    <PizzaTracker
          progress={props.order.progress} customerName={props.order.customerName}
          orderReceived={props.order.orderReceived}
          id={props.order.id} key={props.order.id}
          isEmployee={false}
        />
  )
}
      
export default PizzaCustomerContainer;