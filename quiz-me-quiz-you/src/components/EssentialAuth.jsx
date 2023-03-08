function EssentialAuth(props){
    return(
        <>
            <label>
                Username
                <input type='text' onChange={event => props.setUsername(event.target.value)}/>
            </label>
            <label>
                Password
                <input type='password' onChange={event => props.setPassword(event.target.value)}/>
            </label>
        </>
    )
}

export default EssentialAuth