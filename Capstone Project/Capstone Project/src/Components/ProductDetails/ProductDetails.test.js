import ProductDetails from "./ProductDetails";
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


describe("<ProductDetails />", () => {
    const mockProductDetails = {
        "id": "fdf80882-1fe3-4d20-8dcd-1c2e4d5e3b1e",
        "title": "Mast & Harbour",
        "description": "Regular Checked Casual Shirt",
        "price": 2999,
        "imgUrl": "Assets/images/products/Product1.jpg",
        "rating": "2.3"
    };

    const mockReviews = [
        {
            "name": "Johnson ",
            "email": "johnson@g.com",
            "phone": "23456",
            "feedback": "wergthghmh klsnlksenkje geg elsejne tslhjlsngensgn lejgej ",
            "rating": 4,
            "productId": "fdf80882-1fe3-4d20-8dcd-1c2e4d5e3b1e",
            "id": 1
        }
    ]
    const initialState = { products: { productDetails: mockProductDetails, reviews: mockReviews } }
    const mockStore = configureStore();

    function renderComponent() {
        let store = mockStore(initialState)
        render(
            <Provider store={store}> <ProductDetails /></Provider>
        );
    }

    let originFetch;

    beforeEach(() => {
        originFetch = (global).fetch;
    });

    afterEach(() => {
        (global).fetch = originFetch;
    });

    test("should render without crashing", () => {
        renderComponent();
        expect(screen).toBeDefined();
    });
    
    test('should render component', async () => {
        const mRes = { json: jest.fn().mockResolvedValueOnce(mockProductDetails) };
        const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
        (global).fetch = mockedFetch;
        const dummyDispatch = jest.fn()
        renderComponent();
        await screen.findByText("Regular Checked Casual Shirt");
    });
});