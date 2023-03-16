import axios from 'axios'

const BACKEND_URL = process.env.REACT_APP_ORIGIN || 'http://localhost:5005/';

const myApi = axios.create({
    baseURL: BACKEND_URL,
})

// quiz crud

myApi.interceptors.request.use(request => {
    const token = localStorage.getItem('token')
    request.headers.Authorization = token ? `Bearer ${token}` : ''
    return request
})

myApi.createQuiz = (quiz) => {
    return myApi.post('/quiz/create', {quiz})
}

myApi.getQuizWithPoints = (quizId) => {
    return myApi.get(`/quiz/getQuizWithPoints/${quizId}`)
}

myApi.editQuiz = (quizId, updatedQuiz) => {
    return myApi.post("/quiz/edit", {updatedQuiz, quizId})
}

myApi.deleteQuiz = (quizId) => {
    return myApi.post("/quiz/delete", {quizId})
}

// correcting single player quiz
myApi.correctQuiz = (id, answers) => {
    return myApi.post("/quiz/getScore", {answers, id})
}

// fetching quiz information

myApi.getQuizzes = (offset, count, query) => {
    return myApi.get(`/quiz/getMultiple/${count}/${offset}/${query?query:' '}/`)
}

myApi.getQuiz = (quizId) => {
    return myApi.get(`/quiz/getById/${quizId}`)
}

export default myApi