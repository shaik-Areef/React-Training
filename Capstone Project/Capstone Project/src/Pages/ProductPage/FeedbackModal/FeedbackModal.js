import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postProductFeedback } from '../../../Redux/Actions/Actions';
import Feedback from '../Feedback/Feedback';

function FeedbackModal({ productId, onClose, reviews = [] }) {
    const [errorMessage, setErrorMessage] = useState("")
    const [details, setDetails] = useState({
        name: '',
        email: '',
        phone: '',
        feedback: '',
        rating: 0,
    })

    const validation = () => {
        if (!details.name || !details.email || !details.phone || !details.feedback | !details.rating) {
            return "*Please fill the all fields."
        } else if (reviews.filter(review => review.email.toLowerCase() === details.email.toLowerCase()).length) {
            return "*User already submited review for this product, Please change above email and try again."
        } else if (details.feedback.length < 50) {
            return "*Feedback need atleast 50 charectors"
        }
    }

    const getData = (name, value) => {
        setDetails({ ...details, [name]: value });
    }

    const onClickHandler = async () => {
        let errorMsg = validation();
        if (!errorMsg) {
            setErrorMessage(errorMsg);
            postProductFeedback(details,productId);
            onClose(true);
        } else {
            setErrorMessage(errorMsg);
        }
    }

    return (
        <>
            <Modal show={true} onHide={onClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Feedback</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Feedback onChangeField={getData} details={details} />
                    <div style={{ color: 'red' }}>{errorMessage}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onClickHandler}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default FeedbackModal