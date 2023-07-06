import React from 'react'
import { IMG_CDN_URL } from './constants';

export const styleCard = {
    backgroundColor: "#ececec"
}

const RestraurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        address, costForTwo
    } = resData.data;
    return (
        <div className='m-4 p-4 w-[250px] rounded-lg bg-pink-50 hover:bg-pink-200 sm:bg-yellow-50 sm:hover:bg-yellow-100' >
            <img
                className="card-image rounded-lg"
                alt=""
                src={IMG_CDN_URL + cloudinaryImageId}>
            </img>
            <div className='res-details'>
                    <h4 className='font-bold p-2 text-lg'>{name}</h4>
                    <div className='flex justify-left'>
                        <img className="h-4 w-4 translate-y-1 mr-1 rounded-lg" src="https://www.clipartmax.com/png/middle/307-3078264_star-rating-icon-rating-star-single-png.png" alt=""
                        />
                        <span>{avgRating}</span> <br />
                    </div>
                    <span>{cuisines.join(", ")}</span> <br />
                    <span>{address}</span> <br />
                    <span>₹{costForTwo / 100}</span> <br />
                </div>
            </div>
       
    )
};

export default RestraurantCard;