import Leaderboard from "./Leaderboard"
import Question from './Question'

function Playing(props){
    // page for multiplayer player when the game is running
    // shows the user's score as well as the leaderboad and the cur question passed by server

    let { id, scores, players, curAnswer, setAnswer, title, answers } = props
    return(
        <div>
            <h1>In Game</h1>
            <h2>Your score:</h2>
            <h3>{scores[id]['score']}</h3>
            <Question setAnswer={setAnswer} selected={curAnswer} title={title} answers={answers}></Question>
            <h2>Leaderboard</h2>
            <Leaderboard scores={scores} players={players}></Leaderboard>
        </div>
    )
}

export default Playing