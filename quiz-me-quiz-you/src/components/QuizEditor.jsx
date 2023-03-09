import { useState } from "react"
import Answer from "./Answer"

function handleSubmit(e){
    e.preventDefault()
}

function setAns(e, answers, ind, key){
    let tempCopy = [...answers]
    tempCopy[ind][key] = e.target.value
    return tempCopy
}

function QuizEditor(props){
    const [title, setTitle] = useState('')
    const [description, setDesciption] = useState('')
    const [answers, updateAnswers] = useState([])

    return(
        <div className="editor" onSubmit={e => handleSubmit(e)}>
            <form action="">
                <input type="text" name="title" placeholder='Title' onChange={event => setTitle(event.target.value)}/>
                <textarea type="text" name="description" placeholder='Descrition' onChange={event => setTitle(event.target.value)}/>
                <div className="answerContainer">
                    {
                        answers.map((ans, ind) => {
                            return(
                                <div className="answer">
                                    <input type="text" name="content" value={ans.content} onChange={e => updateAnswers(setAns(e, answers, ind, 'content'))}/>
                                    <input type="number" name="score" value={ans.score} onChange={e => updateAnswers(setAns(e, answers, ind, 'score'))}/>
                                </div>
                            )
                        })
                    }      
                    <button onClick={() => {updateAnswers([...answers, {content:'', score:0}])}}>Add Answer</button>
                </div>
                <button>{props.action}</button>
            </form>
        </div>
    )
}

export default QuizEditor