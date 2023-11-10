import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [userData, setUserData] = useState({
    fname: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    address: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    try {
      const response = await axios.post("/api/user/register", userData); // Make sure to use the correct API endpoint
      console.log(response.data);
    } catch (error) {
      console.error("Error registering user:", error.response.data.error);
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-w-md p-4 mx-auto bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="fname"
            className="block text-sm font-medium text-gray-600"
          >
            Full Name:
          </label>
          <input
            className="w-full px-3 py-2 leading-5 border rounded focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            name="fname"
            placeholder="Full Name"
            value={userData.fname}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email:
          </label>
          <input
            className="w-full px-3 py-2 leading-5 border rounded focus:outline-none focus:ring focus:border-blue-300"
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password:
          </label>
          <input
            className="w-full px-3 py-2 leading-5 border rounded focus:outline-none focus:ring focus:border-blue-300"
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-600"
          >
            Confirm Password:
          </label>
          <input
            className="w-full px-3 py-2 leading-5 border rounded focus:outline-none focus:ring focus:border-blue-300"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={userData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-600"
          >
            Age:
          </label>
          <input
            className="w-full px-3 py-2 leading-5 border rounded focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            name="age"
            placeholder="Age"
            value={userData.age}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-600"
          >
            Address:
          </label>
          <input
            className="w-full px-3 py-2 leading-5 border rounded focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            name="address"
            placeholder="Address"
            value={userData.address}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-600"
          >
            Mobile:
          </label>
          <input
            className="w-full px-3 py-2 leading-5 border rounded focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            name="phone"
            placeholder="Phone"
            value={userData.phone}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
