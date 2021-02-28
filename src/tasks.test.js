const TaskManager = require("./tasks")

test("Initially has no tasks", () => {
    const taskManager = new TaskManager();
    expect(taskManager.tasks.length).toBe(0);
})

test("Can add a task", () => {
    const taskManager = new TaskManager();
    taskManager.add({title: "Some Task"});

    expect(taskManager.tasks.length).toBe(1);
})