function EssentialAuth(props){
    // sets up the username and password inputs 
    // is a component as it is necessary in both login and sign up
    // classnames valid and invalid change the color of the input field
    let { uniqueUsername, setUsername, validPsw, setPassword} = props
    return(
        <>
            <label className={typeof uniqueUsername === "boolean"?(uniqueUsername?'valid':'invalid'):'login'}>
                <input type='text' placeholder="Username" onChange={event => setUsername(event.target.value)}/>
            </label>
            <label className={typeof validPsw === "boolean"?(validPsw?'valid':'invalid'):'login'}>
                <input type='password' placeholder="Password"  onChange={event => {setPassword(event.target.value)}}/>
            </label>
        </>
    )
}

export default EssentialAuth