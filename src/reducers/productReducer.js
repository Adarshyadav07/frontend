import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, CLEAR_ERRORS,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_FAIL,PRODUCT_DETAILS_SUCCESS } from "../constants/productConstants";


export const productReducer =  (state = { products: [] }, action) => {

    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading:true,
                products:[]
            }
            case ALL_PRODUCT_SUCCESS:
                return {
                    loading:false,
                    products:action.payload.products,
                    productsCount:action.payload.productsCount,
                }
            case ALL_PRODUCT_FAIL:
                return {
                    loading:false,
                    error:action.payload
                }
            case CLEAR_ERRORS:
                return {
                    ...state,
                    error:null,
                };
        default:
            return state;
    }
}; 


export const productDetailsReducer =  (state = { product: {} }, action) => {

    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading:true,
                ...state,
            };
            case PRODUCT_DETAILS_SUCCESS:
                return {
                    loading:false,
                    product:action.payload,
                };
            case PRODUCT_DETAILS_FAIL:
                return {
                    loading:false,
                    error:action.payload,
                };
            case CLEAR_ERRORS:
                return {
                    ...state,
                    error:null,
                };
        default:
            return state;
    }
}; 