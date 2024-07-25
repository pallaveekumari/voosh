import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import styles from "../Homepage/Homepage.module.css"
import Navbar from '../../Components/Navbar/Navbar'
import AddTask from '../../Components/AddTaskPopups/AddTaskPopups'
// import AddTask from '../../Components/Popups/AddTaskPopups/AddTask'
const Homepage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Navbar/>
    {/* <Box>
      HomePage
    </Box> */}
    <Button className={styles.addtaskbtn}
    onClick={handleOpen}
    >Add Task</Button>
    {/* <AddTask open={open} handleClose={handleClose}/> */}
    <AddTask/>
    </>
  )
}

export default Homepage