import { render, screen } from "@testing-library/react";
import AboutUs from "./AboutUs";
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

describe("AboutUs test cases", () => {
    const initialState = {
        aboutUs: {
            "tagLine": "We have the capabilities and experience to deliver the products you need to move forward.",
            "history": "company history"
        }
    }
    const mockStore = configureStore();
    function renderComponent() {
        let store = mockStore(initialState)
        render(
            <Provider store={store}> <AboutUs /></Provider>
        );
    }

    let originFetch;
    beforeEach(() => {
        originFetch = (global).fetch;
    });
    afterEach(() => {
        (global).fetch = originFetch;
    });

    test('should render component', async () => {
        const mRes = { json: jest.fn().mockResolvedValueOnce(initialState) };
        const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
        (global).fetch = mockedFetch;
        renderComponent();
        await screen.findByText("company history")
        expect(mockedFetch).toBeCalledTimes(1);
        expect(mRes.json).toBeCalledTimes(1);
    });
    
    test("should render without crashing", () => {
        renderComponent();
        expect(screen).toBeDefined();
    });
});