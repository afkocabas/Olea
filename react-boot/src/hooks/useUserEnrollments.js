import { useEffect, useState } from "react";
import { fetchEnrollmentsByUserId } from "../api/enrollmentService";
import useUser from './useUser';


export function useUserEnrollments() {
    const [userEnrollments, setUserEnrollments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {userID} = useUser();
    
    useEffect(() => {
        const fetchEnrollments = async () => {
            try {
                const response = await fetchEnrollmentsByUserId(userID);
                setUserEnrollments(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchEnrollments();
    }, [userID]);

    return { userEnrollments, loading, error };
}