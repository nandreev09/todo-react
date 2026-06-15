export const TASK_ACTIONS = 
{   ADD: "ADD_TASK",
    DELETE: "DELETE_TASK",
    TOGGLE: "TOGGLE_TASK",
    } as const;

export const FILTER_TYPE = {
    ALL: "all",
    COMPLETED: "completed",
    ACTIVE: "active"
} as const;