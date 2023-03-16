import Leaderboard from "./Leaderboard"

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

        </div>
    )
}

export default GameResults