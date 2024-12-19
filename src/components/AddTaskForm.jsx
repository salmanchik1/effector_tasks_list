import { useState } from "react";
import { addTask } from "../state/events";

const AddTaskForm = () => {
    const [taskText, setTaskText] = useState("");
    const handleAddTask = (e) => {
        e.preventDefault();
        if (taskText.trim() !== "") {
            const newTask = {
                id: Date.now(),
                text: taskText,
                completed: false,
            };
            addTask(newTask);
            setTaskText("");
        }
    };
    return (
        <form className="add-task-form" onSubmit={handleAddTask}>
            <input
                type="text"
                className="task-input"
                placeholder="Enter a task"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button className="add-task-button">Add Task</button>
        </form>
    );
};

export default AddTaskForm;
