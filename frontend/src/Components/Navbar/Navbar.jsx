import { Box, Button } from "@mui/material";
import React from "react";
import styles from "../Navbar/Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <Box className={styles.navbar}>
        <Box className={styles.btnbox}>
          <Button className={styles.loginbtn}>Login</Button>
          <Button className={styles.signupbtn}>Signup</Button>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
