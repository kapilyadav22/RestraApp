import React from 'react'
import { restaurantList } from './restraList';

const styleCard = {
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
                src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}> 
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
}

export default function Body() {
    return (
        <div className='body'>
            <div className="search">Search </div>
            <div className="res-container">
                {/* <RestraurantCard resData = {restaurantList[0]}></RestraurantCard>
                <RestraurantCard resData = {restaurantList[1]}></RestraurantCard>
                <RestraurantCard resData = {restaurantList[2]}></RestraurantCard>
                <RestraurantCard resData = {restaurantList[3]}></RestraurantCard>
                <RestraurantCard resData = {restaurantList[4]}></RestraurantCard>
                <RestraurantCard resData = {restaurantList[5]}></RestraurantCard>
                <RestraurantCard resData = {restaurantList[6]}></RestraurantCard>
                <RestraurantCard resData = {restaurantList[7]}></RestraurantCard>
                <RestraurantCard resData = {restaurantList[8]}></RestraurantCard>
                <RestraurantCard resData = {restaurantList[9]}></RestraurantCard>
                <RestraurantCard resData = {restaurantList[10]}></RestraurantCard>
                <RestraurantCard resData = {restaurantList[11]}></RestraurantCard>
                <RestraurantCard resData = {restaurantList[12]}></RestraurantCard>
                <RestraurantCard resData = {restaurantList[13]}></RestraurantCard>
                <RestraurantCard resData = {restaurantList[14]}></RestraurantCard> */}
                {
                    restaurantList.map((restraurant) =>
                        (<RestraurantCard key= {restraurant.data.id } resData={restraurant}></RestraurantCard>))
                }

            </div>
        </div>
    )
}

