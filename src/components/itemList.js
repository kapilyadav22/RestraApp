import { useState } from "react";
import { addItem, removeItem, updateTotalItems, updateTotalPrice } from "../redux/slice";
import { IMG_CDN_URL } from "./urlConstants";
import { useDispatch, useSelector } from "react-redux";
const ItemList = ({ items }) => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const totalCount = useSelector((state) => state.cart.totalItems);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    const handleAddButton = (item) => {
        const {price, defaultPrice} = item?.card?.info;
        dispatch(addItem({item, itemCount: 1}));
        dispatch(updateTotalItems(totalCount+1));
        dispatch(updateTotalPrice(totalPrice + (price?price/100 : defaultPrice/100)));
        /* behind the scenes
        { payload : 'pizza' 
        }
        */
    }

    const handleRemoveButton = (item) => {
        const {price, defaultPrice} = item?.card?.info;
        dispatch(removeItem({ item }));
        dispatch(updateTotalItems(totalCount-1));
        dispatch(updateTotalPrice(totalPrice - (price?price/100 : defaultPrice/100)));
    }
    return (
        <div>
            {items.map((item) => {
                const { id, name, price, defaultPrice, description, imageId } = item.card.info;
                const itemCount = cartItems[id]?.itemCount || 0;

                return (
                    <div key={id} className="p-2 m-2 border-grey-400 border-b-2 text-left flex justify-between">
                        <div className="w-9/12">
                            <div className="py-2">
                                <span className="font-bold">{name}</span>
                                <div>₹{price ? price / 100 : defaultPrice / 100}</div>
                            </div>
                            <p className="text-xs text-gray-500">{description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <div className="absolute">
                                <div className="flex justify-between py-1 px-2 mx-4 my-1 rounded-lg bg-white shadow-lg">
                                    {itemCount > 0 && <button className="mx-2 text-lg" onClick={() => handleRemoveButton(item)}> - </button>}
                                    {itemCount > 0 && <h2 className="text-black font-bold">{itemCount}</h2>}
                                    {itemCount === 0 && <h2 className="text-black font-bold">Add </h2>}
                                    <button className="mx-2 text-lg" onClick={() => handleAddButton(item)}> + </button>
                                </div>
                            </div>
                            <img src={IMG_CDN_URL + imageId} className="w-full rounded-lg" alt={name} />
                        </div>
                    </div>
                );
            })}
           
        </div>
    );
}

export default ItemList;