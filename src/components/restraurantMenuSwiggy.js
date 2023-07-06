import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './shimmer';
import { menuUrl } from './constants';

const RestraurantMenuSwiggy = () => {
    const [restrauMenu, setrestrauMenu] = useState(null);
    const { resId } = useParams();
    console.log(resId);

    useEffect(() => {
        getRestraurants();
    }, []);

    const getRestraurants = async () => {
        try {
            const data = await fetch(menuUrl + resId);
            const json = await data.json();

            setrestrauMenu(json.data);
            console.log(json.data);
        }
        catch (error) {
            console.log(error);
        }
    };

    const { id, name, cuisines, costForTwoMessage } = restrauMenu?.cards[0]?.card?.card?.info || {};

    const { itemCards } = restrauMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};


    return (
        <div className='body'>
            {(restrauMenu === null) ? <Shimmer /> : (
                <div>
                    <h2>Restraurant Id is : {id}</h2>
                    <h2>{name}</h2>
                    <h3>{cuisines.join(", ")}</h3>
                    <h3>{costForTwoMessage} </h3>
                    <ul>
                        {itemCards.map((item) => (
                            <li key={item.card.info.id}>
                                {item.card.info.name} - {" "} {"Rs."}
                                {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                            </li>
                        ))}
                    </ul>
                </div>
            )
            }
        </div>
    )
};

export default RestraurantMenuSwiggy;
