import { useEffect } from "react"
import { useState } from "react"


function handleSubmit(e, gameId, username) {
    e.preventDefault()
    // check if game exists
    window.location.href = `/multiplayer/play/${gameId}/${username}`
}

function JoinGame() {
    const [gameId, updateGameId] = useState('')
    const [name, updateName] = useState('')
    return (
        <>
            <h1 className="join-multiplay-title">JOIN THE MULTIPLAYER GAME</h1>
            <form className="join-game-form" onSubmit={e => handleSubmit(e, gameId, name)}>
                <input className="join-game-input" type="text" placeholder="Game Id" value={gameId} onChange={e => updateGameId(e.target.value)} />
                <input className="join-game-input" type="text" placeholder="Username" value={name} onChange={e => updateName(e.target.value)} />
                <button className="join-multiplay-game">Join Game</button>
            </form>
        </>
    )
}

export default JoinGame