import React, {
  useReducer,
  useState,
} from "react";

import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import { taskReducer } from "./reducer/taskReducer";
import type { Task } from "./types";

type FilterType =
  | "all"
  | "completed"
  | "active";

const App: React.FC = () => {
  const [tasks, dispatch] =
    useReducer(taskReducer, []);

  const [filter, setFilter] =
    useState<FilterType>("all");

  const addTask = (text: string) => {
    dispatch({
      type: "ADD_TASK",
      payload: text,
    });
  };

  const deleteTask = (id: number) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const toggleTask = (id: number) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: id,
    });
  };

  const filteredTasks = tasks.filter(
    (task: Task) => {
      switch (filter) {
        case "completed":
          return task.completed;

        case "active":
          return !task.completed;

        default:
          return true;
      }
    }
  );

  return (
  <div style={{
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center', marginTop: '20px'}}>
     <div style={{ display: "flex", flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
      <h1 style={{margin: '0'}}>Список задач</h1>

      <TaskForm
        onAddTask={addTask}
      />

      <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
        <button
          onClick={() =>
            setFilter("all")
          }
        >
          Все задачи
        </button>

        <button
          onClick={() =>
            setFilter("completed")
          }
        >
          Выполненные
        </button>

        <button
          onClick={() =>
            setFilter("active")
          }
        >
          Невыполненные
        </button>
      </div>

      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  </div>
   
  );
};

export default App;