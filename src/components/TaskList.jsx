import { useUnit } from "effector-react";
import { tasksStore } from "../state/store";
import { toggleTask } from "../state/events";

const TaskList = () => {
    const tasks = useUnit(tasksStore);
    if (tasks.length === 0) {
        return <p>No tasks found.</p>;
    }
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className={`task-item ${task.completed ? "completed" : ""}`}
                >
                    {task.text}
                    <button
                        className="toggle-task-button"
                        onClick={() => toggleTask(task.id)}
                    >
                        {task.completed ? "Completed" : "Uncompleted"}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
