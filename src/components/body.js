import React from 'react'
import restaurantList from '../components/restraList';
import RestraurantCard from './restraurantCard';

//not using key is not acceptable << index as key is not recommended << unique key is best practice
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

