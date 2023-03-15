import axios from 'axios'
import env from "react-dotenv";

// env.config({path: '../../.env'})

const BACKEND_URL = process.env.REACT_APP_ORIGIN;
console.log(BACKEND_URL)

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