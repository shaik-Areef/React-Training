import { render, screen } from "@testing-library/react";
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
    function renderComponent() {
        render(
            <FeedbackModal reviews={mockReviewsData} />
        );
    }

    test("should render without crashing", () => {
        renderComponent();
        expect(screen).toBeDefined();
    });

    test("check submit button click", async () => {
        const { container } = render(
            <FeedbackModal reviews={mockReviewsData} />
        );
        const button = await screen.findByRole("button", { name: "Submit" });
        userEvent.click(button);
        await screen.findByText("*Please fill the all fields.");

        // const name = await screen.findByTestId("user-name")
        // userEvent.type(name, "Johnson");
        // const email = await screen.findByTestId("user-email")
        // userEvent.type(email, "johnson@g.com");

        // const phone = await screen.findByTestId("user-phone")
        // userEvent.type(phone, "1234567891");
        // const feedback = await screen.findByTestId("user-feedback")
        // userEvent.type(feedback, "test feed back");
        // const rating = container.getElementsByClassName("fa-frown")[0];
        // userEvent.click(rating);
        // userEvent.click(button);
        // await screen.findByText("User already submited review for this product, Please change above email and try again.");

    });
});