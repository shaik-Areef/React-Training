import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactUs from "./ContactUs";
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

describe("<ContactUs />", () => {
    const mockData = {
        contactUs: {
            "address": "280 ParK Avenue Z,Cross cut Complex, Bangalore, India",
            "phone": [
                "(91) 987 654 3210",
                "(91) 987 654 3211"
            ],
            "email": "contact@sparkclothing.com"
        }
    }

    const mockStore = configureStore();
    function renderComponent() {
        let store = mockStore(mockData)
        render(
            <Provider store={store}> <ContactUs /></Provider>
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
        const mRes = { json: jest.fn().mockResolvedValueOnce(mockData.contactUs) };
        const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
        (global).fetch = mockedFetch;
        renderComponent();
        await screen.findByText("contact@sparkclothing.com")
        expect(mockedFetch).toBeCalledTimes(1);
        expect(mRes.json).toBeCalledTimes(1);

        const button = await screen.findByRole("button", { name: "Submit" });
        const name = await screen.findByTestId("user-name")
        userEvent.type(name, "Johnson");
        const email = await screen.findByTestId("user-email")
        userEvent.type(email, "johnson@g.com");
        const phone = await screen.findByTestId("user-phone")
        userEvent.type(phone, "1234567891");
        const feedback = await screen.findByTestId("user-message")
        userEvent.type(feedback, "test feed back");
        userEvent.click(button);
        expect(mockedFetch).toBeCalledTimes(2);
    });


    test("should render without crashing", () => {
        renderComponent();
        expect(screen).toBeDefined();
    });
});