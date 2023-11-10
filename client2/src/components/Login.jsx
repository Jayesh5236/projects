import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate =useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("/api/user/login", {
        email,
        password,
      });

      const { success, token } = res.data;
      console.log(success); // Log the success message
      localStorage.setItem("token", JSON.stringify(res.data.token));
      navigate("/addTodo");
      setError(""); // Clear any previous errors
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="w-1/4 mx-auto mt-20">
      <h1 className="text-3xl font-semibold mb-4">Login</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input
        type="text"
        placeholder="Email"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        value={password}
        onChange={handlePasswordChange}
      />
      <button
        className="w-full bg-blue-500 text-white p-2 rounded"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
