import { decodeToken } from "../../helpers";
import { userConstants } from "../constants";

let token = localStorage.getItem("token");

const initialState = token ? { status: true, token, userInfo: decodeToken(token) } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_SUCCESS:
            return {
                status: true,
                token: action.token,
                userInfo: action.userInfo,
            };
        case userConstants.LOGIN_FAILURE:
            return { status: false, error: action.error };
        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}
