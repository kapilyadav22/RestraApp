import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './shimmer';
import { useRestrauMenu } from '../utils/useRestrauMenu';
import RestraurantCategory from './restraurantCategory';

const RestraurantMenuSwiggy = () => {
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(-1);

    //custom hook
    const restrauMenu = useRestrauMenu(resId);
    const { id, name, cuisines, costForTwoMessage } = restrauMenu?.cards[0]?.card?.card?.info || {};
    const categories = restrauMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    console.log(categories);

    return (
        <div className='text-center'>
            {(restrauMenu === null) ? <Shimmer /> : (
                <div>
                    <h1 className='font-bold my-6 text-2xl'>{name}</h1>
                    {/* <p className='font-bold text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</p>  */}
                    {
                        categories.map((category, index) => (
                            //controlled Component
                            <RestraurantCategory 
                            key={category?.card?.card.title} 
                            data = {category?.card?.card}
                            showItem = {index===showIndex?true:false}
                            handleExpandItems = {()=> setShowIndex(index)}
                            />
                        ))
                    }
                </div>
            )
            }
        </div>
    )
};

export default RestraurantMenuSwiggy;
