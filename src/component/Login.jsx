import React, { useState } from 'react'
import "../Assert/Login.css"
import { Link, useNavigate } from 'react-router-dom';
import celebration from "../Picture/Mobile login-amico.png"
import axios from 'axios';
const Login = () => {
    // const [email,setEmail]=useState("");
    // const [password,setPassword]=useState("")
    const [customer_email,setEmail]=useState("");
    const [customer_password,setPassword]=useState("")
    const [error, setErrors] = useState({});
    const navigate = useNavigate();
    const validate = () => {
      let errors = {};
      let isValid = true;
  
      if (!customer_email) {
        isValid = false;
        errors["email"] = "*Please enter your email address.";
      } else if (typeof email !== "undefined") {
        const pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if (!pattern.test(customer_email)) {
          isValid = false;
          errors["email"] = "*Please enter a valid email address.";
        }
      }
  
      if (!customer_password) {
        isValid = false;
        errors["password"] = "*Please enter your password.";
      }
  
      setErrors(errors);
      return isValid;
    }
    const handleLoginSubmit=(e)=>
    {
        e.preventDefault();
        if(validate())
        {
          axios.post('http://localhost:8080/user/loginuser', { customer_email,customer_password })
                .then(response => {
                    console.log(response);
                    navigate("/");
                })
                .catch(error => {
                    console.log(error.response.data);
                    setErrors({ api: error.response.data });
                });
          
        console.log(customer_email);
        console.log(customer_password);
       
        }
    }
  return (
    <div className="login-container">
    <div className="login-section">
    <div className="loginImgsection">
        <img src={celebration} alt="celebration"  className='loginImg'/>
      </div>
    <form onSubmit={handleLoginSubmit} className='login'>
    <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          value={customer_email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter Your Email'
        />
      <p className="error">{error.email}</p>
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={customer_password}
          placeholder='Enter Your Password'
          onChange={(e) => setPassword(e.target.value)} 
       
        />
     <div className="error">{error.password}</div>
      </div>
      <button type="submit" className="btn">Login</button>
    <div className="error">{error.api}</div>
    <Link to={"/register"} className='navigator'>Create a new account</Link>
    </form>
  </div>
  </div>
  )
}

export default Login