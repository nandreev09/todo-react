import type { Task, TaskAction } from "../types";

export const taskReducer = (
  state: Task[],
  action: TaskAction
): Task[] => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];

    case "DELETE_TASK":
      return state.filter(
        task => task.id !== action.payload
      );

    case "TOGGLE_TASK":
      return state.map(task =>
        task.id === action.payload
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      );

    default:
      return state;
  }
};