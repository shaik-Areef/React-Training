import { render, screen, waitFor } from "@testing-library/react";
import Products from "./Products";
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {HashRouter as Router} from 'react-router-dom';

describe("<Products />", () => {
    const mockData = {
        products: {
            productsData: [{
                id: "fdf80882-1fe3-4d20-8dcd-1c2e4d5e3b1e",
                title: "Mast & Harbour",
                description: "Regular Checked Casual Shirt",
                price: 2999,
                imgUrl: "Assets/images/products/Product1.jpg",
                rating: "2.3"
            }]
        }
    }
    
    const mockStore = configureStore();
    function renderComponent() {
        let store = mockStore(mockData)
        render(
            <Router><Provider store={store}> <Products /></Provider></Router>
        );
    }
    let originFetch;
    beforeEach(() => {
        originFetch = (global).fetch;
    });
    afterEach(() => {
        (global).fetch = originFetch;
    });

    test('should pass', async () => {

        const mRes = { json: jest.fn().mockResolvedValueOnce(mockData.products.productsData) };
        const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
        (global).fetch = mockedFetch;
        renderComponent();
        await waitFor(() => {
            screen.findByTestId('product-card"')
        })

        expect(mockedFetch).toBeCalledTimes(1);
        expect(mRes.json).toBeCalledTimes(1);
    });

    test("should render without crashing", () => {
        renderComponent();
        expect(screen).toBeDefined();
    });

});