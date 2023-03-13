import QuizEditor from "../components/QuizEditor"
import myApi from "../service/api"

import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"

function Edit(){
    let id = useParams().id
    const [quiz, setQuiz] = useState({})

    useEffect(() => {
        myApi
            .getQuiz(id)
            .then((res) => setQuiz(res.data.quiz))
            .catch(error => {console.log(error)})
    }, [])

    if (quiz.questions){
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
            </div> 
        )
    }
}

export default Edit