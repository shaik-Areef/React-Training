
import * as React from "react";
import * as ReactDOM from "react-dom";
import FirstComponent from './components/FirstComponent'
import OrderForm from "./components/OrderForm";
import UserComponent from './components/UserComponent'
ReactDOM.render(
    <div className="container">
      <h1>Hello, Welcome to React and TypeScript</h1>
      <OrderForm/>
      {/* <FirstComponent/>
      <UserComponent name="John Doe" age={26} address="87 Summer St, Boston, MA 02110" dob={new Date()} /> */}
    </div>,
    document.getElementById("root")
);