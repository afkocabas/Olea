import {useState, useEffect} from 'react';
import { getCommentsByCourseId } from '../api/commentsService';


const useComments = (courseID) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await getCommentsByCourseId(courseID);
                setComments(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchComments();
    }
    , [courseID]);

    return {comments, loading, error, setComments};
}


export default useComments;
