import { useEffect } from "react"
import { useState } from "react"


function handleSubmit(e, gameId){
    e.preventDefault()
    // check if game exists
    window.location.href =`/multiplayer/play/${gameId}`
}

function JoinGame(){
    const [gameId, updateGameId] = useState('')
    return(
        <form onSubmit={e => handleSubmit(e, gameId)}>
            <input type="text" value={gameId} onChange={e => updateGameId(e.target.value)}/>
            <button>Join Game</button>
        </form>
    )
}

export default JoinGame