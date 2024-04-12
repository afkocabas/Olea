import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FieldsDropdown from './FieldsDropdown.js';

function CoursesHeader({ fields, selectedField, setSelectedField }) {
    return (
        <Row className='mb-4 align-items-center'>
            <Col md={8} sm={11}>
                <h2>{selectedField === 'All' ? 'All Courses' : `${selectedField} Courses`}</h2>
            </Col>
            <Col md={4} sm={1} className='d-flex justify-content-end'>
                <FieldsDropdown fields={fields} selectedField={selectedField} setSelectedField={setSelectedField} />
            </Col>
        </Row>
    );
}

export default CoursesHeader;