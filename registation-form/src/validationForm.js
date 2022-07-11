import react, { useState } from 'react'
import './validation.css'
function ValidationForm() {
    const [data, setData] = useState({
        email: '',
        password: '',
        rePassword: ''
    })

    const [error, setError] = useState(false)

    function eventHandler(event) {
        console.log(event.target.value)
        setData({ ...data, [event.target.name]: event.target.value })
        if (event.target.name === "rePassword") {
            Validation(event.target.value);
        }
    }

    function Validation(cpwd) {
        if (data.password === cpwd) {
            setError(false)

        } else {
            setError(true)
        }
    }
    async function onSubmit(event) {
        event.preventDefault();
        console.log(event);
        setData({ ...data, [event.target.name]: event.target.value })
        console.log(data);
        await fetch("http://localhost:3000/data", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json" }
        })
        setData({
            email: '',
            password: '',
            rePassword: ''

        })
    }
    return (
        <div class='container'>
            <h1>Registation Form</h1>
            <div class='childContainer'>
                <div class='row'>
                    <div class='col-32'>  Email ID:</div>
                    <div class='col-33'><input type='text' placeholder='enter Email Id' name='email' onChange={eventHandler} value={data.email} /></div>
                </div>
                <div class='row'>
                    <div class='col-32'> Password:</div>
                    <div class='col-33'><input type='password' name='password' placeholder='enter Password' onChange={eventHandler} value={data.password} /></div>
                </div>
                <div class='row'>
                    <div class='col-32'> Confirm-password:</div>
                    <div class='col-33'><input type='password' name='rePassword' placeholder='re-enter Password' onChange={eventHandler} value={data.rePassword} /></div>
                    {error ? <div class='col-34'><span id='error'>Password should be same</span></div> : ""}
                </div>
                
            </div>
            <div><button class='submit' onClick={onSubmit}>Submit</button></div>

        </div>
    )

} export default ValidationForm