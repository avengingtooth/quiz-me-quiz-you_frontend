import { Link } from "react-router-dom"

function QuizPreview(props){
    return(
        <Link to={`/quiz/${props._id}`} className="preview">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </Link>
    )
}

export default QuizPreview