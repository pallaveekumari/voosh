import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React from 'react'

const EditTaskPopup = ({open,handleClose}) => {
   
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>ADD TASK</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Title"
          type="text"
          fullWidth
          variant="outlined"
          name="title"
        //   onChange={(e) => handleChange(e)}
        />

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Description"
          type="text"
          fullWidth
          variant="outlined"
          name="description"
        //   onChange={(e) => handleChange(e)}
        />

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Task Details"
          type="text"
          fullWidth
          variant="outlined"
          name="taskdetails"
        //   onChange={(e) => handleChange(e)}
        />
      </DialogContent>
      <DialogActions>
        <Button  variant="contained" >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditTaskPopup