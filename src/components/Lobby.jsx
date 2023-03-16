import AllUsernames from "./AllUsernames"
import Leaderboard from "./Leaderboard"

function Lobby(props) {
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