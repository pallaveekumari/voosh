import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <Box className={styles.navbar}>
      <Link to="/">
          <img
            className={styles.vooshLogo}
            src="https://bookface-images.s3.amazonaws.com/logos/545e403209c1c7a3d7a847b1eafd0a622c4554e6.png?1607888997"
            alt="Voosh Logo"
          />
        </Link>
        
        <Box className={styles.btnbox}>
          <Button className={styles.loginbtn} component={Link} to="/todo">Todo List</Button>
          <Button className={styles.loginbtn} component={Link} to="/login">
            Login
          </Button>
          <Button className={styles.signupbtn} component={Link} to="/signup">
            Signup
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
