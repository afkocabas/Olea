import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';

function Chapter({ isCompleted, number, onCompletion }) {
    return (
        <Form.Check 
            type="checkbox"
            label={`Chapter ${number} ${isCompleted ? '✅' : '❌'}`}
            checked={isCompleted}
            disabled={isCompleted}
            onChange={onCompletion}
        />
    );
}

export default Chapter;

