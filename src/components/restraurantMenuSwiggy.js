import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './shimmer';

export const RestraurantMenuSwiggy = () => {

    const [restrauMenu, setrestrauMenu] = useState({});
    const { resId } = useParams();
    async function getRestraurants() {
        try {
            const data = await fetch("https://www.zomato.com/webroutes/getPage?page_url=/ncr/burger-king-connaught-place-new-delhi");
            const json = await data.json();

            setrestrauMenu(json);
            console.log(json);

        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {   
        getRestraurants();
    }, []);

    return (restrauMenu.length===0)? <Shimmer/>:(
        <div>
            <h2>Restraurant Id is : Swiggy</h2>
            <h2>{restrauMenu?.page_data?.sections?.SECTION_BASIC_INFO?.name}</h2>
            <h2>{restrauMenu?.page_data?.sections?.SECTION_BASIC_INFO?.cuisine_string} </h2>
            <h2>{restrauMenu?.page_data?.sections?.SECTION_RES_HEADER_DETAILS?.LOCALITY?.text}</h2>
            <img
                className="card-image"
                alt="" src={restrauMenu?.page_data?.sections?.SECTION_BASIC_INFO?.res_thumb}>
            </img>
            <h2>{restrauMenu?.page_data?.sections?.SECTION_RES_DETAILS?.IMAGE_MENUS?.menus[0]?.label} </h2>
            <img src={restrauMenu.page_data?.sections?.SECTION_RES_DETAILS?.IMAGE_MENUS?.menus[0]?.thumb} alt="" />
        </div>
    )
}
