import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

const Register = () => {

  const [ credentials, setCredentials ] = useState({
    username: "",
    password: "", 
    role: ""
  });

  const [ isLoading, setIsLoading ] = useState(false);

  const loading = () => {
    setIsLoading(true);
  }

  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
      });
  };

  const register = e => {
    e.preventDefault();
    axios
      .post("/api/auth/register", credentials)
      .then(res => {
          console.log(res);
        // localStorage.setItem("authorization", res.data.payload);
        // props.history.push("/#");
      })
      .catch(err => {
        // localStorage.removeItem("authorization");
        console.log("invalid login: ", err);
      });
  };

  return (
    <div>
      {isLoading && (
          <div>
            <Loader type="Puff" color="#204963" height={60} width={60} />
            <p>Registering you now...</p>
          </div>
        )}
      <h1>Register as a customer or as an operator</h1>  
      <form onSubmit={register} >
        <input
          type="text"
          name="username"
          value={credentials.username}
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <select name="role" value={credentials.role} onChange={handleChange}>
            <option value="customer" selected>Customer</option>
            <option value="owner">Owner</option>
        </select>
        <button onClick={loading}>Sign Up</button>
      </form>
    </div>
  )
};

export default Register;
