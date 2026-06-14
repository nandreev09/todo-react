import React from "react";
import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggle,
  onDelete,
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "10px",
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span
        style={{
          textDecoration: task.completed
            ? "line-through"
            : "none",
        }}
      >
        {task.text}
      </span>

      <button
        onClick={() => onDelete(task.id)}
      >
        Удалить
      </button>
    </div>
  );
};

export default TaskItem;