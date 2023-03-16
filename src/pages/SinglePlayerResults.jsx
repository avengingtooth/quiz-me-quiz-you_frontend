import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom';

function SinglePlayerResults() {
    let { score, max } = useParams()
    return (
        <>
            <div>
                <p className="score-display">You scored {score}/{max}!</p>
            </div>

            <Link to="/quiz/all">
                <button className="play-another-quiz-btn">Play another quiz?</button>
            </Link>
        </>
    )
}

export default SinglePlayerResults