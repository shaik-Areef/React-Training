import { Nav, Navbar, NavLink, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navigationbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigationbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/" ><span id='shopName'><img id='Logo' src={process.env.PUBLIC_URL + '/Assets/images/LOGO.jpg'} alt="Logo" /> SCcart</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="  ml-auto justify-content-end " id="responsive-navbar-nav">
                <Nav>
                    <NavItem>
                        <NavLink eventKey="1" as={Link} to="/">
                            <span><img className="icon" src={process.env.PUBLIC_URL + '/Assets/icons/Home.png'} alt="Home" />Home</span>
                        </NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink eventKey="2" as={Link} to="/products/product-category">
                            <span><img className="icon" src={process.env.PUBLIC_URL + '/Assets/icons/Product.png'} alt="ProductIcon" />Products</span>
                        </NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink eventKey="3" as={Link} to="/about-us">
                            <span><img className="icon" src={process.env.PUBLIC_URL + '/Assets/icons/AboutUs.png'} alt="AboutUsIcon" />AboutUs</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey="4" as={Link} to="/contact-us">
                            <span><img className="icon" src={process.env.PUBLIC_URL + '/Assets/icons/ContactUs.png'} alt="ContactUsIcon" />ContactUs</span>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Navigationbar;

