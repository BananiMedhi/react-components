import React, { useState } from 'react';
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
    event.preventDefault();
  }

  const [ orderForm, setOrderForm ] = useState(initialOrderForm);

  return (
    <div className="jumbotron" style={{padding: "1.0rem 1.0rem"}}>
    <h1>New Order</h1>
        <form>
        <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="customerName">Name: </label>
                <input className={`form-control ${orderForm.nameValid === true ? '' : 'is-invalid'}`} onChange={formUpdate} value={orderForm.customerName} id="customerName" name="customerName" placeholder="Customer name" type="text"/> 
                { orderForm.nameValid === false ? 
                    <div className="invalid-feedback">Please enter customer name</div> : null
                }
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="pizzaSize">Pizza Size: </label>
                <input className={`form-control ${orderForm.sizeValid === true ? '' : 'is-invalid'}`} onChange={formUpdate} value={orderForm.pizzaSize} id="pizzaSize" name="pizzaSize" placeholder="Pizza Size" type="text"/> 
                { orderForm.sizeValid === false ? 
                    <span style={{color:'#ff0000'}}>Size must be one of: 10, 12, 14</span> : null
                }
            </div>
        </div>
        <div className="form-row">
            <button disabled={!(orderForm.sizeValid && orderForm.nameValid)} onClick={formSubmit} style={{'button:disabled':{'color':'#000000'}}}>
                Place order
            </button>
        </div>
        </form>
    </div>
  );
};

OrderForm.propTypes = {
};

OrderForm.defaultProps = {
};

export default OrderForm;
