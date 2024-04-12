import React from 'react';
import { Dropdown } from 'react-bootstrap';

function FieldDropdown({ fields, selectedField, setSelectedField }) {
    return (
        <Dropdown onSelect={setSelectedField}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedField}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey='All'>All</Dropdown.Item>
                {fields.map(field => (
                    <Dropdown.Item eventKey={field} key={field}>{field}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default FieldDropdown;