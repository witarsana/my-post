import { products } from '../../utils/data';

const initialState = {
    products: products,
    cart: [],
    category: ''
}

const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TO_CART":
            const itemInCart = state.cart.find(item => item.id === payload);
            const newItemCart = { ...state.products.find(item => item.id === payload), count: 1 };
            if (!itemInCart) {
                return {
                    ...state,
                    cart: [...state.cart, newItemCart]
                }

            }
            return state;
        case "INCREMENT":
            const originalPrice = state.products.find(item => item.id === payload);
            const inCarts = state.cart.map(item => {
                if (item.id === payload) {
                    return {
                        ...item,
                        price: item.price + originalPrice.price
                    }
                } else {
                    return item;
                }
            })
            return {
                ...state,
                cart: inCarts
            }

        case "DECREMENT":
            const originalPriceDec = state.products.find(item => item.id === payload);
            const inCartsDec = state.cart.map(item => {
                if (item.id === payload) {
                    return {
                        ...item,
                        price: item.price - originalPriceDec.price
                    }
                } else {
                    return item;
                }
            })
            return {
                ...state,
                cart: inCartsDec
            }

        case "REMOVE":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== payload)
            }
        case "RESET":
            return {
                ...state,
                cart: []
            }
        case "CATEGORY":
            return {
                ...state,
                category: payload
            }
        default:
            return state;
    }
}

export default productReducer;