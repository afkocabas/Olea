import axios from 'axios';

async function httpRequest(endpoint, options) {
    try {
        const response = await axios(endpoint, options);
        return response;
    } catch (error) {
        throw error;
    }
}

export default httpRequest;