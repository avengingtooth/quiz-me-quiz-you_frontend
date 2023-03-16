import QuizPreview from '../components/QuizPreview'
import { useEffect, useState } from 'react'
import myApi from "../service/api"

function MultipleQuizView(props) {
    // iterates through all the quizzes fetch and displays a preview of them
    // the offest sets the start of the index of the quizzes being fetched
    // count is the nb of quizzes being fetched
    // if the offset - count is greater than 0 it only displays view more to go add to the offset
    // while the fetch still returns quizzes the view more button is visible otherwise you can only subtract
    // search bar to filter the searches

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

    return (
        <>
            <label>
                <button className='search-bar-btn'>Search</button>
                <input className='search-bar' type="text" value={query} onChange={e => {
                    updateQuery(e.target.value)
                    setOffset(0)
                }} />
            </label>
            <div id='viewQuizzes'>
                {
                    quizzes.map(quiz => {
                        return (
                            <QuizPreview key={quiz._id} _id={quiz._id} nextRoute={nextRoute} title={quiz.title} description={quiz.description}></QuizPreview>
                        )
                    })
                }
            </div>
            {
                quizzes.length
                    ? <button className='view-more-btn' onClick={() => { setOffset(offset + count) }}>View More</button>
                    : ''
            }
            {
                offset - count >= 0
                    ? <button className='view-less-btn' onClick={() => { setOffset(offset - count) }}>View Less</button>
                    : ''
            }
        </>
    )
}

export default MultipleQuizView