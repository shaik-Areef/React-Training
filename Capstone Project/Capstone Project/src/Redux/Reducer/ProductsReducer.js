import { GET_PRODUCTS, GET_PRODUCT_DETAILS, GET_PRODUCT_REVIEWS } from "../Actions/ActionTypes";

export const productsInitialState = { productsData: [], productDetails: {}, reviews: [] };

const productsReducer = (state = productsInitialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...productsInitialState, productsData: action.payload };
        case GET_PRODUCT_DETAILS:
            return { ...state, productDetails: action.payload };
        case GET_PRODUCT_REVIEWS:
            return { ...state, reviews: action.payload };
        default:
            return state;
    }
};
export default productsReducer