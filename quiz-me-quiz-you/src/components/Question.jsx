function Question(props){
    return(
        <div className="question">
            <h2>Question</h2>
            <div className="answerContainer">
                {
                    props.answers.map(ans => {
                        return(
                            <button key={ans} className="answer">
                                <p>{ans}</p>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Question