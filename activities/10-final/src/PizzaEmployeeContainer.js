import React, {useState} from 'react';
import PizzaTracker from './PizzaTracker';
import OrderForm from './OrderForm'
import moment from 'moment';

function PizzaEmployeeContainer(props) {
  const updateProgress = (orderId, newProgress) => {
    console.log(`updateProgress, orders is: ${JSON.stringify(orders)}`);

    let newOrders = [];
    orders.forEach((value) => {
      if (value.id === orderId) {
        value.progress = newProgress;
        props.onSelectOrder({ ...value});
      }
      newOrders.push(value);
    })
    console.log(`updateProgress, orders now: ${JSON.stringify(newOrders)}`);
    setOrders(newOrders);
  }

  const completeOrder = (orderId) => {
    console.log(`completeOrder, orders is: ${JSON.stringify(orders)}`);

    let newOrders = [];
    orders.forEach((value) => {
      if (value.id === orderId) return;
      newOrders.push(value);
    })
    setOrders(newOrders);
  }

  const newOrder = (orderForm) => {
    console.log(`newOrder, orderForm is: ${JSON.stringify(orderForm)}`)
    let lastOrderId = 0;
    orders.forEach((value) => { if (value.id > lastOrderId) lastOrderId = value.id })
    lastOrderId++;

    let newOrders = [...orders, {
      id: lastOrderId, customerName: orderForm.customerName, progress: 0, orderReceived: moment()
    }];

    setOrders(newOrders);
  }

  const selectOrder = (orderId) => {
    console.log(`selectOrder, orderId`)
    orders.forEach((value) => {
      if(value.id === orderId) {
        props.onSelectOrder(value);
      }
    });
 
  }
  let initialOrders = [
    { id: 0, customerName: "Steve", progress: 0 },
    { id: 1, customerName: "Mary", progress: 1 },
  ];

  let [orders, setOrders] = useState(initialOrders);

  return (
    <div>
      <OrderForm onNewOrder={ newOrder } />
    {
      orders.map((value, index) => {
        return <PizzaTracker
          progress={value.progress} customerName={value.customerName}
          orderReceived={value.orderReceived}
          id={value.id} key={value.id}
          onUpdateProgress={updateProgress}
          onCompleteOrder={completeOrder}
          onSelectOrder={selectOrder}
        />
      })

    }
  </div>
  )
}
      
export default PizzaEmployeeContainer;