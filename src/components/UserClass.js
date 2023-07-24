import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        // console.log("when class is initiated, firstly constructor is called");
        super(props);

        // this.state = {
        //     count: 0,
        //     // count2: 2,
        // };

        this.state = {
            userInfo: {
                name: "dummy",
                location: "Default",
            },
        }
        // console.log(this.props.name + "1. constructor called");
    }

   async componentDidMount() {
        // console.log(this.props.name + " 3. Child Component did Mount.");
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate(){
        console.log("component updated");
    }

    componentWillUnmount(){
        console.log("will invoked when the component will unmounted");
    }
    //render method return jsx, which will be converted to html and displayed on web page
    render() {
        // console.log(this.props.name + "2. render called");
        const { name, location } = this.state.userInfo;
        const { count} = this.state;
        return (
            <div className="user-card">
                <h4>Count : {count}</h4>
                <button onClick={() => {
                    //never update state variables directly => this.state.count = this.state.count +1 ;
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>
                    Count Increase
                </button>
                {/* <h4>Count : {count2}</h4> */}
                <h2>Name : {name}</h2>
                <h3>Location : {location} </h3>
                <h3> Contact : 8447578408</h3>
                <h3> Linkedin : kapilyadav22</h3>
            </div>
        );
    }
}

export default UserClass;