import React, { createContext, useState } from "react";
import axios from "axios";
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
      let res = await axios.post("http://localhost:8080/signup", signupdata);
      setsignupBtnLoading(false);
      return res.data;
    } catch (err) {
      console.log("error", err);
      setsignupBtnLoading(false);
      return err.response.data;
    }
  };

  const handlelogin = async (payload) => {
    try {
      setloginBtnLoading(true);
      let res = await axios.post("http://localhost:8080/login", payload);
      setloginBtnLoading(false);
      localStorage.setItem("user", JSON.stringify(res.data));
      return res.data;
    } catch (err) {
      console.log("error", err);
      setloginBtnLoading(false);
      return err.response.data;
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      setdeleteBtnLoading(true);
      const token = localStorage.get("token");
      let data = await axios.get(`http://localhost:8080/deletetask/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setdeleteBtnLoading(false);
      return data.data;
    } catch (err) {
      console.log("error", err);
      setdeleteBtnLoading(false);
      return err.response.data;
    }
  };

  const getAllTask = () => {
    sethomepageDataloading(true);
    axios.get(`http://localhost:8080/allposts`).then((res) => {
      setproductdata(res.data.data);
      sethomepageDataloading(false);
    });
  };

  const handleAddTask = async (payload) => {
    try {
      const token = localStorage.get("token");
      let data = await axios.post(`http://localhost:8080/addtask`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      return data.status;
    } catch (err) {
      console.log("FAILED TO ADD THE PRODUCT ", err);
      return err.response.status;
    }
  };

  return (
    <AppContext.Provider
      value={{
        handlelogin,
        getAllTask,
        handleDeleteTask,
        homepageDataloading,
        handleAddsignup,

        
        

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
