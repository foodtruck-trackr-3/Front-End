import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Loader from "react-loader-spinner";

const Login = () => {

  const [ credentials, setCredentials ] = useState({
    username: "",
    password: ""
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

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/login", credentials)
      .then(res => {
        localStorage.setItem("authorization", res.data.payload);
        // props.history.push("/#");
      })
      .catch(err => {
        localStorage.removeItem("authorization");
        console.log("invalid login: ", err);
      });
  };

  return (
    <div>
      {isLoading && (
          <div>
            <Loader type="Puff" color="#204963" height={60} width={60} />
            <p>Logging you in now...</p>
          </div>
        )}
      <h1>Welcome to Food Truck Tracker</h1>  
      <form onSubmit={login} >
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
        <button onClick={loading}>Log in</button>
      </form>
    </div>
  )
};

export default Login;
