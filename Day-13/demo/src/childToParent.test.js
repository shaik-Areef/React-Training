import { render, fireEvent, screen } from "@testing-library/react";
import Parent1 from "./childToParent";
test('test1', () => {
    render(<Parent1 />)
    const child1 = screen.getByTestId('childBtn1');
    const pTag = screen.getByTestId('message1');
    fireEvent.click(child1)
    expect(pTag).toHaveTextContent('set by Child');
})