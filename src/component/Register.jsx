import React, { useState } from 'react'
import '../Assert/Register.css'
import celebration from '../Picture/Welcome-cuate.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [customer_email,setEmail]=useState("");
    const [customer_password,setPassword]=useState("")
    const [confirm_password,setConfirmPassword]=useState("")
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const validate = () => {
     
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
  
      if (!confirm_password) {
        isValid = false;
        errors["confirmPassword"] = "*Please confirm your password.";
      }
  
      if (typeof password !== "undefined" && typeof confirmPassword !== "undefined") {
        if (customer_password !== confirm_password) {
          isValid = false;
          errors["confirmPassword"] = "*Passwords don't match.";
        }
      }
  
      setErrors(errors);
      return isValid;
    }
  
    const handleSignupSubmit=(e)=>
    {
        e.preventDefault();
        if(validate())
        {
          const user={customer_password,confirm_password,customer_email}
          console.log(user)
          axios.post("http://localhost:8080/user/register",{customer_email,customer_password,confirm_password})
          .then(response=>
          {
            console.log(response)
            
            navigate("/")
          }
          ).catch((e)=>
        {
          console.log(e.response);
          
        })
        }
    }
  return (
    <div className="register-container">
      <div className='register-section'>
      <div className="registerImgsection">
        <img src={celebration} alt="celebration"  className='registerImg'/>
      </div>
      <form  className ="register"onSubmit={handleSignupSubmit}>
      <h2>Signup</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            
            value={customer_email}
            onChange={(e) => setEmail(e.target.value)}
           
            placeholder='Enter Your Email'
          />
           <div className="error">{errors.email}</div>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
         
            value={customer_password}
            onChange={(e) => setPassword(e.target.value)}
           
            placeholder='Enter Your Password'
          />
           <div className="error">{errors.password}</div>
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
           
            value={confirm_password}
            onChange={(e) => setConfirmPassword(e.target.value)}
         
            placeholder='Enter your confirm Password'
          />
           <div className="error">{errors.confirmpassword}</div>
        </div>
        <button type="submit" className="btn">Signup</button>
        <Link className='navigator' to={"/login"}>Already have an account?</Link>
      </form>
      </div>
      
    </div>
  )
}

export default Register