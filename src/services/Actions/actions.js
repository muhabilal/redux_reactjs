// import { ADD_TO_CART } from '../Constant'
export const addToCart = (data) => {
    console.warn("action", data)
    return {
        type: 'ADD_TO_CART',
        // type: ADD_TO_CART,
        data: data
    }
}

// export const removeToCart = (data) => {
//     return {
//         type: 'REMOVE_TO_CART',
//         data: data
//     }
// }

