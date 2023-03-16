import { Link } from "react-router-dom"

function QuizPreview(props) {
    return (
        <Link to={`${props.nextRoute}/${props._id}`} className="preview">
            <h2 className="multiplay-quizzes-title">{props.title}</h2>
            <p className="multiplay-quizzes-descipt">{props.description}</p>
        </Link>
    )
}

export default QuizPreview