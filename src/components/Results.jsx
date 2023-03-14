function Results(props){
    let { scores } = props
    let players = Object.keys(scores)
    console.log(scores, players,  'hi')
    return(
        <div>
            {
                players.map(e => {
                    let { username, score } = scores[e]
                    return(
                        <div key={e}>
                            <p>User: {username}</p>
                            <p>Score: {score}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Results