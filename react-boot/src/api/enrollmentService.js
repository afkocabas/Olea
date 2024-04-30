import httpRequest from "./service";

import { ENROLLMENTS_ENDPOINT } from "./constants";

export async function enrollUserToCourse(user_id, course_id) {
    // Define the options for the call
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({ user_id: user_id, course_id: course_id })
    };

    return httpRequest(ENROLLMENTS_ENDPOINT, options);
}

export async function fetchEnrollmentsByUserId(user_id) {
    // Define the options for the call
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return httpRequest(`${ENROLLMENTS_ENDPOINT}/${user_id}`, options);
}