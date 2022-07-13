import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";

test("incrementCounter", () => {
    render(<Counter />);

    //select the elements you want to interact with
    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByTestId("increment");

    //interact with those elements
    fireEvent.click(incrementBtn);

    //assert the expected result
    expect(counter).toHaveTextContent("1");

    console.log('testing......')
})

test("decrimentCounter", () => {
    render(<Counter />);

    const counter = screen.getByTestId("counter");
    const decrementBtn = screen.getByTestId("decrement");

    fireEvent.click(decrementBtn);

    expect(counter).toHaveTextContent("-1");

    console.log('testing......')
})

test("resetCounter", () => {
    render(<Counter />);

    const counter = screen.getByTestId("counter");
    const resetBtn = screen.getByTestId("reset");

    fireEvent.click(resetBtn);

    expect(counter).toHaveTextContent("0");

    console.log('testing......')
})

// test("second testcase", () => {
//     console.log('second testcase...')
// })