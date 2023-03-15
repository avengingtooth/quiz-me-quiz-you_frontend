import Leaderboard from "./Leaderboard"

function GameResults(props){
    // displays the leaderboad on end of multiplayer game 
    let { scores, players } = props
    return(
        <div>
            <h1>Leaderboard</h1>
            <Leaderboard scores={scores} players={players}></Leaderboard>
        </div>
    )
}

export default GameResults