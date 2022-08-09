import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Feedback from "./Feedback";

describe("<Feedback />", () => {

    test("should render without crashing", () => {
        render(
            <Feedback />
        );
        expect(screen).toBeDefined();
    });

    test('should call onChange prop', async () => {

        const mockOnChangeField = jest.fn();
        const { container } = render(<Feedback onChangeField={mockOnChangeField} />);
        const input = await screen.findByTestId("user-name");
        userEvent.type(input, "a")
        expect(mockOnChangeField).toBeCalledTimes(1);
        const rating = container.getElementsByClassName("fa-frown")[0];
        userEvent.click(rating);
        expect(mockOnChangeField).toBeCalledTimes(2);

    });
});