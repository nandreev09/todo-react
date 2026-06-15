import React, {
  useReducer,
  useState,
} from "react";

import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import { taskReducer } from "./reducer/taskReducer";
import type { Task } from "./types";
import type { FilterType } from "./types";
import { FILTER_TYPE, TASK_ACTIONS } from "./constants";


const App: React.FC = () => {
  const [tasks, dispatch] =
    useReducer(taskReducer, []);

  const [filter, setFilter] =
    useState<FilterType>(FILTER_TYPE.ALL);

  const addTask = (text: string) => {
    dispatch({
      type: TASK_ACTIONS.ADD,
      payload: text,
    });
  };

  const deleteTask = (id: number) => {
    dispatch({
      type: TASK_ACTIONS.DELETE,
      payload: id,
    });
  };

  const toggleTask = (id: number) => {
    dispatch({
      type: TASK_ACTIONS.TOGGLE,
      payload: id,
    });
  };

  const filteredTasks = tasks.filter(
    (task: Task) => {
      switch (filter) {
        case FILTER_TYPE.COMPLETED:
          return task.completed;

        case FILTER_TYPE.ACTIVE:
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
            setFilter(FILTER_TYPE.ALL)
          }
        >
          Все задачи
        </button>

        <button
          onClick={() =>
            setFilter(FILTER_TYPE.COMPLETED)
          }
        >
          Выполненные
        </button>

        <button
          onClick={() =>
            setFilter(FILTER_TYPE.ACTIVE)
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