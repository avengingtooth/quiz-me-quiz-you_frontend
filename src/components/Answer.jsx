function Answer(props){
    // answer block 
    // the answer content is passed as ans
    // selected is a state for each question representing the answers selected for that question 
    // setAnswers updates the value of selected making only one answer appear selected at once
    // ind is the ind of the answer in the array of answers in the question

    let {ans, ind, selected, setSelected} = props
    return(
        <button className={`answer ${selected===ind?'selectedAnswer':''}`} onClick={() => {setSelected(ind)}}>
            <p>{ans.content}</p>
        </button>
    )
}

export default Answer