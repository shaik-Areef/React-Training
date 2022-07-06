import React, { useState } from 'react';
import './orderform.css'

function OrderForm(Props) {
    const [order, setOrder] = useState({
        item: "laptop",
        price: 1000,
        tax: 10
    });

    function updateValue(event) {
        console.log(event.target.value);
        setOrder({ ...order, [event.target.name]: (event.target.value) })
    }

    function totalCalculation() {
        if ((order.tax < 0) || (order.price < 0)) {
            return "ERROR";
        }
        return order.price * (1 + (parseInt(order.tax) / 100))
    }

    return (
        <div>
            <div id='orderform'>
                <h1>Order Form</h1>
                <input value={order.item} name="item" onChange={updateValue}></input>
                <input value={order.price} name='price' type='number' min='0' onChange={updateValue}></input>
                <input value={order.tax} name='tax' type='number' min='0' onChange={updateValue} placeholder='tax'></input>
                Total: {totalCalculation()}
            </div>
        </div>
    )
} export default OrderForm