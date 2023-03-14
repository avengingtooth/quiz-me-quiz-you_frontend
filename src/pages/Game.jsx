import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import socketIOClient from 'socket.io-client'
import Question from '../components/Question'

function Game(){
    let { gameId, username } = useParams()
    const [question, setQuestion] = useState('')
    const [gameState, setGameState] = useState(false)
    const [curAnswer, setAnswer] = useState(-1)
    const [clientSocket, setSocket] = useState(null)
    const [players, addPlayer] = useState([])
    const [error, setError] = useState("")


    useEffect(() => {
        const socket = socketIOClient('http://localhost:4000/')
        socket.emit('join', {gameId, username})
        setSocket(socket)

        socket.on('join-success', success => {
            if(success.status){
                setGameState('start')
            }
            else{
                setGameState(false)
                setError(success.error)
            }
        })

        socket.on('question', questionData => {
            setQuestion(questionData)
            setAnswer(-1)
            socket.emit('updateAnswer', {aInd: -1, gameId: gameId})
        })

        socket.on('gameState', () => {
            setGameState('game-over')
        })

        socket.on('player-joined', (username) => {
            console.log(username)
        })
    }, [])

    useEffect(() => {
        if(clientSocket){
            clientSocket.emit('updateAnswer', {aInd: curAnswer, gameId: gameId})
        }
        else{
            console.log('not connected yet')
        }
    }, [curAnswer])

    return(
        <div>
            {console.log(question, gameState, 'lmoa')}
            { 
                gameState !== false
                    ?question
                        ?<Question setAnswer={setAnswer} title={question.questionText} answers={question.answers}></Question>
                        :gameState === 'start'
                            ?<h1>The Game has not started yet</h1>
                            :<h1>Results page</h1>
                    :<h1>{error}</h1>
            }
        </div>
    )
}

export default Game