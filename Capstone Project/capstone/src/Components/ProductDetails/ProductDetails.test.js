import ProductDetails from "./ProductDetails";
import { render, screen } from "@testing-library/react";

describe("<ProductDetails />", () => {
    function renderComponent() {
        render(
            <ProductDetails />
        );
    }

    let originFetch;

    beforeEach(() => {
        originFetch = (global).fetch;
    });
    afterEach(() => {
        (global).fetch = originFetch;
    });
    // it('should render component', async () => {
    //     const fakeResponse = {
    //         "id": "fdf80882-1fe3-4d20-8dcd-1c2e4d5e3b1e",
    //         "title": "Mast & Harbour",
    //         "description": "Regular Checked Casual Shirt",
    //         "price": 2999,
    //         "imgUrl": "Assets/images/products/Product1.jpg",
    //         "rating": "2.3"
    //     };
    //     const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    //     const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    //     (global).fetch = mockedFetch;
        
    //     renderComponent();
    //     await screen.findByText("Regular Checked Casual Shirt");
    //     expect(mockedFetch).toBeCalledTimes(1);
    //     expect(mRes.json).toBeCalledTimes(1);
    // });


    test("should render without crashing", () => {
        renderComponent();
        expect(screen).toBeDefined();
    });
});