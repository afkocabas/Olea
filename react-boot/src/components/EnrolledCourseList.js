

import {Row, Col} from 'react-bootstrap';
import EnrolledCourseCard from './EnrolledCourseCard';

function EnrolledCoursesList({courses}) {
    return (
        <Row className='gy-4'>
            {courses.map(course => (
                <Col sm={6}  lg={3} className='d-flex justify-content-center' key={course.course_id}>
                    <EnrolledCourseCard course={course} />
                </Col>
            ))}
        </Row>
    );
}

export default EnrolledCoursesList;