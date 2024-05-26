import Container from 'react-bootstrap/Container';
import LoadingPage from './LoadingPage';

import { useUserEnrollments } from '../hooks/useUserEnrollments';
import EnrolledCoursesList from '../components/EnrolledCourseList';

function ProfilePage() {
    const { userEnrollments, loading,} = useUserEnrollments();


    if (loading) {return <LoadingPage />; }

    return (
        <Container>
            {userEnrollments.length === 0 && <h2 className='mb-3'>You have no enrollments</h2>}
            {userEnrollments.length > 0 && <h2 className='mb-3'>Your Courses ({userEnrollments.length})</h2>}
            {userEnrollments.length > 0 && <EnrolledCoursesList courses={userEnrollments} />}
        </Container>
    );

}


export default ProfilePage;