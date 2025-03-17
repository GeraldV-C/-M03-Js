 let tasks = [
    { id: 1, description: 'Tarea 1', completed: false },
    { id: 2, description: 'Tarea 2', completed: false },
    { id: 3, description: 'Tarea 3', completed: false }
];


function updateUI() {
    const taskList = document.getElementById('task-list');
    const taskCount = document.getElementById('task-count');
    const completedCount = document.getElementById('completed-count');


    taskList.innerHTML = '';


    tasks.forEach((task) => {
        const taskItem = document.createElement('li');
        taskItem.className = task.completed ? 'completed' : '';
        taskItem.innerHTML = `
            <span>${task.description}</span>
            <div>
                <button class="change-btn">${task.completed ? 'Completada' : 'Marcar como completada'}</button>
                <button class="delete-btn">Eliminar</button>
            </div>
        `;
        

        taskItem.querySelector('.change-btn').addEventListener('click', () => {
            task.completed = !task.completed;
            updateUI();
        });


        taskItem.querySelector('.delete-btn').addEventListener('click', () => {
            tasks = tasks.filter(t => t.id !== task.id);
            updateUI();
        });

        taskList.appendChild(taskItem);
    });


    taskCount.textContent = tasks.length;
    completedCount.textContent = tasks.filter(task => task.completed).length;
}


document.getElementById('add-task-btn').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input');
    const newTaskDescription = taskInput.value.trim();

    if (newTaskDescription) {
        const newTask = {
            id: Date.now(),
            description: newTaskDescription,
            completed: false
        };
        tasks.push(newTask);
        taskInput.value = '';
        updateUI();
    }
});


updateUI();