const User = require("../models/User");

exports.addTask = async (req, res) => {
    const { userId, title } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.tasks.push({ title, completed: false });
        await user.save();

        res.status(201).json({ message: "Task added successfully", tasks: user.tasks });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

exports.updateTask = async (req, res) => {
    const { userId, taskId } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        const task = user.tasks.id(taskId);
        if (!task) return res.status(404).json({ message: "Task not found" });

        task.completed = !task.completed;
        await user.save();

        res.json({ message: "Task updated successfully", tasks: user.tasks });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

exports.deleteTask = async (req, res) => {
    const { userId, taskId } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.tasks = user.tasks.filter(task => task._id.toString() !== taskId);
        await user.save();

        res.json({ message: "Task deleted successfully", tasks: user.tasks });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
