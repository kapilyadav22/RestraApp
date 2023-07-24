import React from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './shimmer';
import { useRestrauMenu } from '../utils/useRestrauMenu';

const RestraurantMenuSwiggy = () => {   
    const { resId } = useParams();

    //custom hook
    const restrauMenu = useRestrauMenu(resId);

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
