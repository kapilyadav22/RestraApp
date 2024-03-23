import React from 'react'
import { IMG_CDN_URL, ratingURL} from './urlConstants';
import '../styling/cardimage.css';

export const styleCard = {
    backgroundColor: "#ececec"
}

const RestraurantCard = ({resData}) => {
    const { cloudinaryImageId, name, avgRating, cuisines, locality,areaName,sla, costForTwo} = resData.info;
    return (
        <div className='cardcontainer' >
            <img
                className="cardimage"
                alt=""
                src={IMG_CDN_URL + cloudinaryImageId}>
            </img>
            <div>
                    <h4 className='font-bold p-2 text-lg titleellipsis'>{name}</h4>
                    <div className='rating-space flex justify-justify mr-2'>
                        <img className="h-4 w-4 translate-y-1 mr-1 rounded-lg" src= {ratingURL} alt=""
                        />
                        <span className='mr-4 font-bold text-sm'>{avgRating }</span>
                        <span className='mr-3 font-bold text-sm'>• {sla?.lastMileTravelString}</span>
                        <span className='font-bold text-sm'>• {sla?.slaString}</span>
                    </div>
                    <span className="ellipsis">{cuisines.join(", ")}</span> <br />
                    <span className="ellipsis">{`${locality}, ${areaName}`}</span> <br />
                    <span className='font-bold text-sm'>{costForTwo}</span> <br />
                </div>
            </div>
       
    )
};

//higher order component
export const withDisCountedLabel = (RestraurantCard) =>{
    //returns a component
    return (props) => {
        //returns jsx inside that component
        return (
            <div>
                <label className='absolute bg-black text-white ml-5 mt-2   p-2 rounded-lg'>Promoted</label>
                <RestraurantCard {...props}/>
            </div>
        )
    }
}

export default RestraurantCard;