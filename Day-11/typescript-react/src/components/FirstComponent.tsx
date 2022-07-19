
import * as React from "react";

export default class FirstComponent extends React.Component<{}> {
   onChangeHandler:any=()=>{
               
  }
  render() {
    return (
      <div>
        <h3>A Simple React Component Example with Typescript</h3>
    

          <div> Fist Name:<input type="text" name='fname' onChange={(event)=>event.target.value} placeholder='enter first Name' /></div>
          <div> Last Name:<input type="text" name='lname' placeholder='enter last Name' /></div>
          <div> Gender:<input type="radio" /> Male  <input type="radio"/> Female</div>

          <div><input type='button' value='save' onClick={this.onChangeHandler()}/></div>
          

        
      </div>
    );
  }
}