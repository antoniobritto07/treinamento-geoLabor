const TaskRepository = require("../../repositories/task")

module.exports = async (userId, params) => {
    try {
        const tasks = await TaskRepository.get(userId, params);
        return tasks;
    } catch (error) {
        throw error
    }
}

