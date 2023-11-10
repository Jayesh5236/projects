import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const addTodo = async () => {
    try {
      const res = await axios.post(
        "/api/task",
        {
          taskName: name,
          deadline: deadline,
        },
        {
          headers: {
            "auth-token": JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      alert("Task added successfully");
      if (res.status === 200) {
        navigate("/dashboard");
      }
      // Clear the input fields after adding the task
      setName("");
      setDeadline("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl mb-4">Add Todo</h2>
        <div className="mb-4">
          <label
            htmlFor="todoName"
            className="block text-sm font-medium text-gray-700"
          >
            Todo Name
          </label>
          <input
            type="text"
            id="todoName"
            placeholder="Enter your task"
            value={name}
            onChange={handleNameChange}
            className="w-full mt-1 py-2 px-3 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="deadline"
            className="block text-sm font-medium text-gray-700"
          >
            Deadline
          </label>
          <input
            type="datetime-local"
            id="deadline"
            value={deadline}
            onChange={handleDeadlineChange}
            className="w-full mt-1 py-2 px-3 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={addTodo}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
