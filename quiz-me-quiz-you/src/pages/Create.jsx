import QuizEditor from "../components/QuizEditor"

function Create(){
    return(
        <div className="editContainer">
            <h1>Create a quiz</h1>
            <QuizEditor action='Create'></QuizEditor>
        </div>
    )
}

export default Create