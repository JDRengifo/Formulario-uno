import React from "react";
import { useState } from "react";
// import Validation from "../validation/validation";

const validation = (userData)=>{
  let errors = {}
  if(userData.email.length < 5){
    errors.email = 'email invalido'
  }
  return errors;
}

const Form = () => {
const [userData, setUserData] = useState({
  email: '',
  password: ''
})
const [errors, setErrors] = useState({
  email: '',
  password: ''
})

const handleChange = (event) => {
    setUserData({...userData, [event.target.name]: event.target.value})
    setErrors(validation({...userData, [event.target.name]: event.target.value}))
};
console.log(errors)

    function submitHandler(event){
      event.preventDefault();
      alert("voy por buen camino")
    }

    return(
      <>
        <img src="https://th.bing.com/th?id=OIP.gS0sLM8mRFXS_WzQmDMY5QHaLQ&w=202&h=308&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
        <form onSubmit={submitHandler}>
          <label htmlFor="email">E-mail: </label>
          <br />
          <input 
             type="email" 
            name = 'email' 
            placeholder="EMAIL"
            value={userData.email}
            onChange={handleChange}  
          />
          {/* {errors.email !== '' && <p style={{color:red}}>{errors.email}</p>} */}
          <br />

          <label htmlFor="password">Password: </label><br />
          <input
            type="text" 
            name = 'password' 
            placeholder="CONTRASEÑA"
            value={userData.password}
            onChange={handleChange}  
          />
          <br />
          <button type="submit"
          disabled={!userData.email || !userData.password || errors.email || errors.password}
          >Ingresar</button>
        </form>
      </>
        )
    };

export default Form;