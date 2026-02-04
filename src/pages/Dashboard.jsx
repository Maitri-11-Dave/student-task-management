import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TastList";
import { resumeToPipeableStream } from "react-dom/server";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data = responce.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    localStorage.removeItem("authData");
    // localStorage.clear()
    navigate("/login");
  };

  return (
    <div>
      <Navbar title="Task Manager" onLogout={handleLogout} />
      <h1>MY TASK</h1>
      <TaskList />
    </div>
  );
};

export default Dashboard;
