import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';


function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            await auth.signInWithEmailAndPassword(email, password)
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = e => {
        const { name, value } = e.target;

        name === 'email' ? setEmail(value) : setPassword(value);

    }

    return (
        <div className='sign-in'>
            <h2>I already have an account.</h2>
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
                <div className='buttons'>
                    <CustomButton type='submit'> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign In With Google </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;