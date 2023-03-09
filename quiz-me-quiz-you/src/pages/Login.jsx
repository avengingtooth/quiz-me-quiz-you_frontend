import { useState } from "react"
import EssentialAuth from "../components/EssentialAuth"

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return(
        <form className="auth">
            <h1>Log In</h1>
            <EssentialAuth setUsername={setUsername} setPassword={setPassword}/>
            <button onClick={() => {console.log('logging in', username, password)}}>Log In</button>
        </form>
    )
}

export default Login