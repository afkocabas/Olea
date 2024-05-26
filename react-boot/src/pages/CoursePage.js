import { Container, Col,  Row } from "react-bootstrap";
import useCourse from "../hooks/useCourse";
import useUser from "../hooks/useUser";
import { useParams } from 'react-router-dom';
import Chapter from "../components/Chapter";
import BorderSpinner from "../components/BorderSpinner";
import CommentsList from "../components/CommentsList";

import { updateEnrollmentsProgress } from "../api/enrollmentService";

import { useState, useEffect} from "react";
function CoursePage() {
    const { userID } = useUser();
    const { id } = useParams();
    const { course, loading, setCourse} = useCourse(id, userID);
    const [completedChapters, setCompletedChapters] = useState(Array(10).fill(false));

    useEffect(() => {
        if (course) {
            setCompletedChapters(Array(10).fill(false).map((_, i) => i < course.chapters_completed));
        }
    }, [course]);


    const handleChapterCompletion = async (index) => {
        await updateEnrollmentsProgress(userID, course.course_id);
        setCourse(prevCourse => ({...prevCourse, is_completed: prevCourse.chapters_completed === 9 ? 1 : 0, chapters_completed: prevCourse.chapters_completed + 1}));
        setCompletedChapters(prevChapters => 
            prevChapters.map((isCompleted, i) => i === index ? !isCompleted : isCompleted)
        );
    };


    if(loading) return <BorderSpinner />;   
    const chapters = completedChapters.map((isCompleted, i) => (
        <Col>
            <Chapter 
            isCompleted={isCompleted} 
            number={i + 1} 
            key={i} 
            onCompletion={() => handleChapterCompletion(i)}
            />
        </Col>
    ));

    return (
        <Container className="mt-4">
            <Row>
                <Col className="elevated"> 
                    <h1>{course.course_name}</h1>
                    <h5 className="text-muted fst-italic">{course.course_teacher}</h5>
                    <h5 className="text-muted">{course.course_info}</h5>
                </Col>
            </Row>
            <Row className="elevated mt-3 d-flex flex-wrap">
                    <h2>Chapters:</h2>
                    {chapters}
            </Row>  
            <CommentsList 
            courseID={course.course_id} isCompleted={course.is_completed}/>
        </Container>
    );
}

export default CoursePage;