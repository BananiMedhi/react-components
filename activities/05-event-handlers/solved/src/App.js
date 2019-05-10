import React from 'react';
import './App.css';
import PizzaTracker from './PizzaTracker';

function App() {
  let orders = [
    { id: 0, customerName: "Steve", progress: 0 },
    { id: 1, customerName: "Mary", progress: 1 },
    { id: 2, customerName: "Tom", progress: 2 },
    { id: 3, customerName: "Sue", progress: 3 },
    { id: 4, customerName: "David", progress: 4 },
  ];

  const onUpdateProgress = (orderId, newProgress) => {
    alert(`order ${orderId} updated to progress ${newProgress}`);
  }
  const onCompleteOrder = (orderId) => {
    alert(`order ${orderId} is complete`);
  }

  return (
    <div className="App">
      {orders.map((value, index) => {
        return <PizzaTracker progress={value.progress} customerName={value.customerName} 
          key={value.id} id={value.id}
          onUpdateProgress={onUpdateProgress}
          onCompleteOrder={onCompleteOrder}
          />
      })}
    </div>
  );
}

export default App;
