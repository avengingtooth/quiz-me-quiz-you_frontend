import QuizPreview from '../components/QuizPreview'
import { useEffect, useState } from 'react'
import myApi from '../service/api.js'

function MultipleQuizView(props){
    const { nextRoute } = props
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        myApi
            .getQuizzes(20)
            .then(res => setQuizzes(res.data.quizzes))
            .catch(error => console.log(error))
    }, [])

    return(
        <div id='viewQuizzes'>
        {
            quizzes.map(quiz => {
                return(
                    <QuizPreview key={quiz._id} _id={quiz._id} nextRoute={nextRoute} title={quiz.title} description={quiz.description}></QuizPreview>
                )
            })
        }
    </div>
    )
}

export default MultipleQuizView