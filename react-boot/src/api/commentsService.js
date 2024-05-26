import httpRequest from "./service";


export async function getCommentsByCourseId(courseID) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
        
    };

    return httpRequest(`/comments/${courseID}`, options);
}


export async function postComment(comment) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({comment : comment})

    };


    return httpRequest('/comments', options);
}