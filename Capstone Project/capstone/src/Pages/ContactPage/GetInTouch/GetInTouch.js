import { useState } from 'react';
import './GetInTouch.css';
function GetInTouch(props) {
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
        props.onSubmit(data);
        setData({
            name: '',
            email: '',
            phone: '',
            message: ''
        })

    }

    return (
        <div>
            <div id='mainBlock'>
                <div id='block'>
                    {/* <h2>Get In Touch</h2> */}
                </div>
                <div className="container" id='block'>
                    <div className="row">
                        <div className="col-sm-12">
                            <input className="form-control" type='text' value={data.name} name='name' onChange={onChangeHandler} placeholder="Name" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <input className="form-control" type='text' placeholder="Email" name='email' value={data.email} onChange={onChangeHandler} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <input className="form-control" type='number' placeholder="phone" name='phone' value={data.phone} onChange={onChangeHandler} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <textarea className="form-control" placeholder="Message...." name='message' value={data.message} onChange={onChangeHandler} />
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