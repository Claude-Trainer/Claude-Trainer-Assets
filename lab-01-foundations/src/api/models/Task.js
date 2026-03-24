const tasks = [];

const Task = {
  create(taskData) {
    tasks.push(taskData);
    return taskData;
  },
  findByUserId(userId) {
    return tasks.filter((t) => t.userId === userId);
  },
  findById(id) {
    return tasks.find((t) => t.id === id);
  },
  update(id, updates) {
    const idx = tasks.findIndex((t) => t.id === id);
    if (idx === -1) return null;
    tasks[idx] = { ...tasks[idx], ...updates, id: tasks[idx].id, userId: tasks[idx].userId };
    return tasks[idx];
  },
  delete(id) {
    const idx = tasks.findIndex((t) => t.id === id);
    if (idx !== -1) tasks.splice(idx, 1);
  },
  clear() {
    tasks.length = 0;
  },
};

module.exports = Task;
