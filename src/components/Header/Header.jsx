import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import Button from "../Button/Button";
import Tasks from "../Tasks/Tasks";
import { useState } from "react";
import AddTask  from "../AddTask/AddTask";

const Header = (props) => {
  const [showAddTask , setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Go and Get some Coffee",
      place: "From Grocery Store",
      time: "At 12:00 P.M",
    },
    {
      id: 2,
      text: "Please buy some Vegetables",
      place: "From Market Store",
      time: "At 4:00 P.M",
    },
    {
      id: 3,
      text: "Study Time",
      place: "School",
      time: "At 7:00 A.M",
    },
    {
      id: 4,
      text: "Play Cricket",
      place: "Ground",
      time: "At 6:00 P.M",
    },
  ]);



  const deleteTask = (id) => {
    console.log("delete", id);
    setTask(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      })
    );
    console.log(id);
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1;
    const newTask = {id, ...task};
    setTask([...tasks, newTask])

  }

  return (
    <div className="container">
      <div className= "main-heading" >
        <h1>{props.title}</h1>
        <Button onClick={()=> setShowAddTask(!showAddTask)}  text={showAddTask ? "Close": "Add"} className={showAddTask ? "red-button" : "green-button"} />
      </div>

      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks
        
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
          style={{ marginTop: "200px" }}
        />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
};

Header.defaultProps = {
  title: "My Task",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
