import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Login(props) {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const user = {username, password}

    const login_and_redirect = (e) => {
        e.preventDefault()
        props.login_user(user)
        navigate('/', {replace: true})
    }

    function updateUsername(e) {
        setUsername(currentUsername => currentUsername = e.target.value)
    }


    function updatePassword(e){
        setPassword(currentPassword => currentPassword = e.target.value)
    }

    return (
        <div>
            <h1>Login</h1>
            
            <form onSubmit={(e) => login_and_redirect(e)}>
                <input type="text" placeholder="username" onChange={(e) => updateUsername(e)} value={username}/>
                <input type="password" placeholder="password" onChange={(e) => updatePassword(e)} value={password}/>
                <input type="submit"value="login" />
            </form>
        </div>
    )
}

export default Login;
