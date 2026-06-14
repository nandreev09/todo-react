export interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export type TaskAction =
    | { type: "ADD_TASK"; payload: string }
    | { type: "DELETE_TASK"; payload: number }
    | { type: "TOGGLE_TASK"; payload: number };