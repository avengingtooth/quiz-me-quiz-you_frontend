import { useParams } from "react-router-dom"

function SinglePlayerResults(){
    let { score } = useParams()
    return(
        <div>
            <p>Your score was {score}!</p>
        </div>
    )
}

export default SinglePlayerResults