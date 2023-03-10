import axios from 'axios'

const BACKEND_URL = "http://localhost:5005"

const myApi = axios.create({
    baseURL: BACKEND_URL,
})

myApi.createQuiz = (quiz) => {
    return myApi.post('/quiz/create', {quiz: quiz})
}

myApi.getQuizzes = (startInd, count) => {
    return myApi.get('/quiz/get', {startInd: startInd, count: count})
}

export default myApi