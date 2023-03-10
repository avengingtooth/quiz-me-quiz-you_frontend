import { useEffect, useState } from 'react'
import QuizPreview from '../components/QuizPreview.jsx'
import myApi from '../service/api.js'

function Feed(){
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        myApi
            .getQuizzes(20)
            .then(res => setQuizzes(res.data.quizzes))
            .catch(error => console.log(error))
        console.log(quizzes)
    }, [])

    return(
        <div id="feed">
            <h1>Discover quizzes</h1>
            {/* maybe add a search bar here */}
            <div id='viewQuizzes'>
                {
                    quizzes.map(quiz => {
                        return(
                            <QuizPreview key={quiz._id} _id={quiz._id} title={quiz.title} description={quiz.description}></QuizPreview>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Feed