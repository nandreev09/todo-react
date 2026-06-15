import { TASK_ACTIONS } from "../constants";
import type { Task} from "../types";
import type { TaskAction } from "../types";

export const taskReducer = (
  state: Task[],
  action: TaskAction
): Task[] => {
  switch (action.type) {
    case TASK_ACTIONS.ADD:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];

    case TASK_ACTIONS.DELETE:
      return state.filter(
        task => task.id !== action.payload
      );

    case TASK_ACTIONS.TOGGLE:
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