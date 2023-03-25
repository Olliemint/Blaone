import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_IMAGE
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages
      };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productDetailsReducer = (state = { products: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };

    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };

    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    
    
    default:
      return state;
  }
};



export const productCreateReducer = (state = {productCreate: {}}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true, success: false, productCreate: {} };

    case PRODUCT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        productCreate: action.payload,
      };

    case PRODUCT_CREATE_RESET:
      return {
        productCreate: {},
      };

    case PRODUCT_CREATE_FAIL:
      return { loading: false, success: false, error: action.payload };

    default:
      return state;
  }
}


export const addImage = (state= { assets:[]}, action) => {
  switch (action.type) {
    case PRODUCT_IMAGE:
      return {
        ...state,
        assets: [...state.assets, action.payload],
      };
    default:
      return state;
  }
  
}