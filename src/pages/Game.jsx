import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import socketIOClient from 'socket.io-client'
import AwaitStart from '../components/AwaitStart'
import Playing from '../components/Playing'
import Results from '../components/GameResults'
import ErrorPage from '../components/ErrorPage'

function Game(){
    let { gameId, username } = useParams()
    const [question, setQuestion] = useState('')
    const [gameState, setGameState] = useState('waiting')
    const [curAnswer, setAnswer] = useState(-1)
    const [clientSocket, setSocket] = useState(null)
    const [scores, setScores] = useState(null)
    const [players, setPlayers] = useState([])
    const [error, setError] = useState("")


    useEffect(() => {
        const socket = socketIOClient('http://localhost:4000/')
        socket.emit('join', {gameId, username})
        setSocket(socket)

        socket.on('question', questionData => {
            setQuestion(questionData)
            setAnswer(-1)
            socket.emit('updateAnswer', {aInd: -1, gameId: gameId})
        })

        socket.on('gameState', state => {
            setGameState(state)
        })

        socket.on('error', err => {
            setError(err)
        })

        socket.on('scores', data => {
            console.log('scores', data)
            let {scores, players} = data
            setScores(scores)
            setPlayers(players)
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
            
            {   
                !error
                    ?gameState === 'await-start'?<AwaitStart scores={scores} players={players}></AwaitStart>
                    :gameState === 'playing'?<Playing id={clientSocket?clientSocket.id:''} scores={scores} players={players} curAnswer={curAnswer} setAnswer={setAnswer} title={question.questionText} answers={question.answers}></Playing>
                    :gameState === 'game-over'?<Results scores={scores} players={players}></Results>
                    :''
                :<ErrorPage actionText='Ok' redirection='/multiplayer/join' error={error}></ErrorPage>
            }
        </div>
    )
}

export default Game