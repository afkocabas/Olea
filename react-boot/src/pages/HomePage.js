import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../components/CourseCard';

function HomePage() {
  return (
    <Container className='page'>
      <Row>
        <Col sm={12} md={6} lg={3} className='d-flex justify-content-center'>
          <CourseCard />
        </Col>
        <Col sm={12} md={6} lg={3} className='d-flex justify-content-center'>
          <CourseCard />
        </Col>
        <Col sm={12} md={6} lg={3} className='d-flex justify-content-center'>
          <CourseCard />
        </Col>
        <Col sm={12} md={6} lg={3} className='d-flex justify-content-center'>
          <CourseCard />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;