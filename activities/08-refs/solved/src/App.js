import React, { useState } from 'react';
import './App.css';
import PizzaTracker from './PizzaTracker';
import OrderForm from './OrderForm';

function App() {
  const updateProgress = (orderId, newProgress) => {
    // ** NOTE, cannot just change orders, or react won't know (shallow compare)
    console.log(`updateProgress, orders is: ${JSON.stringify(orders)}`);

    let newOrders = [];
    orders.forEach((value) => {
      if(value.id === orderId) value.progress = newProgress;
      newOrders.push(value);
    })
    console.log(`updateProgress, orders now: ${JSON.stringify(newOrders)}`);
    setOrders(newOrders);
  }

  const completeOrder = (orderId) => {
    console.log(`completeOrder, orders is: ${JSON.stringify(orders)}`);

    let newOrders = [];
    orders.forEach((value) => {
      if(value.id === orderId) return;
      newOrders.push(value);
    })
    setOrders(newOrders);
  }

  const newOrder = (orderForm) => {
    console.log(`newOrder, orderForm is: ${JSON.stringify(orderForm)}`)
    let lastOrderId = 0;
    orders.forEach((value) => { if(value.id > lastOrderId) lastOrderId = value.id})
    lastOrderId++;

    let newOrders = [ ...orders, {
      id:lastOrderId, customerName: orderForm.customerName, progress: 0
    }];

    setOrders(newOrders);
  }
  let initialOrders = [
    { id: 0, customerName: "Steve", progress: 0 },
    { id: 1, customerName: "Mary", progress: 1 },
    { id: 2, customerName: "Tom", progress: 2 },
    { id: 3, customerName: "Sue", progress: 3 },
    { id: 4, customerName: "David", progress: 4 },
  ];
  
  let [orders, setOrders] = useState(initialOrders);
  
  return (
    <div className="App">
      <OrderForm onNewOrder={newOrder} />
      {orders.map((value, index) => {
        return <PizzaTracker 
          progress={value.progress} customerName={value.customerName} 
          orderReceived={value.orderReceived}
          id={value.id} key={value.id}
          onUpdateProgress={updateProgress}
          onCompleteOrder={completeOrder}
        />
      })}
    </div>
  );
}

export default App;
