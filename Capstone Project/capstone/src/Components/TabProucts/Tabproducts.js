import Carousel from 'react-bootstrap/Carousel';
import './Tabproducts.css';

function TabProducts() {
  return <div style={{
    margin: "8px",
    marginLeft: "auto",
    width: "60%",
    marginRight: "auto"
  }}>
    <Carousel>
      <Carousel.Item>
        <img height={"400"}
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/Assets/images/carousel/image5.jpg'}
          alt="First slide"
        />
        <Carousel.Caption >
          <h3>Welcome to Men's Fasion world</h3>
          <p>We have the capabilities and experience to deliver the products you need to move forward.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={"400"}
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/Assets/images/carousel/image2.jpg'}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={"400"}
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/Assets/images/carousel/image1.jpg'}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img height={"400"}
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/Assets/images/carousel/image3.jpg'}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div >
}

export default TabProducts;