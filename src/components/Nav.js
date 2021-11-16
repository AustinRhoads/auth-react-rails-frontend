import React from 'react'
import { Link } from 'react-router-dom'


function Nav(props) {


    const render_login_or_logout_button = () => {

        if(props.logged_in === true){
            return  <Link className="Nav-link log-link" to="/" onClick={props.logout_user}>Logout</Link>
        } else {
            return <Link className="Nav-link log-link" to="/login">Login</Link>
        }
    }



    return (
        <div id="Nav">
            <Link className="Nav-link home-link" to="/">Home</Link>
            {render_login_or_logout_button()}
        </div>
    )
}

export default Nav;
