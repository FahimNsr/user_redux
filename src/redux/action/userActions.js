import { decodeToken } from "../../helpers";
import { userConstants } from "../constants";
import { userService } from "../../services";

import { alertActions } from "./";

export const userActions = {
    register,
    login,
    logout,
};

function register(user) {
    return (dispatch) => {
        userService
            .register(user)
            .then((user) => {
                dispatch({ type: userConstants.REGISTER_SUCCESS });
                // history.push("/login");
                dispatch(alertActions.success("Registration successful"));
            })
            .catch((error) => {
                dispatch({ type: userConstants.REGISTER_FAILURE, error: error.response.data.message });
                dispatch(alertActions.error(error.response.data.message));
            });
    };
}

function login(email, password) {
    return (dispatch) => {
        userService
            .login(email, password)
            .then(
                (user) => {
                    dispatch({ type: userConstants.LOGIN_SUCCESS, token: user.data.token, userInfo: decodeToken(user.data.token) });
                    dispatch(alertActions.success("Login successful"));
                    // history.replace("/");
                },
                (error) => {
                    dispatch({ type: userConstants.LOGIN_FAILURE, error: error.response.data.message });
                    dispatch(alertActions.error(error.response.data.message));
                }
            )
            .catch((err) => {
                console.log(err);
            });
    };
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
