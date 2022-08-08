import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Container } from "react-bootstrap";
import './Products.css'

function Products() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/data")
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setData(json)
            })
    }, []);


    return (
        <div>
            <h2>Products Page</h2>
            {data.map((user) => (
                <div className="product-card" key={user.id}>
                    <Container >
                        <Row>
                            <Col xs={6} md={4}>
                                <Link to={user.id}>  <img id="product-img" src={process.env.PUBLIC_URL + '/' + user.imgUrl} alt={user.title} /> </Link>
                            </Col>
                        </Row>
                    </Container >;

                </div>
            ))}

        </div>
    )

}
export default Products