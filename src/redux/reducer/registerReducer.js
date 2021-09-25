import { userConstants } from "../constants";

export function registration(state = [], action) {
    switch (action.type) {
        case userConstants.REGISTER_SUCCESS:
            return [true, action.payload];
        case userConstants.REGISTER_FAILURE:
            return [false, action.payload];
        default:
            return state;
    }
}
