import React from 'react'
import myApi from '../service/api.js'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Question from '../components/Question'

const QuizQuestion = (props) => {
    const [question, setQuestion] = useState(null)
    const { questionId } = useParams();
    // const navigate = useNavigate();
    // const handleClick = () => {
    //     if (answerSelected === answerWithMostPoints) {
    //         // send points to the player.session
    //         // + show that the answer is right
    //         // next question button appears
    //     }
    //     // leave the chosen answer in a color, and the right color appears with a different color
    //     // next question button appears
    // }

    useEffect(() => {
        myApi
            .getQuestion(questionId)
            .then((res) => setQuestion(res.data.question))
            .catch(error => { console.log(error) })
    }, [questionId])

    let title
    let answers

    if (question) {
        title = question.questionText
        answers = question.answers
    }
    // let answers = question.answers
    // let title = question.questionText

    // // if (!question) {
    // //     return <div className="loading">Loading...</div>
    // // }

    return (
        <Question answers={answers} title={title}></Question>
    )
}

export default QuizQuestion
