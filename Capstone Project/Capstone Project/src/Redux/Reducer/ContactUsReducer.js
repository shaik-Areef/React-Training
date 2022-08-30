
import { GET_CONTACTUS_DETAILS } from "../Actions/ActionTypes";

export const contactUsInitialState = {};

const contactUsReducer = (state = contactUsInitialState, action) => {
    switch (action.type) {
        case GET_CONTACTUS_DETAILS:
            return action.payload;
        default:
            return state;
    }
};
export default contactUsReducer