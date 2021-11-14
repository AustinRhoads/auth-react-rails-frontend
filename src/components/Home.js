import React from 'react'

function Home(props) {


    const return_proper_text = () => {

        if(props.loading){
          return  <h2>Loading...</h2>
        } else {
          return  <h2>{props.logged_in ? "You Logged In":"You Logged Out"}</h2>
        }

    }

    return (
        <div>
            <h1>Home</h1>
            {return_proper_text()}
         
        </div>
    )
}

export default Home;
