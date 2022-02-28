import Dexie from 'dexie';

const db = new Dexie('A00452906');
db.version(1).stores({
  todos: '++id, taskName, dueDate, assignedTo',
});


function getAllTasks() {
    return db.todos.toArray().then((data) => {
        return data
    });
}

function addTask(name, dueDate, assignedTo) {
    console.log(name, dueDate, assignedTo);
    return db.todos.add({ taskName: name, dueDate, assignedTo })
        .then(() => true)
        .catch(err => {
            alert("Ouch... " + err);
    });
}

function deleteTask(id) {
    return db.todos.where('id').equals(id).delete();  
}

function getTask(id) {
    return db.todos.get(id);
}

const moduleExports = {
    getAllTasks,
    addTask,
    deleteTask,
    getTask
};
export default moduleExports;