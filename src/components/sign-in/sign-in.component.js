import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { SignInContainer, ButtonsContainer, SignInTitle } from './sign-in.styles'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
import { useDispatch } from 'react-redux'

function SignIn() {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: ''})
    const dispatch = useDispatch()

    const { email, password } = userCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(emailSignInStart({ email, password }))
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setUserCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <SignInContainer>
            <SignInTitle>I already have an account.</SignInTitle>
            <span>Sign In with your email and password.</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    type='email' 
                    name='email' 
                    value={email} 
                    handleChange={handleChange}
                    label='Email'
                    required 
                />
                <FormInput 
                    type='password' 
                    name='password' 
                    value={password} 
                    handleChange={handleChange}
                    label='Password'
                    required 
                />
                <ButtonsContainer>
                    <CustomButton type='submit'> Sign In </CustomButton>
                    <CustomButton type='button' onClick={() => dispatch(googleSignInStart())} isGoogleSignIn > Sign In With Google </CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignIn;