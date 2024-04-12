import { useState, useEffect } from "react";
import { getCourses } from "../api/courseService";

const useCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchCourses = async () => {
        try {
            const response = await getCourses();
            setCourses(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
        };
        fetchCourses();
    }, []);
    
    return { courses, loading, error };
};


export default useCourses;