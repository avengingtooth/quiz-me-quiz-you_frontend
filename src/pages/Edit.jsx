import QuizEditor from "../components/QuizEditor"
import myApi from "../service/api"

import { Navigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function Edit(){
    // fetches quiz from db
    // if the quiz exists it opens the quiz editior with the data from the quiz
    // otherwise is returns that the quiz doesnt exist
    let id = useParams().id
    const [quiz, setQuiz] = useState(null)

    useEffect(() => {
        myApi
            .getQuizWithPoints(id)
            .then((res) => setQuiz(res.data.quiz))
            .catch(error => {console.log('error')})
    }, [])

    if (quiz){
        return(
            <div className="editContainer">
                <h1>Edit Quiz</h1>
                <QuizEditor quiz={quiz} id={id} action='Edit'></QuizEditor>
            </div>
        )
    }
    else{
        return(
            <div className="editContainer">
                <h1>Quiz doesn't exist</h1>
                <a href="/quiz/all">Ok</a>
            </div> 
        )
    }
}

export default Edit