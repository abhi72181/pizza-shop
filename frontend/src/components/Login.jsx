import React, { useState } from "react";
import "./Signup.css";
import { Input, Stack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userLoginAction } from "../store/userRegister/registerAction";


const Login = () => {
 const location=useLocation()
  const dispatch=useDispatch()
 const navigate=useNavigate()
  

 
  const [log, setLog] = useState({
    email: "",
    password: "",
  });

  const handleChangeLogin = (e) => {
    console.log(e.target.name, e.target.value);
    setLog({ ...log, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if(log.email==""||log.password==""){
    return  alert("Input Box Cannot be Empty")
    }
    else{
      dispatch(userLoginAction(log))
    }
  }
  useEffect(()=>{
    if(localStorage.getItem("currentUser")){
   window.location.href="/"
    }
  
  },[])
  return (
    <div className="mainSignup">
      <div className="containerSignup">
        <label>Email Address:</label>
        <Stack spacing={3}>
          <Input
            variant="outline"
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={handleChangeLogin}
          />
        </Stack>
        <br />
        <label>Password:</label>
        <Stack spacing={3}>
          <Input
            variant="outline"
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleChangeLogin}
          />
        </Stack>

        <br />

        <Button colorScheme="orange" onClick={handleLogin} width="100%">
          Login
        </Button>
        {/* <button onClick={handleSignup}>Register</button> */}
      </div>
    </div>
  );
};

export default Login;
