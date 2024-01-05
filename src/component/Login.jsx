import React from 'react'
import {GoogleLogin} from 'react-google-login'
import { useNavigate } from 'react-router-dom'




// secret "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"

const clientId = "939523337752-cgh7jofh594cmpfa2thvco92tl5sj17o.apps.googleusercontent.com"

const Login = () => {

  let navigate = useNavigate()
    // const onSuccess =(res)=>{
    //     console.log(res.tokenId);
    //     console.log("LOGIN SUCCESS! Current user:" , res.profileObj);
    // }



    const onSuccess = (res) => {
  console.log("LOGIN SUCCESS! Current user:", res.profileObj);
  console.log("User's email:", res.profileObj.email);
  if(res.profileObj.email){
    navigate("/")
  }

};

    const onFailure =(res)=>{
        console.log("LOGIN FAIlED! res:" , res);
    }
  return (
    <div id='signInButton'>
        <GoogleLogin className='mt-5 w-50' clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}/>
    </div>
  )
}

export default Login