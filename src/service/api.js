import axios from 'axios'

const BACKEND_URL = "http://localhost:5005/"

const myApi = axios.create({
    baseURL: BACKEND_URL,
})

myApi.createQuiz = (quiz) => {
    return myApi.post('/quiz/create', {quiz})
}

myApi.getQuizzes = (count) => {
    return myApi.get(`/quiz/get/${count}`)
}

myApi.getQuiz = (quizId) => {
    return myApi.get(`/quiz/getId/${quizId}`)
}

// myApi.createLobby = () => {
//     socket.io.on("connection", () => {
//         console.log('id')
//     })
//     // return myApi.post('/multiplayer/create')
// }

export default myApi