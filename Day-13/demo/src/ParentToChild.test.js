import { render,fireEvent,screen } from "@testing-library/react";
import Parent from'./ParentToChild';
 test('test2',()=>{
     render (<Parent/>)
     const button= screen.getByTestId('testbtn');
     const pTag=screen.getByTestId('message');
     fireEvent.click(button);
     expect(pTag).toHaveTextContent('Did you do your homework?');

 })