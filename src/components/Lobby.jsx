import AllUsernames from "./AllUsernames"
import Leaderboard from "./Leaderboard"

function Lobby(props){
    // multiplayer host display
    // scores is a state of type Object with the playerId = {username: ..., scores:...}
    // players is a state of type Array of all player ids
    // error is a state equal to an error message
    let { scores, players, gameState, error } = props
    if (gameState === 'await-start') {
        return (
            <div>
                <p className="create-lobby-text">Start the quiz when all players have joined</p>
                <AllUsernames scores={scores} players={players} ></AllUsernames>
            </div>
        )
    }
    else if (gameState === 'playing') {
        return (
            <div>
                <p className="create-lobby-text">Playing</p>
                <Leaderboard scores={scores} players={players} ></Leaderboard>
            </div>
        )
    }
    else if (gameState === 'game-over') {
        return (
            <div>
                <p className="create-lobby-text">Game Over</p>
                <Leaderboard scores={scores} players={players} ></Leaderboard>
            </div>
        )
    }
    else {
        return (
            <p>Error: {error}</p>
        )
    }
}

export default Lobby