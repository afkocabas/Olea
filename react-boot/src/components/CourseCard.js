import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import BorderSpinner from './BorderSpinner';

import { useState } from 'react';

function CourseCard({ course }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
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
        <Button variant="success" className='mt-auto'>Course Details</Button>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;