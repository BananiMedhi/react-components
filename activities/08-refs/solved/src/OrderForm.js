import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const initialOrderForm = {
    customerName: '',
    pizzaSize: 10,
    sizeValid: true,
    nameValid: false
}
function OrderForm(props) {
  const formUpdate = (event) => {
    console.log(`formUpdate, event: `,event)
    let sizeValid = orderForm.sizeValid;
    let nameValid = orderForm.nameValid;

    if(event.target.name === 'customerName') {
        if(event.target.value === "") {
            nameValid = false;
        } else {
            nameValid = true;
        }
    }
    if(event.target.name === 'pizzaSize') {
        let size = Number(event.target.value);
        if(size !== 10 && size !== 12 && size !== 14) {
            sizeValid = false;
        } else {
            sizeValid = true;
        }
    }
    setOrderForm( { ...orderForm, [event.target.name]: event.target.value, sizeValid: sizeValid, nameValid: nameValid})
    event.preventDefault();
  }
  const formSubmit = (event) => {
    console.log(`formSubmit, event: `,event)
    console.log(`This orderForm: `,orderForm)
    if(orderForm.sizeValid && orderForm.nameValid) {
        props.onNewOrder(orderForm);
    }
    customerName.current.focus();
    event.preventDefault();
  }

  let [ orderForm, setOrderForm ] = useState(initialOrderForm);
  let customerName = useRef(null);
  let pizzaSize = useRef(null);

  return (
    <div>
        <form>
            <div className="form-group">
            <label htmlFor="customerName">Name: </label>
                <input ref={customerName} onChange={formUpdate} value={orderForm.customerName} id="customerName" name="customerName" placeholder="Customer name" type="text"/> 
                { orderForm.nameValid === false ? 
                    <span style={{color:'#ff0000'}}>Please enter customer name</span> : null
                }
            </div>
            <div>
                <input ref={pizzaSize} onChange={formUpdate} value={orderForm.pizzaSize} name="pizzaSize" placeholder="Pizza size" type="text"/> 
                { orderForm.sizeValid === false ? 
                    <span style={{color:'#ff0000'}}>Size must be one of: 10, 12, 14</span> : null
                }
            </div>
            <button disabled={!(orderForm.sizeValid && orderForm.nameValid)} onClick={formSubmit} style={{'button:disabled':{'color':'#000000'}}}>
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
