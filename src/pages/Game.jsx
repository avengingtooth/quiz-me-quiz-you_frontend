import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import socketIOClient from 'socket.io-client'

function Game(){
    let { gameId } = useParams()
    const [question, setQuestion] = useState('')
    console.log('in game')
    useEffect(() => {
        const socket = socketIOClient('http://localhost:4000/')
        socket.emit('join', gameId)

        socket.on('join-success', msg => {
            console.log(msg)
        })

        socket.on('question', questionData => {
            setQuestion(questionData)
        })
    })
    return(
        <div>
            <h1>In game: {gameId}</h1>
            <p>{question}</p>
        </div>
    )
}

export default Game