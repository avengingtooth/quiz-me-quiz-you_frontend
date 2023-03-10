import { Link } from "react-router-dom"

function QuizPreview(props){
    {console.log('hi')}
    return(
        <Link to={`/quiz/${props._id}`} className="preview">
            <h1>hello</h1>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </Link>
    )
}

export default QuizPreview