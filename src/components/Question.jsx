function Question(props){
    return(
        <div className="question">
            <h2>{props.title}</h2>
            <div className="answerContainer">
                {
                    props.answers.map((ans, ind) => {
                        return(
                            <button key={ind} points={ans.points} className="answer">
                                <p>{ans.content}</p>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Question