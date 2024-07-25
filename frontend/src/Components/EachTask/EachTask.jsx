import { Box, Button } from '@mui/material'
import React from 'react'
import styles from "../EachTask/EachTask.module.css"
const EachTask = ({el}) => {
  return (
    <>
    <Box className={styles.container}>
<Box>Title:{el.title} </Box>
<Box>Desc: {el.description}</Box>
<Box>TaskDetails: {el.taskdetails}</Box>
    
    <Box>
        <Button className={styles.deleteBtn}>Delete</Button>
        <Button className={styles.editBtn}>Edit</Button>
    </Box>

    </Box>
    </>
  )
}

export default EachTask