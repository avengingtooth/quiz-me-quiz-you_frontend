import AllUsernames from "./AllUsernames"
import Leaderboard from "./Leaderboard"

function Lobby(props){
    let { scores, players, gameState, error } = props
    if (gameState === 'await-start'){
        return(
            <div>
                <p>Start the quiz when all players have joined</p>
                <AllUsernames  scores={scores} players={players} ></AllUsernames>
            </div>
        )
    }
    else if (gameState === 'playing'){
        return(
            <div>
                <p>Playing</p>
                <Leaderboard  scores={scores} players={players} ></Leaderboard>
            </div>
        )
    }
    else if (gameState === 'game-over'){
        return(
            <div>
                <p>Game Over</p>
                <Leaderboard  scores={scores} players={players} ></Leaderboard>
            </div>
        )
    }
    else{
        return(
            <p>Error: {error}</p>   
        )
    }
}

export default Lobby