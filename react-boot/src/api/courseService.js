import httpRequest from  './service.js'
import { COURSES_ENDPOINT } from './constants'

export async function getCourses() {
    // Define the options for the call
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    return httpRequest(COURSES_ENDPOINT, options);
}