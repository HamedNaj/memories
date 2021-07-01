import React, {useState} from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container} from "@material-ui/core";
import {useHistory} from 'react-router-dom'
import {GoogleLogin} from "react-google-login";
import {LockOutlined} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import Icon from './Icon'
import Input from './Input'
import {signin, signup} from '../../actions/auth'
import useStyles from './styles'

const initialState = {firstName: '', email: '', password: '', lastName: '', confirmPassword: ''}

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false)
  const classes = useStyles()
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setFormData] = useState(initialState)
  const history = useHistory()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSignUp) {
      dispatch(signup(formData, history))
    } else {
      dispatch(signin(formData, history))
    }
  }
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const switchMode = () => {
    setIsSignUp(!isSignUp)
  }
  const handleShowPassword = () => {
    setShowPassword(ps => !ps)
  }
  const googleSuccess = async (res) => {
    const result = res?.profileObj
    const token = res?.tokenId
    try {
      dispatch({type: 'AUTH', data: {result, token}})
      history.push('/')
    } catch (e) {
      console.log(e)
    }
  }
  const googleFailure = (e) => {
    console.log('google sign in error ', e)
  }
  return (
    <Container component='main' maxWidth={'xs'}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined/>
        </Avatar>
        <Typography variant={'h5'}>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignUp && (
                <>
                  <Input name={'firstName'} label={'First Name'} handleChange={handleChange} autofocus half/>
                  <Input name={'lastName'} label={'Last Name'} handleChange={handleChange} half/>
                </>
              )
            }
            <Input name={'email'} label={'Email'} handleChange={handleChange} type={'email'}/>
            <Input name={'password'} label={'Password'} handleChange={handleChange}
                   type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
            {isSignUp &&
            <Input name={'confirmPassword'} label={'Repeat Password'} handleChange={handleChange} type={'password'}/>}
          </Grid>
          <Button className={classes.submit} type={'submit'} fullWidth variant={'contained'} color={'primary'}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin clientId={'555798134959-3lp777i3k8ecgnul2bg30kd4mqfm2emm.apps.googleusercontent.com'}
                       render={(renderProps) => (
                         <Button className={classes.googleButton} color={'primary'} fullWidth
                                 onClick={renderProps.onClick}
                                 disabled={renderProps.disabled} startIcon={<Icon/>} variant={'contained'}
                         >Google Sign In </Button>)}
                       onSuccess={googleSuccess}
                       onFailure={googleFailure}
                       cookiePolicy={'single_host_origin'}
          />
          <Grid container justify={'flex-end'}>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp ? 'Already have an account' : 'Dont have an account? Sign Up '}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth
