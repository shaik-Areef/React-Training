import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactUs from "./ContactUs";

describe("<ContactUs />", () => {
    function renderComponent() {
        render(
            <ContactUs />
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
        const fakeResponse = { email: "contact@sparkclothing.com", phone: ["12345678", "2345678"] };
        const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
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