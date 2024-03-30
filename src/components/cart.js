import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart, updateTotalItems, updateTotalPrice } from "../redux/slice";
import { Link } from "react-router-dom";

const Cart = () => {
/* It is less efficient, We are subscribing to complete store, 
    so anything changes in store, then the store variable will update, which we dont want

    const store = useSelector((store) => store);
    const cartItems = store.cart.items;
*/
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state)=> state.cart.totalPrice);
    const Items = Object.values(cartItems).map(item => item.item);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
        dispatch(updateTotalItems(0));
        dispatch(updateTotalPrice(0));
    }

    return (
        <div className="text-center m-2 p-4">
            <div className="text-2xl font-bold">
                Cart
            </div>
            <div className="w-6/12 m-auto p-10">
                { Object.keys(cartItems).length!==0 &&
                    <button
                        className="p-2 bg-black rounded-lg text-white"
                        onClick={handleClearCart}>
                        Clear Cart</button>}
                {
                    Object.keys(cartItems).length===0 && <h1>Your Cart is Empty, Please Add Something to Cart!!!</h1>
                }
                <ItemList items={Items}/>
            </div>
           {Object.keys(cartItems).length!==0 && <div className="flex justify-center mt-8">
                <Link to="/payment" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Proceed To Pay ₹{totalPrice}
                </Link>
            </div>}

        </div>
    );
};

export default Cart;