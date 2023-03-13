import React from 'react'
import myApi from '../service/api.js'
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function QuizStart() {
    const [quiz, setQuiz] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const handleClick = () => navigate(`/quiz/${quiz.id}/0`);

    useEffect(() => {
        myApi
            .getQuiz(id)
            .then((res) => setQuiz(res.data.quiz))
            .catch(error => { console.log(error) })
    }, [id])

    if (!quiz) {
        return <div className="loading">Loading...</div>
    }

    return (
        <>
            <div className='QuizStart' >

                <h1>{quiz.title}</h1>

                <p className="description">{quiz.description}</p>

                <button onClick={handleClick} id="startQuiz" > Start the quiz</button>

            </div >
        </>
    )
}

export default QuizStart

