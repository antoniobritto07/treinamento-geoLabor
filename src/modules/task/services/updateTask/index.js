const TaskRepository = require("../../repositories/task")

module.exports = async (taskId, newTaskData) => {
    try {
        const taskUpdated = await TaskRepository.update(taskId, newTaskData);
        return taskUpdated;
    } catch (error) {
        throw error
    }
}