import React from 'react'
import {Container,FormWrap,Icon,FormContent,Form,FormH1,FormLabel,FormInput,FormButton,Text} from './SigninElements'
const SignIn = () => {
    return (
        <>
          <Container>
              <FormWrap>
                  <Icon to="/">TiTi</Icon>
                  <FormContent>
                      <Form action="#">
                          <FormH1>Sign In to your account</FormH1>
                          <FormLabel htmlFor="for">Email</FormLabel>
                          <FormInput type='email' required />
                          <FormLabel htmlFor='password'>Password</FormLabel>
                          <FormInput type='password' required />
                          <FormButton type='submit'>Continue</FormButton>
                          <Text>Forget passsword</Text>
                      </Form>
                  </FormContent>
              </FormWrap>
          </Container>  
        </>
    )
}

export default SignIn
