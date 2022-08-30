import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { getProducts } from '../../../Redux/Actions/Actions'
import { useDispatch, useSelector } from 'react-redux'
import './Products.css'

function Products() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.productsData)

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const result = await getProducts();
        if (result?.payload) {
            dispatch(result);
        }
    }

    return (
        <Container>
            <Row>
                {products.map((user) => (
                    <Col key={user.id} style={{ margin: "8px" }}>
                        <div className="product-card"
                            data-testid={"product-card"} >
                            <Card style={{ width: '18rem' }}>
                                <Link to={user.id}>
                                    <Card.Img height={"200px"}
                                        width={"50px"}
                                        variant="top"
                                        id="product-img"
                                        src={process.env.PUBLIC_URL + '/' + user.imgUrl}
                                        alt={user.title} />
                                </Link>
                                <Card.Body>
                                    <Card.Title>
                                        {user.title}
                                    </Card.Title>
                                    <Card.Text>
                                        {user.description}
                                    </Card.Text>
                                    <div>
                                        <Form.Label >
                                            Price:
                                        </Form.Label>
                                        <Form.Text muted>
                                            {user.price}
                                        </Form.Text>
                                    </div>
                                    <div>
                                        <Form.Label>
                                            Rating:
                                        </Form.Label>
                                        <Form.Text muted>
                                            {user.rating} ⭐
                                        </Form.Text>
                                    </div>
                                    <Card.Link as={Link} to={user.id}>
                                        View more
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container >
    )
}
export default Products