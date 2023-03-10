import QuizEditor from "../components/QuizEditor"

import { useParams } from "react-router-dom"

function Edit(){
    let id = useParams().id
    console.log('edit', useParams())
    let quiz = {
        title: 'Title',
        description: 'asfd',
        questions: [
            {
                title: 'idk',
                answers: [
                    {
                        title: 'random',
                        score: 'asdf'
                    }
                ]
            }
        ]
    }
    return(
        <div className="editContainer">
            <h1>Edit Quiz</h1>
            <QuizEditor quiz={quiz} action='Edit'></QuizEditor>
        </div>
    )
}

export default Edit