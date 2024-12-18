import { createEffect } from "effector";

export const fetchTasks = createEffect(async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, text: "Learn Effector", completed: false },
                { id: 2, text: "Build a Todo App", completed: false },
                { id: 3, text: "Test the App", completed: false },
            ]);
        }, 5000);
    });
});
