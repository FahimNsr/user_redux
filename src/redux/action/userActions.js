import { userConstants } from "../constants";
import { userService } from "../../services";

import { history } from '../../helpers';

export const userActions = {
    register,
};

function register(user) {
    return (dispatch) => {
        userService
            .register(user)
            .then((response) => {
                if (response.status === 201) {
                    let successMessage = response.data.message;
                    console.log(successMessage);
                    dispatch({ type: userConstants.REGISTER_SUCCESS, payload: successMessage });
                    history.push('/login');
                }
            })
            .catch((err) => {
                let failureMessage = err.response.data.message;
                console.log(failureMessage);
                dispatch({ type: userConstants.REGISTER_FAILURE, payload: failureMessage });
            });
    };
}
