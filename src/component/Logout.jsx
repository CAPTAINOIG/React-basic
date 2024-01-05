import React from 'react'
import { GoogleLogout } from 'react-google-login'


const clientId = "939523337752-cgh7jofh594cmpfa2thvco92tl5sj17o.apps.googleusercontent.com"

const Logout = () => {

    const onSuccess =(res)=>{
        console.log("LOGOUT SUCCESSFUL");
    }
  return (
    <div id='signInButton'>
        <GoogleLogout clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
        
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}/>
    </div>
  )
}

export default Logout