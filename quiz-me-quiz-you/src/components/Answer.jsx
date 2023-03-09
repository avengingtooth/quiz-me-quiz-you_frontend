function setValues(props, e, type){
    let copy = props.answer
    copy[props.ind][type] = e.target.value
    console.log(e.target.value, copy)
    return copy
}

function Answer(props){
    return(
        <div className="answer">
            <input type="text" name="content" value={props.content} onChange={e => props.updateAnswers(setValues(props, e, 'content'))}/>
            <input type="number" name="score" value={props.score} onChange={e => props.updateAnswers(setValues(props, e, 'score'))}/>
        </div>
    )
}

export default Answer