const TaskRepository = require("../../repositories/task")

module.exports = async (taskData, userId) => {
    try {
        const createdTask = await TaskRepository.create(taskData, userId);
        return createdTask;
    } catch (error) {
        throw error
    }
}