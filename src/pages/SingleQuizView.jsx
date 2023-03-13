import Question from "../components/Question"
import myApi from '../service/api.js'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function SingleQuizView() {
    let { id } = useParams()
    const [quizData, setQuiz] = useState({ title: '', description: "", questions: [] })
    let tempRes = []
    for (let i = 0; i < quizData.questions.length; i++) {
        tempRes.push(0)
    }
    const [selectedResponses, setResponse] = useState(tempRes)
    useEffect(() => {
        myApi
            .getQuiz(id)
            .then((res) => setQuiz(res.data.quiz))
            .catch(error => { console.log(error) })
    }, [])
    const [total, addScore] = useState(0)
    return (
        <div id="quiz">
            <h1>{quizData.title}</h1>
            <p className="description">{quizData.description}</p>
            {
                quizData.questions.map((question, ind) => {
                    return (
                        <Question key={`${question.title}${ind}`} selectedResponses={selectedResponses} addScore={addScore} total={total} title={question.questionText} answers={question.answers}></Question>
                    )
                })
            }
            <button onClick={() => console.log(total)} id="submitQuiz">Submit</button>
        </div>
    )
}

export default SingleQuizView