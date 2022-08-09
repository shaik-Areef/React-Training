import { useEffect, useState } from "react";
import GetInTouch from "./GetInTouch/GetInTouch";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ContactUs.css'

function ContactUs() {
    const [hidden, setHidden] = useState(true);
    const [contact, setContact] = useState({});
    useEffect(() => {
        fetch(" http://localhost:5000/contactData")
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setContact(json)
            })
    }, []);


    const onSubmitHandler = async (data) => {
        await fetch("http://localhost:5000/getInTouchData", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json" }
        })
        setHidden(true)
    }



    return (
        <div id='maindiv'>
            {/* <div id='imagediv'>
                <h2> </h2>
            </div>


            <div id='btndiv'> {hidden ? <Button
                onClick={() => setHidden(s => !s)}
                variant="link">
                Get In Touch
            </Button> :}
            </div> */}
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
                                textAlign: "center",
                                // backgroundImage: `url("${process.env.PUBLIC_URL}/Assets/images/getintouch.png")`

                            }}>
                                <img width={"100%"} height={"300px"} src={`${process.env.PUBLIC_URL}/Assets/images/getintouch.png`}></img>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
            <div id="footer">
                <Container fluid>

                    <Row>
                        <Col>
                            <div id='addressdiv'><p><b>Address :</b> {contact.address}</p></div>
                        </Col>
                        <Col>
                            <div id='contactdiv'><p><b> phone:</b> {contact.phone ? contact.phone[0] + " , " + contact.phone[1] : ""}</p></div>
                        </Col>
                        <Col>            <div id='emaildiv'> <p><b> Email:</b> {contact.email}</p></div>


                        </Col>
                    </Row>
                </Container>
            </div>



        </div>
    )

}
export default ContactUs