import { ADD_TO_CART} from './action-types/cartActions'

export const addToCart = (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}