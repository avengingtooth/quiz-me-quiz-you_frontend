function EssentialAuth(props){
    return(
        <>
            <label className={props.uniqueUsername?'valid':'invalid'}>
                <input type='text' placeholder="Username" onChange={event => props.setUsername(event.target.value)}/>
            </label>
            <label className={props.validPsw?'valid':'invalid'}>
                <input type='password' placeholder="Password"  onChange={event => {props.setPassword(event.target.value)}}/>
            </label>
        </>
    )
}

export default EssentialAuth