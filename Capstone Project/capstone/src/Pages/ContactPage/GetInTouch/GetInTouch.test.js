import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GetInTouch from "./GetInTouch";

describe("<GetInTouch />", () => {
    const mockFn = jest.fn();
    function renderComponent() {
        render(
            <GetInTouch onSubmit={mockFn} />
        );
    }

    test("should render without crashing", () => {
        renderComponent();
        expect(screen).toBeDefined();
    });

    test("check submit button click", async () => {
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
        const feedback = await screen.findByTestId("user-message")
        userEvent.type(feedback, "test feed back");
        userEvent.click(button);
        expect(mockFn).toBeCalled();
    });
});