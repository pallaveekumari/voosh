import React, { useContext, useEffect } from "react";
import {
  TextField,
  Box,
  Button,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "../Todo/Todo.module.css";
import EachTask from "../../Components/EachTask/EachTask";
import { AppContext } from "../../Context/AppContext";

const Todo = () => {
  const { productdata,getAllTaskData } = useContext(AppContext);

  useEffect(()=>{
    getAllTaskData()
  },[])


  return (
    <>
      <Box>
        <Navbar />

        <Box className={styles.conatiner}>
          <Box display="flex" alignItems="center" gap={2}>
            <TextField
              label="Search"
              variant="outlined"
              style={{ width: "300px" }}
            />
            <Button variant="contained" color="primary">
              Search
            </Button>

            <Typography variant="body1">Sort by</Typography>
            <Select
              variant="outlined"
              defaultValue="asc"
              style={{ width: "150px" }}
            >
              <MenuItem value="asc">Ascending</MenuItem>
              <MenuItem value="desc">Descending</MenuItem>
            </Select>
          </Box>
        </Box>

        <Box className={styles.todocontainer}>
          <Box className={styles.eachtodocontainer}>
            <Box className={styles.todotext}>Todo</Box>

            <Box className={styles.taskDatas}>
              {productdata?.map((el, i) => {
                return <EachTask element={el} key={i} />;
              })}
            </Box>
          </Box>
          <Box className={styles.eachtodocontainer}>
            <Box className={styles.todotext}>In Progress</Box>
          </Box>
          <Box className={styles.eachtodocontainer}>
            <Box className={styles.todotext}>Done</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Todo;
