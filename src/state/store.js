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
    .on(fetchTasks.doneData, (state, tasks) => {
        // Remove tasks that are already in the store
        const newTasks = tasks.filter((task) => !state.some((t) => t.id === task.id));
        return [...state, ...newTasks];
    });
