
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Navigationbar from './Components/NavigationBar/Navigationbar';
import AboutUs from './Pages/AboutPage/AboutUs/AboutUs';
import ContactUs from './Pages/ContactPage/ContactUs/ContactUs';
import Products from './Pages/ProductPage/Products/Products';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import TabProducts from './Components/TabProucts/Tabproducts';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar />
        <Routes>
          <Route exact path='/' element={<TabProducts/>} />
          <Route exact path='/products/product-category' element={<Products />} />
          <Route exact path='/products/product-category/:id' element={<ProductDetails />} />
          <Route exact path='/about-us' element={<AboutUs />} />
          <Route exact path='/contact-us' element={<ContactUs />} />
        </Routes>
      </Router>
    {/* <GetInTouch/> */}
      
    </div>
  );
}

export default App;
