import React from 'react';
import { Button } from '@mui/material';
import { useGoogleLogin } from 'react-use-googlelogin';
import GoogleIcon from '@mui/icons-material/Google';


const GoogleLoginComponent = ({ responseSuccess, responseError }) => {
  const { signIn } = useGoogleLogin({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,

  });

  const handleSignIn = () => {
    signIn()
    .then((response) => {
        console.log(response)
        console.log('User profile:', response.profileObj);

        if (responseSuccess) {
          responseSuccess(response);
        }
      })
      .catch((error) => {
     
        if (responseError) {
          responseError(error);
        }
      });
  };

  return (
    <Button variant="contained" color="primary" startIcon={<GoogleIcon />} onClick={handleSignIn}>
      Sign in with Google
    </Button>
  );
};

export default GoogleLoginComponent;
