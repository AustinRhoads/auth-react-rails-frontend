const ACTION_ROUTES ={
    LOGIN_ROUTE: "http://localhost:3000/login"
}



const USER_ACTIONS ={
    LOGIN:  (user) => {
        return(dispatch) => {

            dispatch({type: "LOGGING_IN"});



            const configuration_object = {
           
                method: "POST",
    
                credentials: 'include',
    
                headers: {
                    'X-CSRF-TOKEN': unescape(document.cookie.split('CSRF-TOKEN=')[1]),
                    'content-type': 'application/json'
                },
    
                body: JSON.stringify(user)
    
            };



                fetch(ACTION_ROUTES.LOGIN_ROUTE, configuration_object)
                 .then(response => response.json())
                 .then(returned_user_object => {
                     if(returned_user_object.logged_in){
                        dispatch({type: "LOGIN", user: returned_user_object.user});
                     } else {
                        console.log(returned_user_object.errors)
                     }
                    
                     
                 })

          

        }
        
    },
    LOGOUT: ()  => {
        return(dispatch) => {
            dispatch({type: "LOGOUT"})
        }
        
    } 
}

export default USER_ACTIONS;