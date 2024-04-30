import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';


import BorderSpinner from './BorderSpinner';

import { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';

function EnrolledCourseCard({ course }) {
const [imageLoaded, setImageLoaded] = useState(false);

return (
<>
<Card style={{ width: '15rem'}} className='course-card' >
    <Card.Img 
    variant="top" 
    src= {course.course_image}
    onLoad={() => setImageLoaded(true)}
    /> 
    {!imageLoaded && <BorderSpinner />}
    <Card.Body className='d-flex flex-column'>
    <Card.Title>{course.course_name}</Card.Title>
    <Card.Text>
        {course.course_info} 
    </Card.Text>
        <ProgressBar className='mb-5' now={10}  />
    
        <Button className='mt-auto' variant="success" as={Link} to={`/courses/${course.course_id}`}>View Course</Button>
    </Card.Body>
    </Card>
    </>
  );
}

export default EnrolledCourseCard;