function EssentialAuth(props){
    return(
        <>
            <label className={typeof props.uniqueUsername === "boolean"?(props.uniqueUsername?'valid':'invalid'):'login'}>
                <input type='text' placeholder="Username" onChange={event => props.setUsername(event.target.value)}/>
            </label>
            <label className={typeof props.validPsw === "boolean"?(props.validPsw?'valid':'invalid'):'login'}>
                <input type='password' placeholder="Password"  onChange={event => {props.setPassword(event.target.value)}}/>
            </label>
        </>
    )
}

export default EssentialAuth