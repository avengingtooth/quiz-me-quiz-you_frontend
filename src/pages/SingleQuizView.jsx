import Question from "../components/Question"
import myApi from '../service/api.js'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ErrorPage from "../components/ErrorPage"

function submitQuiz(id, finalAnswers){
    let total = 0
    console.log(finalAnswers)
    myApi
        .correctQuiz(id, finalAnswers)
        .then(res => {
            total = res.data.total
            window.location.href = `/quiz/single-player-results/${total}`
        })
        .catch(error => console.log(error))

}

function SingleQuizView(){
    // gets the quiz id from the url
    // fetches the quiz from db
    let {id} = useParams()
    const [quizData, setQuiz] = useState({})
    const [allAnswers, setAnswers] = useState([])

    useEffect(() => {
        myApi
            .getQuiz(id)
            .then((res) => {
                setQuiz(res.data.quiz)
            })
            .catch(error => {console.log(error)})
    }, [])

    useEffect(() => {
        if (quizData.questions){
            let temp = []
            for (let i = 0; i < quizData.questions.length; i++){
                temp.push(null)
            }
            setAnswers(temp)
        }
    }, [quizData])

    if (quizData.questions){
        return(
            <div id="quiz">
                <h1>{quizData.title}</h1>
                <p className="description">{quizData.description}</p>
                {
                    quizData.questions.map((question, ind) => {
                        return(
                            <Question 
                                key={`${question.title}${ind}`} 
                                title={question.questionText} 
                                answers={question.answers}
                                questionInd={ind}
                                setAnswers={setAnswers} 
                                allAnswers={allAnswers} 
                            ></Question>
                        )
                    })
                }
                <button onClick={() => submitQuiz(id, allAnswers)} id="submitQuiz">Submit</button>
            </div>
        )
    }
    else{
        return(
            <div>
                <ErrorPage actionText='Look for another quiz' redirect='/quiz/all' error='Quiz was not found'></ErrorPage>
            </div>
        )
    }
}

export default SingleQuizView