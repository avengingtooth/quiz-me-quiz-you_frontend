import AllUsernames from "./AllUsernames"

function AwaitStart(props){
    // waiting for start on player side
    let { scores, players } = props
    return(
        <div>
            <h1>Waiting for host to start quiz: </h1>
            <h3>Quiz title</h3>
            <p>Description</p>
            <AllUsernames scores={scores} players={players}></AllUsernames>
        </div>
    )
}

export default AwaitStart