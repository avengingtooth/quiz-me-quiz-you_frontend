import { useState } from "react"

function handleSubmit(e){
    e.preventDefault()
}

function addAnswer(questions, qInd, emptyAnswer){
    let tempCopy = [...questions]
    tempCopy[qInd].answers.push(emptyAnswer)
    return tempCopy
}

function updatedQuestionCopy(e, questions, qInd, aInd, key){
    let tempCopy = [...questions]
    console.log(aInd)
    if(typeof aInd === 'number'){
        tempCopy[qInd]['answers'][aInd][key] = e.target.value
    }
    else{
        tempCopy[qInd]['title'] = e.target.value
    }
    return tempCopy
}

function QuizEditor(props){
    const [title, setTitle] = useState('')
    const [description, setDesciption] = useState('')
    const [questions, updateQuestions] = useState([])
    const emptyAnswer = {
        content: '',
        score: 0
    }
    const emptyQuestion = {
        title: 'title', 
        answers: [
            emptyAnswer
        ]
    }

    return(
        <div className="editor" onSubmit={e => handleSubmit(e)}>
            <form action="">
                <input className="title" type="text" name="title" placeholder='Title' value={title} onChange={event => setTitle(event.target.value)}/>
                <textarea type="text" name="description" placeholder='Description' value={description} onChange={event => setDesciption(event.target.value)}/>
                <div className="questions">
                    {
                        questions.map((q, qInd) => {
                            return(
                                <div className="question" key={qInd} >
                                    <input type="text" placeholder="Question" value={questions[qInd].title} onChange={e => updateQuestions(updatedQuestionCopy(e, questions, qInd))}/>
                                    <div className="answerContainer">
                                        {
                                            q.answers.map((ans, aInd) => {
                                                return(
                                                    <div key={aInd} className="answer">
                                                        <input type="text" name="content" value={questions[qInd].answers[aInd].content} onChange={e => updateQuestions(updatedQuestionCopy(e, questions, qInd, aInd, 'content'))}/>
                                                        <input type="number" name="score" value={ans.score} onChange={e => updateQuestions(updatedQuestionCopy(e, questions, qInd, aInd, 'score'))}/>
                                                    </div>
                                                )
                                            })
                                        }      
                                        <button className="addAns" onClick={() => updateQuestions(addAnswer(questions, qInd, emptyAnswer))}>Add Answer</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => {updateQuestions([...questions, emptyQuestion])}}>Add Question</button>
                </div>
                <button>{props.action}</button>
            </form>
        </div>
    )
}

export default QuizEditor