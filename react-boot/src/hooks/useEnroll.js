import { useState } from "react";
import { enrollUserToCourse } from "../api/enrollmentService";

const useEnroll = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const enroll = async (user_id, course_id) => {
        setLoading(true);
        try {
            const response = await enrollUserToCourse(user_id, course_id);
            setSuccess(true);
            setLoading(false);
            return response;
        } catch (error) {
            setLoading(false);
            setError(error);
            throw error

        }
    };

    return { loading, error, success, enroll };
}

export default useEnroll;