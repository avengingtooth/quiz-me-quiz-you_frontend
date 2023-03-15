function Answer(props){
    let {ans, selected, setAnswer, ind} = props
    console.log(selected, ind)
    return(
        <button points={ans.points} className={`answer ${selected===ind?'selectedAnswer':''}`} onClick={() => {setAnswer(ind)}}>
            <p>{ans.content}</p>
        </button>
    )
}

export default Answer