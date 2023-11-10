import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Addtodo from "./components/Addtodo";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addtodo" element={<Addtodo />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
