import { useEffect } from "react"
import { useState } from "react"


function handleSubmit(e, gameId, username){
    e.preventDefault()
    // check if game exists
    window.location.href =`/multiplayer/play/${gameId}/${username}`
}

function JoinGame(){
    const [gameId, updateGameId] = useState('')
    const [name, updateName] = useState('')
    return(
        <form onSubmit={e => handleSubmit(e, gameId, name)}>
            <input type="text" value={gameId} onChange={e => updateGameId(e.target.value)}/>
            <input type="text" value={name} onChange={e => updateName(e.target.value)}/>
            <button>Join Game</button>
        </form>
    )
}

export default JoinGame