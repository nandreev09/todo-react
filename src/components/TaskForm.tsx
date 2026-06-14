import React, { useState } from "react";

interface TaskFormProps {
  onAddTask: (text: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  onAddTask,
}) => {
  const [text, setText] =
    useState<string>("");

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!text.trim()) return;

    onAddTask(text);
    setText("");
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Введите задачу"
      />

      <button type="submit">
        Добавить
      </button>
    </form>
  );
};

export default TaskForm;