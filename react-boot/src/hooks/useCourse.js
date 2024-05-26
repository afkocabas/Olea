import {useState, useEffect} from 'react';
import { getCourseById } from '../api/courseService';


const useCourse = (id, userID) => {
    const [course, setCourse] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await getCourseById(id, userID)
                setCourse(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchCourse();
    }, [id, userID]);

    return {course, loading, error, setCourse};
}


export default useCourse;