import {Row, Col, Form, FormControl, Button, Container} from 'react-bootstrap';
import StarRating from './StarRating';
import { useState, useCallback} from 'react';
import useUser from '../hooks/useUser';

import { postComment } from '../api/commentsService';

const CommentField= ({isCompleted, updateComments, courseID}) => {
    const {userName} = useUser();
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const handleRatingChange = useCallback((newRating) => {
        setRating(newRating);
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (comment.trim() === '') {
            return;
        }

        try {
            postComment({course_id: courseID, comment_body: comment, rating: rating, username: userName});
            updateComments({comment_id: 44444444, comment_body: comment, rating, username: userName});
        }
        catch(error) {
            console.error(error);
        }
        
        setComment('');
        setRating(0);
    }

    return (
    <Container>
        <Row className="mt-3 mb-3 d-flex ">
            <Col sm={12} lg={10} className="">
                <Form onSubmit={handleSubmit}> 
                    <FormControl 
                        as="textarea" 
                        placeholder={isCompleted ?"Leave a comment" : "You must complete the course to leave a comment"} 
                        value={comment} 
                        disabled={!isCompleted}
                        onChange={(e) => setComment(e.target.value)} 
                    />
                    <Row className="mt-3 align-items-center justify-content-between">
                        <Col>
                            <StarRating rating={rating} onChange={handleRatingChange} readOnly={!isCompleted} />
                        </Col>
                        <Col  className=' d-flex justify-content-end' >
                            <Button 
                            type='submit' 
                            disabled={!isCompleted}
                            variant='success'>Comment</Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>

    </Container>
    );
}


export default CommentField;