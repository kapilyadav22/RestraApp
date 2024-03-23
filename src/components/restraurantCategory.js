import { useState } from "react";
import ItemList from "./itemList";

const RestraurantCategory = ({ data,showItem,handleExpandItems }) => {
    const handleClick = () => {
        handleExpandItems();
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-grey-50 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>^ </span>
                </div>

                {showItem && <ItemList items={data.itemCards} />
                }
            </div>
        </div>
    );
};

export default RestraurantCategory