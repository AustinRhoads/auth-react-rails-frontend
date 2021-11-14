import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login(props) {

    const navigate = useNavigate()

    const login_and_redirect = () => {
        props.login_user()
        navigate('/', {replace: true})
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={login_and_redirect}>login</button>
        </div>
    )
}

export default Login;
