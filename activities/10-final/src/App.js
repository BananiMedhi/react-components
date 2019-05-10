import React, { useState } from 'react';
import PizzaEmployeeContainer from './PizzaEmployeeContainer';
import PizzaCustomerContainer from './PizzaCustomerContainer';

import moment from 'moment';

function App() {

  let [selectedOrder, setSelectedOrder] = useState({});

  return (
    <div className="App">
      <div className="container">
        <div className="row" style={{border: "1px dashed black"}}>
          <div className="col-lg">
            <h3>Employee View</h3>
            <PizzaEmployeeContainer onSelectOrder={(order) => setSelectedOrder(order)}/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-lg" style={{border: "1px dashed green"}}>
            <h3>Customer View</h3>
            <PizzaCustomerContainer order={selectedOrder}/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
