import { compose } from 'redux';
import { ADD_TO_CART } from '../Constant'
const initialState = {
    cardData: []
}
export default function (state = initialState, action) {
    switch (action.type) {
        // case 'ADD_TO_CART':
        case ADD_TO_CART:
            console.warn('reducer', action)
            return {
                ...state,
                cardData: action.data
            }
            break;
        default:
            return state

    }
}