import { useEffect, useState } from "react"
import EssentialAuth from "../components/EssentialAuth"

function checkOverall(fields, updateOverallValidity){
    // checks if all fields in the form are valid if they are it allows the submit button to be pressed without css dodging
    // double check on backend after cuz frontend results can be modified
    console.log('check', fields[1])
    let allValid = true
    fields.map(e => {
        if(!e){
            allValid = false
        }
    })
    updateOverallValidity(allValid)
}

function SignUp(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [validPsw, updatePswValidity] = useState(false)
    const [uniqueUsername, updateUniqueUsername] = useState(false)
    const [allFieldsValid, updateOverallValidity] = useState(false)
    
    // changes the classname depending on if password is valid or not
    // add client side checks for password secure enought before allowing to validate 
    // still never server side checks after tho
    useEffect(() => {
        if(password.length >= 6 && confirmPassword === password){
            updatePswValidity(true)
            // passing true instead of the validPsw state variable because it doesnt update quick enough
            checkOverall([uniqueUsername, true], updateOverallValidity)
        }
        else{
            updateOverallValidity(false)
        }
    }, [confirmPassword, password])

    // check if username is unique in db
    // needs to send request to backend
    useEffect(() => {
        updateUniqueUsername(true)
        checkOverall([true, validPsw], updateOverallValidity)
    }, [username])
    return(
        <form className="auth">
            <EssentialAuth validPsw={validPsw} setPassword={setPassword} uniqueUsername={uniqueUsername} setUsername={setUsername}/>
            <label className={validPsw?'valid':'invalid'}>
                <input placeholder="Confirm password"  onChange={event => setConfirmPassword(event.target.value)} type="password" />
            </label>
            <button className={allFieldsValid?'validSubmit':'invalidSubmit'} onClick={() => {console.log('create account')}}>Create Account</button>
        </form>
    )
}

export default SignUp