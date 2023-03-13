import { useState } from "react" 
import myApi from '../service/api.js'
import socketIOClient from 'socket.io-client'
import { useEffect } from "react"

function create(setLobbyCode){
    setLobbyCode(myApi.createLobby())
}

function CreateLobby(){
    const [message, setMessage] = useState('')
    const [lobbyCode, setLobbyCode] = useState(null)
    useEffect(() => {
        const socket = socketIOClient('http://localhost:4000/')
        socket.on('message', msg => {
            setMessage(msg)
        })
    },[])
    return(
        <div>
            <button onClick={() => {create(setLobbyCode)}} style={{backgroundColor: 'red'}}>Create Lobby</button>
            {
                lobbyCode
                    ?<p>To join enter code: {lobbyCode.id}</p>
                    :<p>No lobby</p>
            }
        </div>
    )
}

export default CreateLobby