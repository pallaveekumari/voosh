import { Box, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import styles from "../Homepage/Homepage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import AddTask from "../../Components/AddTaskPopups/AddTaskPopups";
import { AppContext } from "../../Context/AppContext";

const Homepage = () => {
  const [openAddTaskPopup, setOpenAddTaskPopup] = useState(false);
  // const {getProductdata,productdata} = useContext(AppContext)

  const handleOpenAddTask = () => {
    setOpenAddTaskPopup(true); // Use setOpenAddTaskPopup to update the state
  };

  const handleCloseAddTaskPopup = () => {
    setOpenAddTaskPopup(false);
  };

  // useEffect(()=>{
  //  getProductdata()
  // },[])
  return (
    <>
      <Navbar />
      <Button className={styles.addtaskbtn} onClick={handleOpenAddTask}>
        Add Task
      </Button>
      <AddTask open={openAddTaskPopup} handleClose={handleCloseAddTaskPopup} />
    </>
  );
};

export default Homepage;
