import { combineReducers } from 'redux'
import aboutUsReducer from './aboutUsReducer'
import contactUsReducer from './ContactUsReducer'
import productsReducer from './ProductsReducer'

export default combineReducers({
    products: productsReducer,
    aboutUs: aboutUsReducer,
    contactUs: contactUsReducer
})