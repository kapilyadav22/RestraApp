import React, { useEffect, useState } from 'react';
import RestraurantCard from './restraurantCard';
import { swiggy_api_URL } from './constants';
import Shimmer from './shimmer';
import { Link } from 'react-router-dom';

function filterData(text, restraurants) {
    const reslist = restraurants.filter((restraurant) => 
    restraurant?.data?.name?.toLowerCase()?.includes(text.toLowerCase()));
    return reslist;
}

//not using key is not acceptable << index as key is not recommended << unique key is best practice
export default function Body() {
    const [allRestraurants, setAllRestraurants] = useState([]);
    const [filterRestraurants, setFilterRestraurants] = useState([]);
    const [text, setText] = useState("");

    async function getRestraurants() {
        try {
            const data = await fetch(swiggy_api_URL);
            const json = await data.json();
            
            setAllRestraurants(json?.data?.cards[2]?.data?.data?.cards);
            setFilterRestraurants(json?.data?.cards[2]?.data?.data?.cards);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRestraurants();
    }, []);

    // Conditional rendering
    // if restraurantdata==null load shimmer ui
    // else if restaurandata!=null load actual data

    //early return 
    if (!allRestraurants) return null;

    // if(filterRestraurants?.length===0) return <h1>No Restraurant Found</h1>

    return (
        <>
            <div className='body'>
                <div className="search-container">
                    <input type="text"
                        className="search-input"
                        placeholder="Search"
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                    <button className="search-btn"
                        onClick={() => {
                            const data = filterData(text, allRestraurants);
                            setFilterRestraurants(data);
                        }}
                    >
                        Search
                    </button>
                </div>


                {(allRestraurants?.length === 0) ? <Shimmer /> :
                ( 
                <div className="res-container">
                    {   
                    (filterRestraurants?.length===0)? <h1>No Restraurant Found</h1>:
                    filterRestraurants.map((restraurant) => {
                        return (  
                        <Link key={restraurant.data.id} className='link' to={"/Restraurant/:resId"}>
                        <RestraurantCard  resData={restraurant}></RestraurantCard> 
                        </Link>
                         );
                        })    
                    }
                </div>
                )}
            </div>
        </>
    )
}

