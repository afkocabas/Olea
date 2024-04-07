import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from "./constants.js";
import httpRequest from "./service.js";

export async function registerUser(user) {
    const options = {
        method: 'POST',
        data: user
    };
    return httpRequest(REGISTER_ENDPOINT, options);
}

export async function loginUser(user) {
    const options = {
        method: 'POST',
        data: user
    };
    return httpRequest(LOGIN_ENDPOINT, options);
}