import { useEffect, useState } from "react";
import GetInTouch from "../GetInTouch/GetInTouch";
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ContactUs.css'
import { getContactUsUsDetails, postGetInTuchDetails } from "../../../Redux/Actions/Actions";

function ContactUs() {
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contactUs)

    useEffect(() => {
        fetchContactUsDeatils();
    }, []);

    const fetchContactUsDeatils = async () => {
        const result = await getContactUsUsDetails();
        if (result?.payload) {
            dispatch(result);
        }
    }

    const onSubmitHandler = (data) => {
        postGetInTuchDetails(data);
    }

    return (
        <div id='maindiv'>
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <GetInTouch onSubmit={onSubmitHandler} />
                        </Col>
                        <Col>
                            <div style={{
                                width: "100%",
                                height: "50%",
                                textAlign: "center"
                            }}>
                                <img width={"100%"}
                                    height={"300px"}
                                    src={`${process.env.PUBLIC_URL}/Assets/images/getintouch.png`}>
                                </img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="footer">
                <Container fluid>
                    <Row>
                        <Col>
                            <div id='addressdiv'>
                                <p><b>Address :</b> {contact.address}</p>
                            </div>
                        </Col>
                        <Col>
                            <div id='contactdiv'>
                                <p><b> phone:</b> {contact.phone ? contact.phone[0] + " , " + contact.phone[1] : ""}</p>
                            </div>
                        </Col>
                        <Col>
                            <div id='emaildiv'>
                                <p><b> Email:</b> {contact.email}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default ContactUs