import React from 'react'
import styles from "../Signup/Signup.module.css"
import { Button, TextField, Typography ,Box} from '@mui/material'
const Signup = () => {
  return (
    <>
    <Typography className={styles.loginText}>Signup</Typography>
    <Box className={styles.loginbox}>
    <TextField
      label="First Name"  
      placeholder="Enter First Name" 
      variant="outlined" 
      fullWidth  
   
    />
    
    <TextField
      label="Last Name"  
      placeholder="Enter Last Name" 
      variant="outlined" 
      fullWidth  
    
    />
     <TextField
      label="Email"  
      placeholder="Enter Email" 
      variant="outlined" 
      fullWidth  
   
    />
    <TextField
      label="Password"  
      placeholder="Enter Password Here" 
      variant="outlined" 
      fullWidth  
  
    />
    <TextField
      label="Confirm Password"  
      placeholder="Confirm Your Password " 
      variant="outlined" 
      fullWidth  
      
    />
    <Button className={styles.loginbutton}>Signup</Button>
    <Typography variant="body1">
      Don't have an account?{' '}
      <span style={{ color: 'blue', cursor: 'pointer' }}>Login</span>
    </Typography>
    <Button className={styles.loginGoogle}>Signup With Google</Button>
    </Box>
    </>
  )
}

export default Signup