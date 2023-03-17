import { Link } from "react-router-dom"

function QuizPreview(props) {

    // component used for the quiz feed
    // shows only the title and description of a quiz

    return (
        <Link to={`${props.nextRoute}/${props._id}`} className="preview">
            <h2 className="multiplay-quizzes-title">{props.title}</h2>
            <p className="multiplay-quizzes-descipt">{props.description}</p>
        </Link>
    )
}

export default QuizPreview