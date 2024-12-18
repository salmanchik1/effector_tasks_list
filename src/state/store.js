import { createStore } from "effector";
import { addTask, toggleTask } from "./events";
import { fetchTasks } from "./effects";

export const tasksStore = createStore([])
    .on(addTask, (state, task) => [...state, task])
    .on(toggleTask, (state, id) =>
        state.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
    )
    .on(fetchTasks.doneData, (state, tasks) => [...state, ...tasks]);
