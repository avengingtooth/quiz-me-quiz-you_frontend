import { useEffect } from "react"
import { useState } from "react"
import Answer from "./Answer"

function Question(props){
    const [selected, setAnswer] = useState(null)
    useEffect(() => {
        props.setAnswer(selected)
    }, [selected])
    return(
        <div className="question">
            <h2>{props.title}</h2>
            <div className="answerContainer">
                {
                    props.answers.map((ans, ind) => {
                        return(
                            <Answer key={ind} selected={selected} ind={ind} ans={ans} setAnswer={setAnswer}></Answer>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Question