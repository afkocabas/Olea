import React, {useState} from 'react';
import { Container} from 'react-bootstrap';

import CoursesList from '../components/CoursesList';
import FieldDropdown from '../components/FieldsDropdown';

import useCourses from '../hooks/useCourses';


import LoadingPage from './LoadingPage';

function HomePage() {
    const { courses, loading, error, fields } = useCourses();
    const [selectedField, setSelectedField] = useState('All');

    const filteredCourses = selectedField === 'All' ? courses : courses.filter(course => course.course_major === selectedField);

    if (loading) return <LoadingPage />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <Container className='page mt-5 mb- 5 pb-5'>
            <FieldDropdown fields={fields} selectedField={selectedField} setSelectedField={setSelectedField} />
            <CoursesList courses={filteredCourses} />
        </Container>
    );
}

export default HomePage;