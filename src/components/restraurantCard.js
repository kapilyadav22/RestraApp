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
        <div className='res-card' style={styleCard}>
            <img
                className="card-image"
                alt=""
                src={IMG_CDN_URL + cloudinaryImageId}> 
            </img>
            <div className='res-details'>
                <div className='res-name'>
                    <span>{name}</span> <br />
                </div>
                <div>
                    <img className="rating" src="https://www.clipartmax.com/png/middle/307-3078264_star-rating-icon-rating-star-single-png.png" alt=""
                    />
                    <span>{avgRating}</span> <br />
                    <span>{cuisines.join(", ")}</span> <br />
                    <span>{address}</span> <br />
                    <span>₹{costForTwo/100}</span> <br />
                </div>
            </div>
        </div>
    )
};

export default RestraurantCard;