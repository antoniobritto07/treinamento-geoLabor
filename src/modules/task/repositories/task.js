const Task = require("../model")
const DBError = require("../../../errors/DBError");

class TaskRepository {
    get = async (
        userId,
        params
    ) => {
        try {
            if (params !== undefined || null) {
                const tasksFilteredByStatus = await Task.find({ ...params, user: userId }).populate('user');
                return tasksFilteredByStatus;
            }
            const tasks = await Task.find({ user: userId }).populate('user');

            return tasks;
        }
        catch (error) {
            throw new DBError('Error while trying to get tasks from an user', 'task', error);
        }
    };
    create = async (
        taskData,
        userId
    ) => {
        try {
            const tasks = await Task.create({ ...taskData, user: userId });

            return tasks;
        }
        catch (error) {
            throw new DBError('Error while trying to create task from an user', 'task', error);
        }
    };

    delete = async (
        taskId
    ) => {
        try {
            await Task.findByIdAndRemove(taskId);
            return;
        }
        catch (error) {
            throw new DBError('Error while trying to delete a task by id', 'task', error);
        }
    }
    update = async (
        taskId,
        newTaskData
    ) => {
        try {
            const taskUpdated = Task.findOneAndUpdate(taskId, newTaskData, { new: true });

            return taskUpdated;
        }
        catch (error) {
            throw new DBError('Error while trying to update a task by id', 'task', error);
        }
    }
}

module.exports = new TaskRepository();
