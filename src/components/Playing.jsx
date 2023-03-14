import Leaderboard from "./Leaderboard"
import Question from './Question'

function Playing(props){
    let { scores, players, curAnswer, setAnswer, title, answers } = props
    return(
        <div>
            <h1>In Game</h1>
            <h2>Leaderboard</h2>
            <Leaderboard scores={scores} players={players}></Leaderboard>
            <Question setAnswer={setAnswer} selected={curAnswer} title={title} answers={answers}></Question>
        </div>
    )
}

export default Playing