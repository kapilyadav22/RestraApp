import React from 'react';
import User from './User';

class About extends React.Component {

  constructor(props){
    super(props);
  }

  async componentDidMount(){
    
  }

  render() {
    return (
      <div className="container mx-auto px-4 py-8 justify-center">
        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
        <User name={"Kapil Yadav "} location={"Delhi"} />
      </div>
    )
  }
}

export default About;
