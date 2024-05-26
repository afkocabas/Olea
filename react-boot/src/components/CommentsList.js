import useComments from "../hooks/useComments";
import StarRating from "./StarRating";
import CommentField from "./CommentField";
import { Container } from "react-bootstrap";
import BorderSpinner from "./BorderSpinner";

const CommentsList = ({courseID, isCompleted}) => {
    const {comments, loading, setComments} = useComments(courseID);

    const updateComments = (comment) => {
        setComments((prevComments) => [comment, ...prevComments ]);
    }

    if (loading) {
        return (
            <BorderSpinner />
        );
    }


    if (!loading && comments.length === 0) {
        return (
            <Container className="mt-5">
                <h2 className="text-muted">No comments yet</h2>
                <CommentField 
                isCompleted={isCompleted}
                updateComments={updateComments}
                courseID={courseID}
                /> 
            </Container>
        );
    }
    return (
        <Container className="mt-5">
            <h2>Comments:</h2>
            {comments.map((comment) => (
                
                <div key={comment.comment_id} className="elevated mt-3 p-3">
                    <h4>{comment.username}</h4>
                    <p>{comment.comment_body}</p>
                    <StarRating rating={comment.rating} readOnly={true} />
                </div>
            ))}
            <CommentField 
            isCompleted={isCompleted} 
            updateComments={updateComments}
            courseID={courseID}
            /> 
        </Container>
    );

}

export default CommentsList;