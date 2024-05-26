import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


import BorderSpinner from './BorderSpinner';
import CenteredModal from './CenteredModal';
import StarRating from './StarRating';

import { useState } from 'react';

function CourseCard({ course }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
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
        <Container className='mt-auto d-flex flex-column' >
          <StarRating rating={course.avg_rating} readOnly={true} />
            <Container className='d-flex justify-content-center'>
              <p className='text-muted'>Rating: {course.avg_rating}/5.0</p>
            </Container>
          <Button variant="success" className='' onClick={() => setShowModal(true)}>Course Details</Button>
        </Container>
      </Card.Body>
    </Card>
    {showModal && <CenteredModal show={showModal} onHide={handleCloseModal} course={course}/>}
    </>
  );
}

export default CourseCard;