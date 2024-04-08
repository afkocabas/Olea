import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import BorderSpinner from './BorderSpinner';

import { useState } from 'react';

function CourseCard(props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Card style={{ width: '15rem'}} className='course-card' >
      <Card.Img 
      variant="top" 
      src="https://hub.docker.com/api/media/repos_logo/v1/library%2Fmysql"
      onLoad={() => setImageLoaded(true)}
       /> 
      {!imageLoaded && <BorderSpinner />}
      <Card.Body >
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="success">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;