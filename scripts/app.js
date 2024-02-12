let taskToDo = document.getElementById("taskToDo");
let taskInProgress = document.getElementById("taskInProgress");
let taskCompleted = document.getElementById("taskCompleted");
let taskPriority = document.getElementById("taskPriority");
let taskName = document.getElementById("taskName");
let taskDescription = document.getElementById("taskDescription");
let taskDate = document.getElementById("taskDate");
let taskAdd = document.getElementById("taskAdd");
let injectToDo = document.getElementById("injectToDo");
let injectInProgress = document.getElementById("injectInProgress");
let injectCompleted = document.getElementById("injectCompleted");
let taskSaveBtn = document.getElementById("taskSaveBtn");
let inputTaskName = document.getElementById("inputTaskName");
let inputTaskDescription = document.getElementById("inputTaskDescription");
let inputTaskDate = document.getElementById("inputTaskDate");
let inputTaskPriority = document.getElementById("inputTaskPriority");
let inputTaskStatus = document.getElementById("inputTaskStatus");
let taskSaveBtnAdd = document.getElementById("taskSaveBtnAdd");
let inputTaskName1 = document.getElementById("inputTaskName1");
let inputTaskDescription1 = document.getElementById("inputTaskDescription1");
let inputTaskDate1 = document.getElementById("inputTaskDate1");
let inputTaskPriority1 = document.getElementById("inputTaskPriority1");
let inputTaskStatus1 = document.getElementById("inputTaskStatus1");

let toDoItems = [];
let inProgressItems = [];
let completedItems = [];

taskSaveBtnAdd.addEventListener('click', () => {
    creatingElements();
    taskToDo.textContent = toDoItems.length;
    taskInProgress.textContent = inProgressItems.length;
    taskCompleted.textContent = completedItems.length;
});


const creatingElements = () => {
    
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("mt-2", "mx-5");
    mainContainer.style.backgroundColor = "#f8c7ff";
    mainContainer.style.borderRadius = "3px";

    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    let colDiv = document.createElement("div");
    colDiv.classList.add("col");

    let taskPriority = document.createElement("h3");
    taskPriority.classList.add("ms-3", "mt-3", "mb-2");
    taskPriority.textContent = "Priority";

    let taskName = document.createElement("p");
    taskName.classList.add("ms-3", "mt-3", "mb-2");
    taskName.textContent = "Task Name";
    taskName.style.fontSize = "20px";

    let taskDescription = document.createElement("p");
    taskDescription.classList.add("ms-3", "mb-4");
    taskDescription.textContent = "Task description";

    let taskDate = document.createElement("p");
    taskDate.classList.add("ms-3", "mb-4");
    taskDate.textContent = "Due Date";
    taskDate.style.fontSize = "20px";

    let viewTaskButton = document.createElement("button");
    viewTaskButton.classList.add("btn", "btn-light", "py-2", "mb-2");
    viewTaskButton.style.width = "100%";
    viewTaskButton.type = "button";
    viewTaskButton.setAttribute("data-bs-toggle", "modal");
    viewTaskButton.setAttribute("data-bs-target", "#exampleModal");
    viewTaskButton.textContent = "Edit Task";

    let deleteTaskButton = document.createElement("button");
    deleteTaskButton.classList.add("btn", "btn-danger", "py-2");
    deleteTaskButton.style.width = "100%";
    deleteTaskButton.type = "button";
    deleteTaskButton.textContent = "Delete Task";

    deleteTaskButton.addEventListener('click', () => {
        mainContainer.remove();
    });

    mainContainer.appendChild(rowDiv);
    rowDiv.appendChild(colDiv);
    colDiv.appendChild(taskPriority);
    colDiv.appendChild(taskName);
    colDiv.appendChild(taskDescription);
    colDiv.appendChild(taskDate);
    colDiv.appendChild(viewTaskButton);
    colDiv.appendChild(deleteTaskButton);

    taskName.textContent = inputTaskName.value;
    taskDescription.textContent = inputTaskDescription.value;
    taskDate.textContent = inputTaskDate.value;
    taskPriority.textContent = inputTaskPriority.value;

    if(inputTaskStatus.value === "TO DO"){
        injectToDo.appendChild(mainContainer);
        let myObject = {name: inputTaskName.value, description: inputTaskDescription.value, date: inputTaskDate.value, priority: inputTaskPriority.value}
        toDoItems.push(myObject);
    }else if(inputTaskStatus.value === "IN PROGRESS"){
        injectInProgress.appendChild(mainContainer);
        let myObject = {name: inputTaskName.value, description: inputTaskDescription.value, date: inputTaskDate.value, priority: inputTaskPriority.value}
        inProgressItems.push(myObject);
    }else if(inputTaskStatus.value === "COMPLETED"){
        injectCompleted.appendChild(mainContainer);
        let myObject = {name: inputTaskName.value, description: inputTaskDescription.value, date: inputTaskDate.value, priority: inputTaskPriority.value}
        completedItems.push(myObject);
    }

    taskSaveBtn.addEventListener('click', () => {
        mainContainer.remove();
        taskName.textContent = inputTaskName1.value;
        taskDescription.textContent = inputTaskDescription1.value;
        taskDate.textContent = inputTaskDate1.value;
        taskPriority.textContent = inputTaskPriority1.value;
        if(inputTaskStatus1.value === "TO DO"){
            mainContainer.remove();
            injectToDo.appendChild(mainContainer);
        }else if(inputTaskStatus1.value === "IN PROGRESS"){
            mainContainer.remove();
            injectInProgress.appendChild(mainContainer);
        }else if(inputTaskStatus1.value === "COMPLETED"){
            mainContainer.remove();
            injectCompleted.appendChild(mainContainer);
        }
        taskToDo.textContent = toDoItems.length;
        taskInProgress.textContent = inProgressItems.length;
        taskCompleted.textContent = completedItems.length;
    });
    console.log(toDoItems);
    console.log(inProgressItems);
    console.log(completedItems);
    
}

const saveToLocalStorage = (todo, inprogress, completed) => {
    localStorage.setItem("toDo", JSON.stringify(todo));
    localStorage.setItem("inProgress", JSON.stringify(inprogress));
    localStorage.setItem("completed", JSON.stringify(completed));
}