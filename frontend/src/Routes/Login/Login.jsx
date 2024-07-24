import React from 'react'
import styles from "../Login/Login.module.css"
import { Box, Button, TextField, Typography } from '@mui/material'

const Login = () => {
  return (
    <>
    <Typography className={styles.loginText}>Login</Typography>
    <Box className={styles.loginbox}>
    <TextField
      label="Email"  
      placeholder="Enter Email Here" 
      variant="outlined" 
      fullWidth  
      
    />
    
    <TextField
      label="Password"  
      placeholder="Enter Password Here" 
      variant="outlined" 
      fullWidth  
    />

    <Button className={styles.loginbutton}>Login</Button>
    <Typography variant="body1">
      Don't have an account?{' '}
      <span style={{ color: 'blue', cursor: 'pointer' }}>Sign Up</span>
    </Typography>
    <Button className={styles.loginGoogle}>Login With Google</Button>
    </Box>
    </>
  )
}

export default Login