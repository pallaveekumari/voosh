import { Box, Button } from '@mui/material'
import React, { useContext } from 'react'
import styles from "../EachTask/EachTask.module.css"
import { AppContext } from '../../Context/AppContext'
const EachTask = ({el}) => {
  const{handleDeleteTask,getAllTaskData} =useContext(AppContext)

  const handleDelete = async (id) => {
    let res = await handleDeleteTask(id);
    console.log('res is ',res)
    if (res == 200) {
      alert("Task deleted successfully");
     await getAllTaskData()
    } else {
      alert("Failed to delete the product");
    }
  };


  return (
    <>
    <Box className={styles.container}>
<Box>Title:{el?.title} </Box>
<Box>Desc: {el?.description}</Box>
<Box>TaskDetails: {el?.taskdetails}</Box>
    
    <Box>
        <Button className={styles.deleteBtn}
        onClick={()=>{
          handleDelete(el.id)
        }}
        >Delete</Button>
        <Button className={styles.editBtn}>Edit</Button>
    </Box>

    </Box>
    </>
  )
}

export default EachTask