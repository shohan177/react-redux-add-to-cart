import { ADDTOCART, REMOVETOCART, DELETETOCARD } from './action';

const initialState = {
    cart: [],
    cartTotal: {
        TotalItem: 0,
        TotalPrice: 0
    }
}

//cart add update item 
const updateCartAddValue = (value, state) => {

    let updatedCart = state?.cart.map(obj => {
        if (obj.productId === value.productId) {
            return {
                ...obj,
                price: obj?.price + value?.price,
                quantity: obj?.quantity + value?.quantity,
            };
        }

        return obj;
    });

    return updatedCart;
}

//cart add update item 
const updateCartRemoveValue = (value, state) => {

    let updatedCart = state?.cart.map(obj => {
        if (obj.productId === value.productId) {
            return {
                ...obj,
                price: obj?.price - value?.price,
                quantity: obj?.quantity - value?.quantity
            };
        }

        return obj;
    });

    return updatedCart;
}


//cart add update item 
const deletFormCart = (value, state) => {

    let updatedCart = state?.cart.map(obj => {
        if (obj.productId !== value.productId) {
            return {
                ...obj,
            };
        }

        return obj;
    });

    return updatedCart;
}




const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        //add to card action
        case ADDTOCART:
            const filterItem = state?.cart?.filter((item) => item?.productId == action.payload.productId)

            if (filterItem.length != 0) {
                //update same product 
                return {
                    ...state,
                    cartTotal: {
                        TotalItem: state?.cartTotal.TotalItem + action.payload?.quantity,
                        TotalPrice: state?.cartTotal.TotalPrice + action.payload?.price
                    },
                    cart: updateCartAddValue(action.payload, state),
                }
            } else {
                //add new product    
                return {
                    ...state,
                    cartTotal: {
                        TotalItem: state?.cartTotal.TotalItem + action.payload?.quantity,
                        TotalPrice: state?.cartTotal.TotalPrice + action.payload?.price
                    },
                    cart: [
                        ...state.cart,
                        action.payload,
                    ]
                };
            }


        case REMOVETOCART:
            const filterItemRe = state?.cart?.filter((item) => item?.productId == action.payload.productId)

            if (filterItemRe.length != 0) {
                //update same product 
                return {
                    ...state,
                    cartTotal: {
                        TotalItem: state?.cartTotal.TotalItem - action.payload?.quantity,
                        TotalPrice: state?.cartTotal.TotalPrice - filterItemRe[0].unitPrice
                    },
                    cart: updateCartRemoveValue(action.payload, state),
                }
            }

        case DELETETOCARD:

            //deletfrom cart
            const afterdeletItem = state?.cart?.filter((item) => item?.productId != action.payload.productId)
            return {
                ...state,
                cart: afterdeletItem,
            }


        default:
            return state;
    }

}

export default cartReducer;
