import React, { useState } from "react";
import './EMI-Calculator.css';
function EmiCalculator() {
    const [data, setData] = useState({
        amount: 50000,
        month: 6,
        interest: 4,

    })

    function eventHandling(event) {
        console.log(event.target.value);
        setData({ ...data, [event.target.name]: (event.target.value) })
    }

    function emiAmount() {
        if ((data.amount < 0) || (data.month < 0) || (data.interest < 0)) {
            return "ERROR"
        }
        let monthInterst = parseInt(data.amount * (parseInt(data.interest) / 100))
        let totalInterstAmount = data.month * monthInterst
        let totalAmount = parseInt(data.amount) + totalInterstAmount
        let montlyAmount = parseInt(totalAmount / (data.month))
        return montlyAmount

    }


    return (
        <div>

            <h1>EMI Calculator</h1>
            <div class='container'>
                <div class='row'>
                    <div class='col-25'>
                        lone Amount(₹):
                        <label> {data.amount}</label>
                    </div>
                    <div class='col-35'>
                        <input type='range' name='amount' min='20000' max='200000' onChange={eventHandling}></input>
                    </div></div>
                <div class='row'>
                    <div class='col-25'>
                        Month:
                        <label> {data.month}</label>
                    </div>
                    <div class='col-35'>
                        <input type='range' name='month' min='6' max='36' onChange={eventHandling}></input>
                    </div>
                </div>
                <div class='row'>
                    <div class='col-25'>
                        Interest Rate (In percentage (%)):
                        <label>{data.interest}</label>
                    </div>
                    <div class='col-35'>
                        <input type='range' name='interest' min='6' max='20' onChange={eventHandling}></input>
                    </div>
                </div>
                <div class='row'>
                    <div class='col-25'>Montly EMI Amount (₹):</div>
                    <div class='col-35'>
                        <label> {emiAmount()}</label>
                    </div>
                </div>
            </div>
        </div >



    )

} export default EmiCalculator