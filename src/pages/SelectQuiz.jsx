import Feed from './Feed'
import { useState, useEffect } from 'react'
import myApi from '../service/api'

function SelectQuiz(){
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        myApi
            .getQuizzes(20)
            .then(res => setQuizzes(res.data.quizzes))
            .catch(error => console.log(error))
    }, [])
    return(
        <div>
            <Feed></Feed>
        </div>
    )
}

export default SelectQuiz