import http from "./httpService";
import { localApi } from "./config.json";

export const userService = {
    register,
};

function register(user) {
    return http.post(`${localApi}/api/register`, JSON.stringify(user));
}
