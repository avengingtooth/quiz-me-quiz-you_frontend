import Question from "../components/Question"
import myApi from '../service/api.js'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function SingleQuizView(){
    let {id} = useParams()
    const [quizData, setQuiz] = useState({title: '', description:"" ,questions: []})
    useEffect(() => {
        myApi
            .getQuiz(id)
            .then((res) => setQuiz(res.data.quiz))
            .catch(error => {console.log(error)})
    }, [])
    return(
        <div id="quiz">
            <h1>{quizData.title}</h1>
            <p className="description">{quizData.description}</p>
            {
                quizData.questions.map((question, ind) => {
                    return(
                        <Question key={`${question.title}${ind}`} title={question.questionText} answers={question.answers}></Question>
                    )
                })
            }
            <button id="submitQuiz">Submit</button>
        </div>
    )
}

export default SingleQuizView