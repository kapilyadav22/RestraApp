import React from 'react';
import UserClass from './classBasedComponents/UserClass';

class About extends React.Component {

  constructor(props){
    // console.log("1. parent constructor.");
    super(props);

  }

  async componentDidMount(){
    // console.log("3. parents component mount")
    
  }

  render() {
    // console.log("2. Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <p>This is Our About Section Page</p>
        {/* <User name = {"Kapil Yadav (function)"}/> */}
        <UserClass name={"Kapil Yadav (classes)"} location={"Delhi"} />
      </div>
    )
  }
}

export default About;


