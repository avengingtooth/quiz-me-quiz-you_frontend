function Leaderboard(props){
    // shows all usernames and their scores
    // #TODO needs to be ordered
    let { scores, players } = props
    return(
        <div>
            {
                players.map(id => {
                    let { username, score } = scores[id]
                    return(
                        <div key={username}>
                            <span>User: {username} </span>
                            <span>Score: {score} </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Leaderboard