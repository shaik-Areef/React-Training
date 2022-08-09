import { useState } from 'react';
import './GetInTouch.css';

function GetInTouch(props) {
    const [errorMessage, setErrorMessage] = useState("")
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const onChangeHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    };

    const onClickHandler = () => {
        let errorMsg = validation();
        if (!errorMsg) {
            setErrorMessage(errorMsg);
            props.onSubmit(data);
            setData({
                name: '',
                email: '',
                phone: '',
                message: ''
            })
        } else {
            setErrorMessage(errorMsg);
        }
    }

    const validation = () => {
        if (!data.name || !data.email || !data.phone || !data.message) {
            return "*Please fill the all fields."
        }
    }

    return (
        <div>
            <div id='mainBlock'>
                <div id='block'>
                </div>
                <div className="container" id='block'>
                    <div className="row">
                        <div className="col-sm-12">
                            <input className="form-control" data-testid="user-name" type='text' value={data.name} name='name' onChange={onChangeHandler} placeholder="Name" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <input className="form-control" data-testid="user-email" type='text' placeholder="Email" name='email' value={data.email} onChange={onChangeHandler} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <input className="form-control" data-testid="user-phone" type='number' placeholder="phone" name='phone' value={data.phone} onChange={onChangeHandler} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <textarea className="form-control" data-testid="user-message" placeholder="Message...." name='message' value={data.message} onChange={onChangeHandler} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div style={{ color: 'red' }}>{errorMessage}</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <button className="btn btn-primary mb-3" onClick={onClickHandler} >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GetInTouch