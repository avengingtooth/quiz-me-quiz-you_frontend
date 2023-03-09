import QuizEditor from "../components/QuizEditor"

function Create(){
    let quiz = {
        title: '',
        description: '',
        questions: [
            {
                title: '',
                answers: [
                    {
                        title: '',
                        score: ''
                    }
                ]
            }
        ]
    }
    return(
        <div className="editContainer">
            <h1>Create a quiz</h1>
            <QuizEditor quiz={quiz} action='Create'></QuizEditor>
        </div>
    )
}

export default Create