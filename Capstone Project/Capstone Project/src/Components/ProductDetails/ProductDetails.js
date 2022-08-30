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
import { getProductDetails, getProductReviews, updateProductReview } from "../../Redux/Actions/Actions";
import { useDispatch, useSelector } from 'react-redux'

function ProductDetails() {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const product = useSelector((state) => state.products.productDetails)
    const reviews = useSelector((state) => state.products.reviews)
    const params = useParams();
    useEffect(() => {
        fetchProduct();
        getAllReviews();
    }, []);

    const fetchProduct = async () => {
        const result = await getProductDetails(params.id);
        if (result?.payload) {
            dispatch(result);
        }
    }

    useEffect(() => {
        if (reviews.length && product?.title) {
            if (product?.rating?.toString() !== getrating()?.toString()) {
                updateProductReview(params.id, getrating(), product)
            }
        }
    }, [reviews]);


    const getAllReviews = async () => {
        const result = await getProductReviews(params.id);
        if (result?.payload) {
            dispatch(result);
        }
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
                    <img src={process.env.PUBLIC_URL + '/' + product.imgUrl} alt={product.title} />
                </div>
                <div id="subBlock">
                    <h1>{product.title}</h1>
                    <div> <Form.Label >Description: </Form.Label>
                        <Form.Text muted>
                            {product.description}
                        </Form.Text>
                    </div>
                    <div>
                        <Form.Label >Price: </Form.Label><Form.Text muted>{product.price} </Form.Text>
                    </div>
                    <div>
                        <Form.Label >Rating: </Form.Label><Form.Text muted>{getrating()} ⭐ | {reviews.length}</Form.Text>
                    </div>
                    <Button style={{ padding: 0 }} variant="link" onClick={handleShow}>
                        Feedback
                    </Button>

                    {show && <FeedbackModal productId={product.id} onClose={handleClose} reviews={reviews} />}
                </div>
            </div>
            <div>
                <h4>{"Reviews"}</h4>
                <Container fluid>
                    {reviews.map((review, index) =>
                        <Row key={index}>
                            <Col>
                                <Card style={{
                                    width: "100%",
                                    alignItems: "flex-start",
                                    height: "fit-content;",
                                    border: "2px solid cadetblue"
                                }}>
                                    <Card.Body>
                                        
                                        <Card.Title>
                                            <div className={"avatar"}>
                                                {review.name[0].toUpperCase()}
                                            </div>
                                            {review.name}
                                        </Card.Title>

                                        <Card.Subtitle className="mb-2 text-muted">
                                            {review.email}
                                        </Card.Subtitle>

                                        <Card.Text>
                                            {review.feedback}
                                        </Card.Text>

                                        <Card.Link href={() => ""}>
                                            {review.rating} ⭐
                                        </Card.Link>

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