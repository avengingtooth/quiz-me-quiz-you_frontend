import { useState, useContext } from "react"
import EssentialAuth from "../components/EssentialAuth"
import { useNavigate } from "react-router-dom";
import myApi from "../service/api"
import { AuthContext } from "../context/auth.context";  


const API_URL = "http://localhost:5005";

function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();
    const { storeToken } = useContext(AuthContext);

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        myApi.post('/auth/login', { username, password })
        .then((response) => {
            
              console.log('JWT token', response.data.authToken );
            
              storeToken(response.data.authToken);

              navigate('/');  

            })
            .catch((error) => {
              const errorDescription = error.response.data.message;
              setErrorMessage(errorDescription);
            })
    };
    
    return (
        <>
        <h1>Log In</h1>
        <form className="auth" onSubmit={handleLoginSubmit}>
            <EssentialAuth setUsername={setUsername} setPassword={setPassword} />
            <button type="submit">Log In</button>
        </form>
        </>
    )
}

export default Login