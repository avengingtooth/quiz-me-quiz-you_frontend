import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import socketIOClient from 'socket.io-client'
import AwaitStart from '../components/AwaitStart'
import Playing from '../components/Playing'
import Results from '../components/GameResults'
import ErrorPage from '../components/ErrorPage'
function Game(){
    let { gameId, username } = useParams()
    const [clientSocket, setSocket] = useState(null)
    const [playerId, setId] = useState(null)

    // in game
    const [question, setQuestion] = useState('')
    const [gameState, setGameState] = useState('waiting')
    const [curAnswer, setCurAnswer] = useState(-1)
    const [allAnswers, setAllAnswers] = useState([])

    // for results and leaderboards
    const [scores, setScores] = useState(null)
    const [players, setPlayers] = useState([])

    const [error, setError] = useState("")

    useEffect(() => {
        const socket = socketIOClient('https://quiz-me-quiz-you.onrender.com/')
        socket.emit('join', {gameId, username})
        setSocket(socket)

        socket.on('question', questionData => {
            setQuestion(questionData)
            socket.emit('updateAnswer', {aInd: -1, gameId: gameId})
        })
        socket.on('gameState', state => {
            setGameState(state)
        })
        socket.on('error', err => {
            setError(err)
        })
        socket.on('scores', data => {
            let {scores, players} = data
            setScores(scores)
            setPlayers(players)
            setId(socket.id)
        })
    }, [])
    useEffect(() => {
        try{
            clientSocket.emit('updateAnswer', {aInd: curAnswer, gameId: gameId})
        }
        catch{
            console.log('socket connection invalid')
        }
    }, [curAnswer])

    useEffect(() => {
        setCurAnswer(-1)
    }, [question])

    return(
        <div>   
            {   
                !error
                    ?gameState === 'await-start'?<AwaitStart scores={scores} players={players}></AwaitStart>
                    :gameState === 'playing'?<Playing 
                            id={playerId}
                            scores={scores} 
                            players={players} 
                            curAnswer={curAnswer} 
                            setCurAnswer={setCurAnswer} 
                            title={question.questionText} 
                            answers={question.answers}
                            ></Playing>
                    :gameState === 'game-over'?<Results scores={scores} players={players} id={playerId}></Results>
                    :''
                // :<ErrorPage error={error}></ErrorPage>
                :<ErrorPage actionText='Ok' redirection='/multiplayer/join' error={error}></ErrorPage>
            }
        </div>
    )
}
export default Game