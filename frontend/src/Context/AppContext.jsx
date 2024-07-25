import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [homepageDataloading, sethomepageDataloading] = useState(false);
  const [loginBtnLoading, setloginBtnLoading] = useState(false);
  const [signupBtnLoading, setsignupBtnLoading] = useState(false);
  const [deleteBtnLoading, setdeleteBtnLoading] = useState(false);
  const [productdata, setproductdata] = useState([]);

  const handleAddsignup = async (signupdata) => {
    try {
      setsignupBtnLoading(true);
      const { FirstName, LastName, Email, Password } = signupdata;
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${FirstName} ${LastName}`,
          email: Email,
          password: Password,
        }),
      });
      const data = await response.json();
      setsignupBtnLoading(false);
      return data;
    } catch (err) {
      console.log("error", err);
      setsignupBtnLoading(false);
      return { error: err.message };
    }
  };

  const handlelogin = async (payload) => {
    try {
      setloginBtnLoading(true);
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      setloginBtnLoading(false);
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (err) {
      console.log("error", err);
      setloginBtnLoading(false);
      return { error: err.message };
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      setdeleteBtnLoading(true);
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:8080/deletetask/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setdeleteBtnLoading(false);
      return data;
    } catch (err) {
      console.log("error", err);
      setdeleteBtnLoading(false);
      return { error: err.message };
    }
  };

  const getAllTaskData = async () => {
    try {
      sethomepageDataloading(true);
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");
  
      const response = await fetch("http://localhost:8080/alltask", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      const data = await response.json();
      setproductdata(data.data);
      sethomepageDataloading(false);
    } catch (err) {
      console.log("error", err);
      sethomepageDataloading(false);
    }
  };

  const handleAddTask = async (payload) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8080/addtask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log(data);
      return data.status;
    } catch (err) {
      console.log("FAILED TO ADD THE PRODUCT ", err);
      return err.status ? err.status : 500;
    }
  };

  return (
    <AppContext.Provider
      value={{
        handlelogin,
        getAllTaskData,
        handleDeleteTask,
        homepageDataloading,
        handleAddsignup,
        productdata,
        loginBtnLoading,
        signupBtnLoading,
        deleteBtnLoading,
        handleAddTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
