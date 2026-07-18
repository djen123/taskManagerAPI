import { tasks, getNextId } from "../data/data.js";

export const getTasks = (req, res) => {
    res.json({
        status: "success",
        data: tasks
    });
};

export const getTask = (req, res) => {
    const { id } = req.params;
    const task = tasks.find(t => t.id == id);

    if (!task) {
        return res.status(404).json({
            status: "failed",
            data: "not found"
        });
    }

    res.json({
        status: "success",
        data: task
    });
};

export const postTask = (req, res) => {
    const { title } = req.body;

    const newTask = {
        id: getNextId(),
        title,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json({
        status: "success",
        message: "task created"
    });
};

export const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    const task = tasks.find(t => t.id == id);

    if (!task) {
        return res.status(404).json({
            status: "failed",
            message: "task not found"
        });
    }

    if (title) task.title = title;
    if (completed !== undefined) task.completed = completed;

    res.json({
        status: "success",
        message: "task updated"
    });
};

export const deleteTask = (req, res) => {
    const { id } = req.params;

    const task = tasks.find(t => t.id == id);

    if (!task) {
        return res.status(404).json({
            status: "failed",
            message: "task not found"
        });
    }

    const remaining = tasks.filter(t => t.id != id);

    res.json({
        status: "success",
        message: "task deleted",
        data: remaining
    });
};
