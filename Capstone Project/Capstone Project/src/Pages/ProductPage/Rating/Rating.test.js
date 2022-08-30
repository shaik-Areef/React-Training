import { render, screen, } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Rating from "./Rating";

describe("<Rating />", () => {
    function renderComponent() {
        render(
            <Rating />
        );
    }

    test("should render without crashing", () => {
        renderComponent();
        expect(screen).toBeDefined();
    });

    // test('should display list', () => {
    //     renderComponent();
    //     await screen.findByTestId('rating-container');

    // });
    test('should display list', () => {
        let mockFn = jest.fn();
        const { container } = render(<Rating onChangeValue={mockFn} />);
        const rate1 = container.getElementsByClassName("far")[0];
        userEvent.hover(rate1);
        expect(rate1.style).toHaveProperty('color', 'yellow');
        userEvent.click(rate1);
        expect(mockFn).toBeCalledTimes(1);
        userEvent.unhover(rate1);
        const rate2 = container.getElementsByClassName("far")[1];
        userEvent.hover(rate2);
        userEvent.click(rate2);
        userEvent.unhover(rate2);
        expect(mockFn).toBeCalledTimes(2);
        const rate3 = container.getElementsByClassName("far")[2];
        userEvent.hover(rate3);
        userEvent.click(rate3);
        userEvent.unhover(rate3);
        expect(mockFn).toBeCalledTimes(3);
        const rate4 = container.getElementsByClassName("far")[3];
        userEvent.hover(rate4);
        userEvent.click(rate4);
        userEvent.unhover(rate4);
        expect(mockFn).toBeCalledTimes(4);
        const rate5 = container.getElementsByClassName("far")[4];
        userEvent.hover(rate5);
        userEvent.click(rate5);
        userEvent.unhover(rate5);
        expect(mockFn).toBeCalledTimes(5);
    });

});