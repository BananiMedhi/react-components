import React, { useState } from 'react';
import PropTypes from 'prop-types';

const initialOrderForm = {
    customerName: '',
    pizzaSize: 10,
}
function OrderForm(props) {
  const formUpdate = (event) => {
    console.log(`formUpdate, event: `,event)

    setOrderForm( { ...orderForm, [event.target.name]: event.target.value});
    event.preventDefault();
  }
  const formSubmit = (event) => {
    console.log(`formSubmit, event: `,event)
    console.log(`This orderForm: `,orderForm)
    props.onNewOrder(orderForm);
    event.preventDefault();
  }

  const [ orderForm, setOrderForm ] = useState(initialOrderForm);

  return (
    <div>
        <form>
            <div className="form-group">
            <label htmlFor="customerName">Name: </label>
                <input onChange={formUpdate} value={orderForm.customerName} id="customerName" name="customerName" placeholder="Customer name" type="text"/> 
            </div>
            <div>
                <input onChange={formUpdate} value={orderForm.pizzaSize} name="pizzaSize" placeholder="Pizza size" type="text"/> 
            </div>
            <button onClick={formSubmit} style={{'button:disabled':{'color':'#000000'}}}>
                Place order
            </button>
        </form>
    </div>
  );
};

OrderForm.propTypes = {
};

OrderForm.defaultProps = {
};

export default OrderForm;
