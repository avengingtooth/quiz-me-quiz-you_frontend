import { useEffect, useState } from "react"
import EssentialAuth from "../components/EssentialAuth"
import myApi from "../service/api"
import { useNavigate } from 'react-router-dom'



function checkOverall(fields, updateOverallValidity) {
    // checks if all fields in the form are valid if they are it allows the submit button to be pressed without css dodging
    // double check on backend after cuz frontend results can be modified
    let allValid = true
    fields.forEach(e => {
        if (!e) {
            allValid = false
        }
    })
    updateOverallValidity(allValid)
}

function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [validPsw, updatePswValidity] = useState(false)
    const [uniqueUsername, updateUniqueUsername] = useState(false)
    const [allFieldsValid, updateOverallValidity] = useState(false)
    const navigate = useNavigate();

    // changes the classname depending on if password is valid or not
    // add client side checks for password secure enought before allowing to validate 
    // still never server side checks after tho
    useEffect(() => {
        if (password.length >= 0 && confirmPassword === password) {
            updatePswValidity(true)
            // passing true instead of the validPsw state variable because it doesnt update quick enough
            checkOverall([uniqueUsername, true], updateOverallValidity)
            console.log('psw crt')
        }
        else {
            console.log('set false')
            updatePswValidity(false)
            updateOverallValidity(false)
        }
    }, [confirmPassword, password])

    async function handleSubmit(event) {
        event.preventDefault()
        const userToCreate = { username, password }

        try {
            const response = await myApi.post('/auth/signup', userToCreate)
            if (response.status === 201) {
                navigate('/login')
            }
        } catch (error) {
            console.error(error)
        }
    }


    // check if username is unique in db
    // needs to send request to backend
    useEffect(() => {
        updateUniqueUsername(true)
        checkOverall([true, validPsw], updateOverallValidity)
    }, [username])
    return (
        <>
            <h1 className="sign-up-title">Register</h1>
            <form className="auth" onSubmit={handleSubmit}>
                <EssentialAuth validPsw={validPsw} setPassword={setPassword} uniqueUsername={uniqueUsername} setUsername={setUsername} />
                <label className={validPsw ? 'valid' : 'invalid'}>
                    <input placeholder="Confirm password" onChange={event => setConfirmPassword(event.target.value)} type="password" />
                </label>
                <div>
                    {
                        allFieldsValid
                            ? <div className={`${allFieldsValid ? 'validSubmit' : 'invalidSubmit'} submit`}>
                                <button className="create-account-btn">Create Account</button>
                            </div>
                            : <p className="error" id="hiddenHoverTxt">Not all fields are valid</p>
                    }
                </div>
            </form>
        </>
    )
}

export default SignUp