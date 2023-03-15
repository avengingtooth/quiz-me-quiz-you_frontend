import QuizPreview from '../components/QuizPreview'
import { useEffect, useState } from 'react'
import myApi from "../service/api"

function MultipleQuizView(props){
    // iterates through all the quizzes fetch and displays a preview of them
    // #TODO view more needs to select the next 20 quizzes
    
    const { nextRoute } = props
    const [query, updateQuery] = useState('')
    const [quizzes, setQuizzes] = useState([])
    const [offset, setOffset] = useState(0)
    const count = 4

    useEffect(() => {
        myApi
            .getQuizzes(offset, count, query)
            .then(res => setQuizzes(res.data.quizzes))
            .catch(error => console.log(error))
    }, [query, offset])

    return(
        <>
            <label>
                <input type="text" value={query} onChange={e => updateQuery(e.target.value)}/>
                <button >Search</button>
            </label>
            <div id='viewQuizzes'>
                {
                    quizzes.map(quiz => {
                        return(
                            <QuizPreview key={quiz._id} _id={quiz._id} nextRoute={nextRoute} title={quiz.title} description={quiz.description}></QuizPreview>
                        )
                    })
                }
            </div>
            {
                quizzes.length
                ?<button onClick={() => {setOffset(offset+count)}}>View More</button>
                :''
            }
            {
                offset - count >= 0
                ?<button onClick={() => {setOffset(offset-count)}}>View Less</button>
                :''
            }
        </>
    )
}

export default MultipleQuizView