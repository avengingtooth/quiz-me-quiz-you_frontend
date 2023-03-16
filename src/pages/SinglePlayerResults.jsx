import { useParams } from "react-router-dom"

function SinglePlayerResults(){
    let { score, max } = useParams()
    return(
        <div>
            <p>Your score was {score}/{max}!</p>
        </div>
    )
}

export default SinglePlayerResults