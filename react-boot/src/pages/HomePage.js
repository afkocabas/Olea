import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../components/CourseCard';
import useCourses from '../hooks/useCourses';

function HomePage() {
    const { courses, loading, error } = useCourses();

    console.log(courses)

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <Container className='page mt-5 mb- 5 pb-5'>
            <Row className='gy-4'>
                {courses.map(course => (
                    <Col sm={12} md={6} lg={3} className='d-flex justify-content-center' key={course.course_id}>
                        <CourseCard course={course} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default HomePage;