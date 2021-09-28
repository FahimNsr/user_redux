import http from "./httpService";
import { localApi } from "./config.json";

export const userService = {
    register,
    login,
    logout,
};

function register(user) {
    return http.post(`${localApi}/api/register`, JSON.stringify(user))
}

function login(email, password) {
    return http
        .post(`${localApi}/api/login`, JSON.stringify({ email, password }))
        .then((user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("token", user.data.token);

            return user;
        });
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("token");
}
