import { useState, useEffect } from "react" 
import myApi from '../service/api.js'
import socketIOClient from 'socket.io-client'
import { useParams } from 'react-router-dom'
import Results from "../components/Results.jsx"

function nextQuestion(socket){
    socket.emit('sendQuestion')
}

function CreateLobby(){
    let { id } = useParams()
    const [message, setMessage] = useState('')
    const [lobbyCode, setLobbyCode] = useState(null)
    const [clientSocket, setSocket] = useState(null)
    const [scores, setScores] = useState(null)

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

        socket.on('final-scores', scores => {
            setScores(scores)
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

            {
                scores
                    ?<Results scores={scores}></Results>
                    :<p>playing</p>
            }

            <button onClick={() => nextQuestion(clientSocket)}>Next Question</button>
        </div>
    )
}

export default CreateLobby