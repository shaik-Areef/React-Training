
import { GET_ABOUTUS_DETAILS } from "../Actions/ActionTypes";

export const aboutInitialState = {};

const aboutUsReducer = (state = aboutInitialState, action) => {
    switch (action.type) {
        case GET_ABOUTUS_DETAILS:
            return action.payload;
        default:
            return state;
    }
};
export default aboutUsReducer