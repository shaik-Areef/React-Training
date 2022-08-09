import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './Products.css'

function Products() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/data")
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setData(json)
            })
    }, []);

    return (
        <Container>
            <Row>
                {data.map((user) => (
                    <Col style={{ margin: "8px" }}>
                        <div className="product-card"
                            key={user.id}
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