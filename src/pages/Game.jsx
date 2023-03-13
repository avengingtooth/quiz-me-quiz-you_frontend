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


    useEffect(() => {
        const socket = socketIOClient('http://localhost:4000/')
        socket.emit('join', {gameId, username})
        setSocket(socket)

        socket.on('join-success', success => {
            if(success){
                setGameState('start')
            }
            else{
                setGameState(false)
            }
        })

        socket.on('question', questionData => {
            console.log(gameId, 'sending game id')
            setQuestion(questionData)
            socket.emit('updateAnswer', {aInd: -1, gameId})
        })

        socket.on('gameState', () => {
            setQuestion('')
            setGameState('game-over')
        })
    }, [])

    useEffect(() => {
        if(clientSocket){
            console.log(gameId, 'sending game id')
            clientSocket.emit('updateAnswer', {aInd: curAnswer, gameId})
        }
        else{
            console.log('not connected yet')
        }
    }, [curAnswer])
    return(
        <div>
            <h1>In game: {gameId}</h1>
            { 
                gameState !== false
                    ?question
                        ?<Question setAnswer={setAnswer} title={question.questionText} answers={question.answers}></Question>
                        :gameState === 'start'
                            ?<h1>The Game has not started yet</h1>
                            :<h1>Results page</h1>
                    :<h1>The game id is incorrect</h1>
            }
        </div>
    )
}

export default Game