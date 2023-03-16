import Question from "../components/Question"
import myApi from '../service/api.js'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ErrorPage from "../components/ErrorPage"

function submitQuiz(id, finalAnswers) {
    console.log(finalAnswers)
    myApi
        .correctQuiz(id, finalAnswers)
        .then(res => {
            let { total, max } = res.data
            window.location.href = `/quiz/single-player-results/${total}/${max}`
        })
        .catch(error => console.log(error))

}

function SingleQuizView() {
    // gets the quiz id from the url
    // fetches the quiz from db
    let { id } = useParams()
    const [quizData, setQuiz] = useState(null)
    const [curQuestionIndex, setQuestionIndex] = useState(null)
    const [question, setQuestion] = useState(null)
    const [allAnswers, setAnswers] = useState([])

    useEffect(() => {
        myApi
            .getQuiz(id)
            .then((res) => {
                setQuiz(res.data.quiz)
            })
            .catch(error => { console.log(error) })
    }, [])

    useEffect(() => {
        if (quizData) {
            let temp = []
            for (let i = 0; i < quizData.questions.length; i++) {
                temp.push(null)
            }
            setAnswers(temp)
        }
    }, [quizData])

    useEffect(() => {
        if (!quizData) return
        setQuestion(quizData.questions[curQuestionIndex])
    }, [curQuestionIndex])

    if (quizData) {
        return (
            <div id="quiz">
                <h1>{quizData.title}</h1>
                <p className="description">{quizData.description}</p>
                {
                    question
                        ? <Question
                            key={`${question._id}`}
                            title={question.questionText}
                            answers={question.answers}
                            questionInd={curQuestionIndex}
                            setAnswers={setAnswers}
                            allAnswers={allAnswers}
                        ></Question>
                        : ''
                }
                {console.log(curQuestionIndex)}
                {
                    typeof curQuestionIndex === 'number'
                        ? curQuestionIndex > 0
                            ? curQuestionIndex < quizData.questions.length
                                ? <>

                                    <button className="back-btn" onClick={() => { setQuestionIndex(curQuestionIndex - 1) }}>Back</button>
                                    <button className="next-btn" onClick={() => { setQuestionIndex(curQuestionIndex + 1) }}>Next</button>
                                </>
                                : <button onClick={() => submitQuiz(id, allAnswers)} id="submitQuiz">Submit</button>

                            : curQuestionIndex < quizData.questions.length
                                ? <button className="next-btn" onClick={() => { setQuestionIndex(curQuestionIndex + 1) }}>Next</button>
                                : <button className="submit-btn" onClick={() => submitQuiz(id, allAnswers)} id="submitQuiz">Submit</button>
                        : <button className="start-btn" onClick={() => setQuestionIndex(0)}>Start</button>
                }
            </div>
        )
    }
    else {
        return (
            <div>
                <ErrorPage actionText='Return to quiz selection' redirect='/quiz/all' error='Quiz was not found'></ErrorPage>
            </div>
        )
    }
}

export default SingleQuizView