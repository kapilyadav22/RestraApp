import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {},
        totalItems: 0,
        totalPrice: 0,
    },
    /*
    Here, the word is reducers, because it contains multiple reducer functions
     */
    reducers: {
        //action and reducer function
        //addItem is action and it is calling reducer function : () => {}
        //  { payload : 'pizza' }
        addItem: (state, action) => {
            //we are mutating the state, directly modifying the state

            //In vanilla redux, old redux, mutating state was not allowed,we used to create a copy of state variable
            //and used to modify new state
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState; 

            //redux toolkit
            //redux uses IMMERJS, to do the same thing as old redux,
            
            //either mutate the state or return the new state
            const { item, itemCount } = action.payload;
            const itemId = item.card?.info?.id; 
            const existingItem = state.items[itemId];
            if (!existingItem) {
                state.items[itemId] = { item, itemCount };
            } else {
                existingItem.itemCount += itemCount;
            }
        },
        removeItem: (state, action) => {
            const { item } = action.payload;
            const itemId = item.card.info.id; 
            const existingItem = state.items[itemId];
            if (existingItem) {
                if (existingItem.itemCount > 1) {
                    existingItem.itemCount--;
                } else {
                    delete state.items[itemId];
                }
            }
        },
        updateTotalItems : (state, action) => {
            state.totalItems = action.payload;
        },
        updateTotalPrice : (state, action) => {
            state.totalPrice = action.payload;
        },
        clearCart: (state) => {
            //state = [] will not work, because we are not mutating the state here, we are just changing the reference.
            // state.items.length = 0;
            return {items : {}}
        }
    }
})

export const { addItem, removeItem, clearCart, updateTotalItems, updateTotalPrice } = cartSlice.actions;

//here we are using word reducer, because we are exporting the combined reducer
export default cartSlice.reducer;

/*
cartSlice is an object, which have actions and reducers:

cartSlice = {
    actions: {
        addItem,
        removeItem,
        clearCart
    },
    reducer
}
 */
