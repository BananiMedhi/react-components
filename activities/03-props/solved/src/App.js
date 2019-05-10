import React from 'react';
import './App.css';
import PizzaTracker from './PizzaTracker';

function App() {
  let progressInfo = [
    { color: 'info',
      width: "25%",
      label: 'Step 1'
    },
    { color: 'danger',
      width: "33%",
      label: 'Step 2'
    }
  ];

  return (
    <div className="App">
      <PizzaTracker progress={"33%"} customerName="Steve"
        progressInfo={ progressInfo }
      />
    </div>
  );
}

export default App;
