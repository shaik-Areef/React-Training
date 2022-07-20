import React,{useState} from "react";
function DropdownMenu() {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const handleClick = () => {
      setIsOpen((currentIsOpen) => !currentIsOpen);
    };
  
    let menu;
    if (isOpen) {
      menu = (
        <ul>
          <li>Edit</li>
          <li>Remove</li>
          <li>Archive</li>
        </ul>
      );
    }
    return (
      <div>
        <button onClick={handleClick}>Actions</button>
        {menu}
      </div>
    );
  }
  
export default DropdownMenu