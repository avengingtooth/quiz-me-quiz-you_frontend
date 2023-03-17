import { useEffect, useState } from "react"
import Answer from "./Answer"

function Question(props){
    // shows the question 
    // creates answer components for each answer in the answers array in the question
    // when an answr is clicked on it updates an array with the values of all selected answers
    
    let { setAnswers, setCurAnswer, allAnswers, questionInd, curAnswer, title, answers } = props
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        if (!allAnswers) return
        let prevAnswerValue = allAnswers[questionInd]
        if (prevAnswerValue >= 0){
            setSelected(prevAnswerValue)
        }
    }, [])

    useEffect(() => {
        if (typeof selected === 'number' && allAnswers){
            let temp = allAnswers
            temp[questionInd] = selected
            setAnswers(temp)
        }
        else if (setCurAnswer){
            setCurAnswer(selected)
        }

    }, [selected])

    useEffect(() => {
        if (!questionInd) return
        setSelected(allAnswers[questionInd])
    }, [title])

    return(
        <div className="question">
            <h2>{props.title}</h2>
            <div className="answerContainer">
                {
                    props.answers.map((ans, ind) => {
                        return(
                            <Answer 
                                key={ind} 
                                ind={ind}
                                ans={ans} 
                                selected={selected}
                                setSelected={setSelected}
                            ></Answer>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Question