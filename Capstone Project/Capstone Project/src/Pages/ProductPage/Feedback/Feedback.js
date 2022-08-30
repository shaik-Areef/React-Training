import './Feedback.css';
import Rating from '../Rating/Rating'
const Feedback = (props) => {

    const onChangeHandler = (event) => {
        props.onChangeField(event.target.name, event.target.value)
    }

    const GetValue = (value) => {
        props.onChangeField("rating", value)
    }

    return (
        <div id='mainBlock'>
            <div className="container" id='block'>
                <div className="row justify-content-md-center">
                    <div className="col-sm-6">
                        <input className="form-control"
                            data-testid="user-name"
                            placeholder="Name"
                            name='name'
                            value={props.details?.name}
                            onChange={onChangeHandler} />
                    </div>
                    <div className="col-sm-6">
                        <input className="form-control"
                            data-testid="user-email"
                            placeholder="Email"
                            name='email'
                            value={props.details?.email}
                            onChange={onChangeHandler} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <input className="form-control"
                            data-testid="user-phone"
                            type='number'
                            placeholder="Phone"
                            name='phone'
                            value={props.details?.phone}
                            onChange={onChangeHandler} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <textarea className="form-control"
                            data-testid="user-feedback"
                            type='textarea'
                            placeholder="Feedback with atlest 50 charectors"
                            name='feedback'
                            value={props.details?.Feedback}
                            onChange={onChangeHandler} />
                    </div>
                </div>
            </div>
            <div id='block'>
                <Rating onChangeValue={GetValue} selectedValue={props.details?.rating} />
            </div>
        </div>
    )
}
export default Feedback

