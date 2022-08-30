import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FeedbackModal from "./FeedbackModal";


const mockReviewsData = [
    {
        name: "Johnson ",
        email: "johnson@g.com",
        phone: "23456",
        feedback: "wergthghmh klsnlksenkje geg elsejne tslhjlsngensgn lejgej ",
        rating: 4,
        productId: "fdf80882-1fe3-4d20-8dcd-1c2e4d5e3b1e",
        id: 1
    }]

describe("<FeedbackModal />", () => {
    let originFetch;
    let mockOnClose;
    beforeEach(() => {
        originFetch = (global).fetch;
        mockOnClose = jest.fn();
    });
    afterEach(() => {
        (global).fetch = originFetch;
    });

    function renderComponent() {

        render(
            <FeedbackModal reviews={mockReviewsData} onClose={mockOnClose} />
        );
    }
    test("should render without crashing", () => {
        renderComponent();
        expect(screen).toBeDefined();
    });

    test("check submit button click and validations", async () => {
        const fakeResponse = { id: 1 };
        const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
        const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
        (global).fetch = mockedFetch;
        renderComponent();
        const button = await screen.findByRole("button", { name: "Submit" });
        userEvent.click(button);
        await screen.findByText("*Please fill the all fields.");

        const name = await screen.findByTestId("user-name")
        userEvent.type(name, "Johnson");
        const email = await screen.findByTestId("user-email")
        userEvent.type(email, "johnson@g.com");
        const phone = await screen.findByTestId("user-phone")
        userEvent.type(phone, "1234567891");
        const feedback = await screen.findByTestId("user-feedback")
        userEvent.type(feedback, "test feed back");
        const ratingContainer = await screen.findByTestId("rating-container")
        const rating = ratingContainer.getElementsByClassName("far")[0]
        userEvent.click(rating);
        userEvent.click(button);
        await screen.findByText("*User already submited review for this product, Please change above email and try again.");

        userEvent.type(email, "j@g.com");
        userEvent.click(button);
        await screen.findByText("*Feedback need atleast 50 charectors");

        userEvent.type(feedback, "test feed back test feed back test feed back test feed back test feed back test feed back test feed back");
        userEvent.click(button);
        await waitFor(()=>{
            expect(mockOnClose).toBeCalled();
            expect(mockedFetch).toBeCalledTimes(1);
        })
    });
});