const TaskRepository = require("../../repositories/task")

module.exports = async (taskId) => {
    try {
        await TaskRepository.delete(taskId);
        return;
    } catch (error) {
        throw error
    }
}