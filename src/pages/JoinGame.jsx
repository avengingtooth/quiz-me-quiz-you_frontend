import { useState } from "react"

function handleSubmit(e, gameId, username){
    e.preventDefault()
    window.location.href =`/multiplayer/play/${gameId}/${username}/`
}

function JoinGame(){
    // form for players to enter code to join a multiplayer game
    const [gameId, updateGameId] = useState('')
    const [username, updateName] = useState('')
    return(
        <>
            <h1 className="join-multiplay-title">JOIN THE MULTIPLAYER GAME</h1>
            <form className="join-game-form" onSubmit={e => handleSubmit(e, gameId, username)}>
                <input className="join-game-input" type="text" placeholder="Game Id" value={gameId} onChange={e => updateGameId(e.target.value)} />
                <input className="join-game-input" type="text" placeholder="Username" value={username} onChange={e => updateName(e.target.value)} />
                <button className="join-multiplay-game">Join Game</button>
            </form>
        </>
    )
}

export default JoinGame