import { IMG_CDN_URL } from "./urlConstants";

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item) =>
                <div key={item.card.info.id}
                    className="p-2 m-2 border-grey-400 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-bold">{item.card.info.name}</span>
                            <div>₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</div>
                        </div>
                        <p className="text-xs text-gray-500">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 mx-14 rounded-lg bg-white shadow-lg"> Add +</button>
                        </div>
                        <img src={IMG_CDN_URL + item.card.info.imageId} className="w-full rounded-lg" />
                    </div>
                </div>
            )
            }
        </div>
    );
}

export default ItemList;