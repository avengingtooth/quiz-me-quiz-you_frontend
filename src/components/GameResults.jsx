import Leaderboard from "./Leaderboard"
import SingleQuizView from '../pages/SingleQuizView'

function GameResults(props){
    // displays the leaderboad on end of multiplayer game 
    let { scores, players, id } = props

    return(
        <div>
            <h1>Game Over</h1>
            <h2>Your Score</h2>
            <h3>{scores[id]['score']}</h3>

            <h2>Leaderboard</h2>
            <Leaderboard scores={scores} players={players}></Leaderboard>

            <h2>Correction</h2>
            <SingleQuizView></SingleQuizView>
        </div>
    )
}

export default GameResults