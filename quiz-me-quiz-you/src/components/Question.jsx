function Question(props){
    return(
        <div className="question">
            <h2>Question</h2>
            <div className="answerContainer">
                {
                    Object.keys(props.answers).map(key => {
                        return(
                            <button key={key} points={props.answers[key]} className="answer">
                                <p>{key}</p>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Question