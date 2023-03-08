import { useState } from "react"
import EssentialAuth from "../components/EssentialAuth"

function SignUp(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return(
        <form>
            <EssentialAuth setUsername={setUsername} setPassword={setPassword}/>
            <label>
                Confirm password
                <input type="password" />
            </label>
            <button onClick={console.log('create account')}>Create Account</button>
        </form>
    )
}

export default SignUp