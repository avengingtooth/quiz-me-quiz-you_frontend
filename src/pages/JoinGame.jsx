import { useState } from "react"

function handleSubmit(e, gameId, username){
    e.preventDefault()
    console.log(username)
    window.location.href =`/multiplayer/play/${gameId}/${username}/`
}

function JoinGame(){
    // form for players to enter code to join a multiplayer game
    const [gameId, updateGameId] = useState('')
    const [username, updateName] = useState('')
    return(
        <form onSubmit={e => handleSubmit(e, gameId, username)}>
            <input type="text" value={gameId} onChange={e => updateGameId(e.target.value)}/>
            <input type="text" value={username} onChange={e => updateName(e.target.value)}/>
            <button>Join Game</button>
        </form>
    )
}

export default JoinGame