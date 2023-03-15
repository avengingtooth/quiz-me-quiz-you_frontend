import { useState, useEffect } from "react" 
import socketIOClient from 'socket.io-client'
import { useParams } from 'react-router-dom'
import myApi from '../service/api.js'
import Lobby from "../components/Lobby.jsx"

function nextQuestion(socket){
    socket.emit('sendQuestion')
}

function CreateLobby(){
    let { id } = useParams()
    const [message, setMessage] = useState('')
    const [lobbyCode, setLobbyCode] = useState(null)
    const [clientSocket, setSocket] = useState(null)
    const [gameState, setGameState] = useState('await-start')
    const [error, setError] = useState("")
    const [scores, setScores] = useState(null)
    const [players, setPlayers] = useState([])

    useEffect(() => {
        const socket = socketIOClient('http://localhost:4000/')
        setSocket(socket)

        myApi
            .getQuiz(id)
            .then((res) => {socket.emit('quiz-id', {quiz: res.data.quiz})})
            .catch(error => {console.log(error)})


        socket.on('message', msg => {
            setMessage(msg)
        })

        socket.on('code', code => {
            setLobbyCode(code)
        })

        socket.on('scores', data => {
            let {scores, players} = data
            setScores(scores)
            setPlayers(players)
        })

        socket.on('gameState', state => {
            setGameState(state)
        })

        socket.on('error', err => {
            setError(err)
        })
    },[])
    return(
        <div>
            <p>{message}</p>
            {
                lobbyCode
                    ?<p>To join enter code: {lobbyCode}</p>
                    :<p>No lobby</p>
            }

            <Lobby  scores={scores} players={players} gameState={gameState} error={error}></Lobby>

            <button onClick={() => nextQuestion(clientSocket)} style={{backgroundColor: 'black', color: 'white'}}>Next Question</button>
        </div>
    )
}

export default CreateLobby