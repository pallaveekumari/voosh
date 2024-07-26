import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/AppContext';
const init = {
  title: "",
  description: "",
  taskdetails: "",
};
const EditTaskPopup = ({open,handleClose}) => {
const {editData}=useContext(AppContext)
  const [formData, setFormData] = useState(editData);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>EDIT TASK</DialogTitle>
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
          value={formData.title}
          onChange={(e) => handleChange(e)}
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
          value={formData.description}
          onChange={(e) => handleChange(e)}
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
          value={formData.taskdetails}
          onChange={(e) => handleChange(e)}
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