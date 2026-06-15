import { TASK_ACTIONS } from "./constants";
import { FILTER_TYPE } from "./constants";

export type TaskAction =
| { type: typeof TASK_ACTIONS.ADD; payload: string }
| { type: typeof TASK_ACTIONS.DELETE; payload: number }
| { type: typeof TASK_ACTIONS.TOGGLE; payload: number };

export interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
export type FilterType =
| typeof FILTER_TYPE.ALL
| typeof FILTER_TYPE.COMPLETED
| typeof FILTER_TYPE.ACTIVE;