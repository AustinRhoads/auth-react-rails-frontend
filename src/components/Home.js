import React from 'react'

function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <h2>{props.logged_in ? "You Logged In":"You Logged Out"}</h2>
        </div>
    )
}

export default Home;
