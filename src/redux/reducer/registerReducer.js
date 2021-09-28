import { userConstants } from "../constants";

export function registration(state = {}, action) {
    switch (action.type) {
        case userConstants.REGISTER_SUCCESS:
            return { status: true };
        case userConstants.REGISTER_FAILURE:
            return { status: false, error: action.error };
        default:
            return state;
    }
}
