import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import FeedbackModal from "../../Pages/ProductPage/FeedbackModal/FeedbackModal";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './ProductDetails.css'

function ProductDetails() {
    const [reviews, setReviews] = useState([])
    const [data, setData] = useState({})
    const [show, setShow] = useState(false);

    const params = useParams();
    useEffect(() => {
        fetch("http://localhost:5000/data/" + params.id)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                console.log("get product details successfully");
                setData(res)
            })
        getAllReviews()
    }, []);

    useEffect(() => {
        if (reviews.length && data) {
            if (data?.rating !== getrating()) {
                fetch("http://localhost:5000/data/" + params.id, {
                    method: 'PUT',
                    body: JSON.stringify({ ...data, rating: getrating() }),
                    headers: { "Content-type": "application/json" }
                })
                    .then((res) => res.json())
                    .then((res) => {
                        console.log(res);
                        console.log("Updated rating successfully");
                    })

            }
        }
    }, [reviews]);


    const getAllReviews = () => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((res) => {
                let result = res.filter((item) => {
                    return item.productId === params.id
                })
                setReviews(result)
                console.log("get reviews successfully");
            })

    }

    const handleClose = (isPostReview) => {
        setShow(false);
        if (isPostReview) {
            getAllReviews()
        }
    };
    const handleShow = () => {
        setShow(true);
    };


    const getrating = () => {
        if (reviews.length) {
            let rating = 0
            reviews.map(item => {
                rating = rating + item.rating
            })
            return (rating / reviews.length).toFixed(1)
        }
        return 0;
    }

    return (
        <div id='container'>
            <div id="mainblock">
                <div id="subBlock">
                    <img src={process.env.PUBLIC_URL + '/' + data.imgUrl} alt={data.title} />
                </div>
                <div id="subBlock">
                    {/* <h5><strong>{data.title}</strong></h5> */}
                    <h1>{data.title}</h1>
                    <div> <Form.Label >Description: </Form.Label>
                        <Form.Text muted>
                            {data.description}
                        </Form.Text></div>
                    <div><Form.Label >Price: </Form.Label><Form.Text muted>{data.price} </Form.Text></div>
                    <div><Form.Label >Rating: </Form.Label><Form.Text muted>{getrating()} ⭐ | {reviews.length}</Form.Text></div>
                    <Button style={{ padding: 0 }} variant="link" onClick={handleShow}>
                        Feedback
                    </Button>

                    {show && <FeedbackModal productId={data.id} onClose={handleClose} reviews={reviews} />}
                </div>
            </div>
            <div>
                <h4>{"Reviews"}</h4>

                <Container fluid>
                    {reviews.map(review =>
                        <Row>
                            <Col>
                                <Card style={{
                                    width: "100%",
                                    alignItems: "flex-start",
                                    height: "fit-content;",
                                    border: "2px solid cadetblue"
                                }}>
                                    <Card.Body>
                                        <Card.Title><div className={"avatar"}>{review.name[0].toUpperCase()}</div>{review.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted"> {review.email}</Card.Subtitle>
                                        <Card.Text>
                                            {review.feedback}
                                        </Card.Text>

                                        <Card.Link href={() => ""}>{review.rating} ⭐</Card.Link>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>)}
                </Container>
            </div>
        </div >
    )
}
export default ProductDetails