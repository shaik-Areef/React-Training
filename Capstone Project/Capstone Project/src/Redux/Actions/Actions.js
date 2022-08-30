import {
    GET_ABOUTUS_DETAILS,
    GET_CONTACTUS_DETAILS,
    GET_PRODUCTS,
    GET_PRODUCT_DETAILS,
    GET_PRODUCT_REVIEWS,
    UPDATE_PRODUCT_REVIEW
} from "./ActionTypes";

export const getProducts = async () => {
    return await fetch("http://localhost:5000/data")
        .then((res) => res.json())
        .then((result) => {
            return {
                type: GET_PRODUCTS,
                payload: result
            }
        })
};

export const getProductDetails = async (id) => {
    return await fetch("http://localhost:5000/data/" + id)
        .then((res) => res.json())
        .then((result) => {
            return {
                type: GET_PRODUCT_DETAILS,
                payload: result
            }
        })
};
export const getProductReviews = async (id) => {
    return await fetch("http://localhost:5000/reviews")
        .then((res) => res.json())
        .then((res) => {
            console.log("get reviews successfully");
            let result = res.filter((item) => {
                return item.productId === id
            })
            return {
                type: GET_PRODUCT_REVIEWS,
                payload: result
            }
        })
};
export const updateProductReview = async (id, rating, product) => {
    fetch("http://localhost:5000/data/" + id, {
        method: 'PUT',
        body: JSON.stringify({ ...product, rating }),
        headers: { "Content-type": "application/json" }
    })
        .then((res) => res.json())
        .then((res) => {
            console.log("Updated rating successfully");
        })
};

export const postProductFeedback = async (details, productId) => {
    await fetch("http://localhost:5000/reviews", {
        method: 'POST',
        body: JSON.stringify({ ...details, productId }),
        headers: { "Content-type": "application/json" }
    })
};
export const getAboutUsDetails = async () => {
    return await fetch("http://localhost:5000/aboutUs")
        .then((res) => res.json())
        .then((result) => {
            return {
                type: GET_ABOUTUS_DETAILS,
                payload: result
            }
        })
};
export const getContactUsUsDetails = async () => {
    return await fetch("http://localhost:5000/contactData")
        .then((res) => res.json())
        .then((result) => {
            return {
                type: GET_CONTACTUS_DETAILS,
                payload: result
            }
        })
};

export const postGetInTuchDetails = async (data) => {
    await fetch("http://localhost:5000/getInTouchData", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" }
    })
};
