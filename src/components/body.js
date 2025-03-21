import React, { useEffect, useState } from 'react';
import RestraurantCard, { withDisCountedLabel } from './restraurantCard';
import { swiggy_api_URL } from './urlConstants';
import Shimmer from './shimmer';
import { Link } from 'react-router-dom';
import { useOnlineStatus } from '../utils/useOnlineStatus';


function filterData(text, restraurants) {
    const reslist = restraurants.filter((restraurant) =>
        restraurant?.info?.name?.toLowerCase()?.includes(text.toLowerCase()));
    return reslist;
}

//not using key is not acceptable << index as key is not recommended << unique key is best practice
export default function Body() {
    const [allRestraurants, setAllRestraurants] = useState([]);
    const [filterRestraurants, setFilterRestraurants] = useState([]);
    const [text, setText] = useState("");

    const RestraurantCardDiscounted = withDisCountedLabel(RestraurantCard);

    async function getRestraurants() {
        try {
            const data = await fetch(swiggy_api_URL);
            const json = await data.json();
            setAllRestraurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilterRestraurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRestraurants();
    }, []);


    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>Please check your internet!!! Please check Your Internet Connection</h1>
        )
    }
    // Conditional rendering
    // if restraurantdata==null load shimmer ui
    // else if restaurandata!=null load actual data

    //early return 
    if (!allRestraurants) return null;

    // if(filterRestraurants?.length===0) return <h1>No Restraurant Found</h1>

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="search p-4 m-4 items-center">
                    <input type="text"
                        className="p-2 rounded-lg border border-solid border-black"
                        placeholder="Search"
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                    <button className="px-4 py-2 m-4 bg-green-400 rounded-lg"
                        onClick={() => {
                            const data = filterData(text, allRestraurants);
                            setFilterRestraurants(data);
                        }}
                    >
                        Search
                    </button>
                </div>

                {(allRestraurants?.length === 0) ? <Shimmer /> : (
                    <div className="flex flex-wrap h-52"> {
                        (filterRestraurants?.length === 0) ? <h1>No Restraurant Found</h1> :
                            filterRestraurants.map((restraurant) => {
                                return (
                                    <Link key={restraurant.info.id}
                                        className='link'
                                        to={"/Restraurant/" + restraurant.info.id}>
                                        { /*if discounted rate is there, use discounted label*/
                                            restraurant.info.aggregatedDiscountInfoV3 ?
                                                (<RestraurantCardDiscounted resData={restraurant} />)
                                                : (<RestraurantCard resData={restraurant}></RestraurantCard>)
                                        }
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

