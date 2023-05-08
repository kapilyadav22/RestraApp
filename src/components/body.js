import React, { useState } from 'react'
import restaurantList from '../components/restraList';
import RestraurantCard from './restraurantCard';


function filterData(text, restraurants){
   const reslist = restraurants.filter((restraurant) => restraurant.data.name.includes(text));
    return reslist;
}

//not using key is not acceptable << index as key is not recommended << unique key is best practice
export default function Body() {
   const [restraurants, setrestraurants] = useState(restaurantList);
    const [text, setText] = useState("");

    console.log("ff");
    return (
        <>
        <div className='body'>
            <div className="search-container">
                <input type="text" 
                className="search-input" 
                placeholder="Search" 
                value={text}
                 onChange={(e)=>{
                    setText(e.target.value);
                }}
                 />
                <button className="search-btn"
                onClick={()=>{
                    const data = filterData(text, restraurants);
                        setrestraurants(data);
                }}
                >
                    Search
                </button>
            </div>
            <div className="res-container">
                 {/* <RestraurantCard resData = {restaurantList[0]}></RestraurantCard>
     */}
                {
                    restraurants.map((restraurant) =>
                        (<RestraurantCard key={restraurant.data.id} resData={restraurant}></RestraurantCard>))
                }

            </div>
        </div>
        </>
    )
}

