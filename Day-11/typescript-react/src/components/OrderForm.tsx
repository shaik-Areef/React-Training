import * as React from "react";
import * as ReactDom from "react-dom";
import { useState } from 'react';
import { Order } from "./Order";
function OrderForm() {
    const [order, setOrder] = React.useState(new Order())
    function save() {
        console.log("checking");
        console.log(order)
    }
    const update = (event: any, state: string) => {
        //  const target= event.target as typeof event.target & Order ;
        // console.log(event.target.value);
        const order = new Order();
        if (state == "item")
            order.item = event.target.value;
        else
            order.price = event.target.value;

        setOrder(order);
    }
    return (
        <div className="container mb-3 px-4">
            <h1>This is the OrderForm</h1>
            {/* <label className="label my-3">This is the OrderForm:</label> <span className="badge rounded-pill bg-info text-dark">{order.item}</span> */}
            <label className="label my-3">Item</label>
            <input type='text' placeholder='Enter Item Name' onChange={evt => update(evt, "item")} className="form-control mb-3 " value={order.item} name='item' />
            <label className="label my-3">Price</label>
            <input type='number' placeholder=' Enter the Price' onChange={evt =>update(evt,"price")} className="form-control mb-3 " value={order.price} name='price' />
            <button onClick={save} className={"btn btn-primary"}>Save</button>
        </div>
    )
}
export default OrderForm