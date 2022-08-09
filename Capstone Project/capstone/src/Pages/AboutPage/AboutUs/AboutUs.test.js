import { render, screen } from "@testing-library/react";
import AboutUs from "./AboutUs";

describe("AboutUs test cases", () => {
    function renderComponent() {
        render(
            <AboutUs />
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
        const fakeResponse = { history: 'company history' };
        const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
        const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
        (global).fetch = mockedFetch;
        renderComponent();
        await screen.findByText("company history")
        expect(mockedFetch).toBeCalledTimes(1);
        expect(mRes.json).toBeCalledTimes(1);
    });
});