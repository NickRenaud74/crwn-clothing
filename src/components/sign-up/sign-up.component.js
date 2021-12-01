import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import { SignUpContainer, SignUpTitle } from './sign-up.styles'

function SignUp() {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });
            setDisplayName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('');

        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'displayName':
                setDisplayName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword': 
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    }

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have an account.</SignUpTitle>
            <span>Sign up with your email and password.</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={handleChange}
                    label='Display Name'
                    required
                />
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
                <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'> SIGN UP </CustomButton>
            </form>
        </SignUpContainer>
    )
};

export default SignUp;