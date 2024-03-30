import { useState } from "react";
import pic from '../assets/icons/about-me.png'

const User = (props) => {
    const [count] = useState(0);

    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-2">
                <h1 className="text-xl font-bold mb-2">User Profile</h1>
                <div className="flex items-center mb-4">
                    <img className="w-10 h-10 rounded-full mr-2" src={pic} alt="Profile" />
                    <div>
                        <h2 className="text-lg font-bold">{props.name}</h2>
                        <p className="text-gray-600">Location: Delhi</p>
                    </div>
                </div>
                <div className="text-gray-700">
                    <p>Contact: +91234567899</p>
                    <p>Linkedin: kapilyadav22</p>
                </div>
            </div>
        </div>
    );
};

export default User;
