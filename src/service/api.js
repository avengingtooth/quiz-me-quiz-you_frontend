import axios from 'axios'

const BACKEND_URL = process.env.ORIGIN || "http://localhost:5005/"

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

myApi.editQuiz = (quizId, updatedQuiz) => {
    return myApi.post("/quiz/edit", {updatedQuiz, quizId})
}

myApi.deleteQuiz = (quizId) => {
    return myApi.post("/quiz/delete", {quizId})
}

export default myApi