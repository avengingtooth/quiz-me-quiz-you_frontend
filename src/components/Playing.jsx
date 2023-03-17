import Leaderboard from "./Leaderboard"
import Question from './Question'

function Playing(props){
    let { id, scores, players, curAnswer, setCurAnswer, title, answers } = props
    // page for multiplayer player when the game is running
    // shows the user's score as well as the leaderboad and the cur question passed by server

    return(
        <div>
            <h1>In Game</h1>
            <h2>Your score:</h2>
            <h3>{id?scores[id]['score']:'unknown'}</h3>
            <h2>Leaderboard</h2>
            <Leaderboard scores={scores} players={players}></Leaderboard>
            {title?<Question setCurAnswer={setCurAnswer} curAnswer={curAnswer} title={title} answers={answers}></Question>:''}
        </div>
    )
}

export default Playing