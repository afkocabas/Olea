import {Row, Col} from 'react-bootstrap';
import CourseCard from './CourseCard';

function CoursesList({courses}) {
    return (
        <Row className='gy-4'>
            {courses.map(course => (
                <Col sm={12} md={6} lg={3} className='d-flex justify-content-center' key={course.course_id}>
                    <CourseCard course={course} />
                </Col>
            ))}
        </Row>
    );
}

export default CoursesList;