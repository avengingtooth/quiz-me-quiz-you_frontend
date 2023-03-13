import { useEffect, useState } from 'react'
import myApi from '../service/api.js'
import MultipleQuizView from '../components/MultipleQuizView'

function Feed(){
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        myApi
            .getQuizzes(20)
            .then(res => setQuizzes(res.data.quizzes))
            .catch(error => console.log(error))
    }, [])

    return(
        <div id="feed">
            <h1>Discover quizzes</h1>
            {/* maybe add a search bar here */}
            <MultipleQuizView quizzes={quizzes} nextRoute={'/quiz/'}></MultipleQuizView>
        </div>
    )
}

export default Feed