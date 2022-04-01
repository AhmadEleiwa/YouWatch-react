import React, {useState} from "react";

import Form from "../../shared/components/form-component/Form";
import { useForm } from "../../shared/components/hooks/form-hook";
import Button from "../../shared/components/form-component/button/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_MIN, VALIDATOR_MINLENGTH} from "../../shared/utils/validators";
import Input from "../../shared/components/form-component/input/Input";

import './Auth.css'
import { Link } from "react-router-dom";
const Auth = props =>{

    const [isLogin, setIsLogin] = useState(true)

    const [formState, inputHandler, setFormData] = useForm(
        {},
        false
    );
    const submitHandler = event =>{
        event.preventDefault()
        console.log(formState)
    }
    const switchMode = () =>{
        if (!isLogin) {
            setFormData(
              {
                ...formState.inputs,
                email: undefined
              },
              formState.inputs.username.isValid && formState.inputs.password.isValid
            );
          } else {
            setFormData(
              {
                ...formState.inputs,
                email: {
                  value: '',
                  isValid: false
                }
              },
              false
            );
          }
          setIsLogin(prevMode => !prevMode);
    }
    return<Form color='dark' className='form' method='POST' onSubmit={submitHandler} >
        <Input color='dark'  onInput={inputHandler} id='username'  label='Username' errorText='Please Enter Valid Name'   type='text'  validators={[VALIDATOR_REQUIRE()]}/>
   
        { !isLogin &&
            <Input color='dark'  onInput={inputHandler} id='email'  label='Email' errorText='Please Enter Valid Email'   type='email'  validators={[VALIDATOR_EMAIL()]}/>}
     
        <Input color='dark' placeholder='password'  onInput={inputHandler} id='password'  label='Password' errorText='the pasword must be more than 4 characters'   type='password'  validators={[VALIDATOR_MINLENGTH(4)]}/>
        
        <Button type='submit' color='darkblue' disabled={!formState.isValid}>{isLogin ? 'Login': 'Register'}</Button>
        <p style={{cursor:'pointer'}} onClick={switchMode} >{isLogin?"You don't have account ? create one": 'back to login'}</p>
        </Form>
    
}

export default Auth;