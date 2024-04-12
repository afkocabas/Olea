import { useState, useEffect } from "react";
import { getCourses } from "../api/courseService";

const useCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [fields, setFields] = useState([]);
    
    useEffect(() => {
        const fetchCourses = async () => {
        try {
            const response = await getCourses();
            setCourses(response.data);
            setFields([...new Set(response.data.map(course => course.course_major))])
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
        };
        fetchCourses();


    }, []);
    
    return { courses, loading, error, fields };
};


export default useCourses;