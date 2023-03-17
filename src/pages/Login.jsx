import { useState, useContext } from "react"
import EssentialAuth from "../components/EssentialAuth"
import { useNavigate } from "react-router-dom";
import myApi from "../service/api"
import { AuthContext } from "../context/authContext";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(undefined);
    const { authenticateUser } = useContext(AuthContext)


    const navigate = useNavigate();
    const { storeToken } = useContext(AuthContext);

    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        const userToLogin = { username, password }

        try {
            const response = await myApi.post('/auth/login', userToLogin)
            console.log(response)
            storeToken(response.data.authToken)
            authenticateUser()
            navigate('/quiz/all')
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <>
            <h1 className="log-in-title">Log In</h1>
            <div>
                <form className="auth" onSubmit={handleLoginSubmit}>
                    <EssentialAuth setUsername={setUsername} setPassword={setPassword} />
                    <button className="log-in-reg-btn" type="submit">Log In</button>
                </form>
            </div>
        </>
    )
}

export default Login