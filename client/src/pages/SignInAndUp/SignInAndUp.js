import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './SignInAndUp.scss';

const SignInAndUp = () => (
   <div className="sign-in-and-sign-up">
       <SignIn />
       <SignUp />
   </div> 
);

export default SignInAndUp;