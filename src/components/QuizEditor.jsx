import { useState } from "react"
import myApi from '../service/api.js'

async function handleSubmit(e, title, description, questions){
    let quiz = {
        owner: 'Bob',
        title: title,
        description: description,
        questions: questions
    }
    e.preventDefault()
    console.log(await myApi.createQuiz(quiz))
    // send data to backedn to create quiz
    window.location.href = '/quiz/all'
}

function addAnswer(questions, qInd, emptyAnswer){
    // pushes a new empty answer element into the array containing all answers
    let tempCopy = [...questions]
    tempCopy[qInd].answers.push(emptyAnswer)
    return tempCopy
}

function deleteAnswer(questions, qInd, aInd){
    let tempCopy = [...questions]
    tempCopy[qInd].answers = [...questions[qInd].answers.slice(0 , aInd), ...questions[qInd].answers.slice(aInd + 1)]
    return tempCopy
}

function updatedQuestionCopy(e, questions, qInd, aInd, key){
    // replaces value of answer pointss and content or questionText depending on pass params
    let tempCopy = [...questions]
    if(typeof aInd === 'number'){
        tempCopy[qInd]['answers'][aInd][key] = e.target.value
    }
    else{
        tempCopy[qInd]['questionText'] = e.target.value
    }
    return tempCopy
}

function QuizEditor(props){
    // states to keep track of all the inputs and set them to the previous values if editing
    const [title, setTitle] = useState(props.quiz.title)
    const [description, setDesciption] = useState(props.quiz.description)
    const [questions, updateQuestions] = useState(props.quiz.questions)

    console.log(title, description, questions, 'hi')

    // sets the defaults for when adding a questions or answer element
    const emptyAnswer = {
        content: '',
        points: 0
    }
    const emptyQuestion = {
        questionText: '', 
        answers: [
            emptyAnswer
        ]
    }

    return(
        <div className="editor" onSubmit={e => handleSubmit(e, title, description, questions)}>
            <form action="">
                <div>
                    {/* quiz title */}
                    <input className="title" type="text" placeholder='Title' value={title} onChange={event => setTitle(event.target.value)}/>
                    {/* quiz description */}
                    <textarea type="text" placeholder='Description' value={description} onChange={event => setDesciption(event.target.value)}/>
                    <div className="questions">
                        {
                            questions.map((q, qInd) => {
                                return(
                                    <div className="question" key={qInd} >
                                        {/* question content */}
                                        <input type="text" placeholder="Question" value={questions[qInd].questionText} onChange={e => updateQuestions(updatedQuestionCopy(e, questions, qInd))}/>
                                        <div className="answerContainer">
                                            {
                                                q.answers.map((ans, aInd) => {
                                                    return(
                                                        <div key={aInd} className="answer">
                                                            <button onClick={() => {updateQuestions(deleteAnswer(questions, qInd, aInd))}}>✖</button>
                                                            {/* answer content */}
                                                            <input type="text" name="content" value={questions[qInd].answers[aInd].content} onChange={e => updateQuestions(updatedQuestionCopy(e, questions, qInd, aInd, 'content'))}/>
                                                            {/* points content */}
                                                            <input type="number" name="points" value={questions[qInd].answers[aInd].points} onChange={e => updateQuestions(updatedQuestionCopy(e, questions, qInd, aInd, 'points'))}/>
                                                        </div>
                                                    )
                                                })
                                            }      
                                            <button className="addAns" onClick={() => updateQuestions(addAnswer(questions, qInd, emptyAnswer))}>Add Answer</button>
                                        </div>
                                        <button onClick={() => {updateQuestions([...questions.slice(0 , qInd), ...questions.slice(qInd + 1)])}}>Delete Question</button>
                                    </div>
                                )
                            })
                        }
                        <button onClick={() => {updateQuestions([...questions, emptyQuestion])}}>Add Question</button>
                    </div>
                </div>
                <button className="submitForm">{props.action}</button>
            </form>
        </div>
    )
}

export default QuizEditor