import { useState } from "react";

const User = (props) => {

    const [count] = useState(0);
    return (
    <div className="user-card">
        <h1>count : {count}</h1>
        <h2>Name : {props.name}</h2>
        <h3>Location : Delhi </h3>
        <h3> Contact : 8447578408</h3>
        <h3> Linkedin : kapilyadav22</h3>
    </div>
    )
}

export default User;