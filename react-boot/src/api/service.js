import axios from 'axios';

async function httpRequest(endpoint, options) {
    try {
        const response = await axios(endpoint, options);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error("Server error");
    }
}

export default httpRequest;