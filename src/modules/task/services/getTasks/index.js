const TaskRepository = require("../../repositories/task")

module.exports = async (userId) => {
    try {
        const tasks = await TaskRepository.get(userId);
        return tasks;
    } catch (error) {
        throw error
    }
}

