import { type } from '@testing-library/user-event/dist/type';
import { ADDTOCART, REMOVETOCART, DELETETOCARD } from './action';

export const addToCart = (valu) => {
    return {

        type: ADDTOCART,
        payload: {
            productId: valu?.productId,
            name: valu?.name,
            price: valu?.price,
            quantity: valu?.quantity,
            stock: valu?.stock,
            unitPrice: valu?.price
        }
    }
}

export const removeToCart = (valu) => {
    return {

        type: REMOVETOCART,
        payload: {
            productId: valu?.productId,
            name: valu?.name,
            price: valu?.price,
            quantity: valu?.quantity,
            stock: valu?.stock,
            unitPrice: valu?.price
        }
    }
}

export const deleteToCart = (value) => {
    return {
        type: DELETETOCARD,
        payload: {
            productId: value.productId
        }
    }

}