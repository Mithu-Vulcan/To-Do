function handleAdd(event) {
    event.preventDefault()
    // get the task input
    const taskInput = document.getElementById("input-task").value
    
    const id = Date.now()
    //create the task-div
    const taskDiv = document.createElement("div")
    taskDiv.className = "task-div"
    taskDiv.id = id

    //create para
    const taskPara = document.createElement("p")
    taskPara.className = "task-para"
    taskPara.innerText = taskInput

    //create done button
    const doneBtn = document.createElement("button")
    doneBtn.className ="done-btn"
    doneBtn.innerText = "Done"
    doneBtn.onclick = () => handleDone(taskDiv.id)

    //append to div
    taskDiv.appendChild(taskPara)
    taskDiv.appendChild(doneBtn)

    //append
    const taskContainer = document.getElementById("tasks")
    taskContainer.appendChild(taskDiv)

    //save to local
    saveToLocal(id, taskInput, false)
}

function handleDone(id) {
    console.log("done")
    const taskDiv = document.getElementById(id);
    taskDiv.style.opacity = "0.5";
    taskDiv.querySelector(".task-para").style.textDecoration = "line-through";
    changeLocal(id, "isDone", true)
}

function handleClear(){
    const taskDiv = document.getElementById("tasks")
    taskDiv.innerHTML = ""
    localStorage.removeItem("tasks")
}

function saveToLocal(id, task, isDone) {
    tasksLocal = JSON.parse(localStorage.getItem("tasks")) || []
    tasksLocal.push({id, task, isDone})
    localStorage.setItem("tasks", JSON.stringify(tasksLocal))
    console.log(tasksLocal)
}


function recreateTask(id, task, isDone) {
    const taskDiv = document.createElement("div")
    taskDiv.className = "task-div"
    taskDiv.id = id

    const taskPara = document.createElement("p")
    taskPara.innerText = task
    taskPara.className = "task-para"
    
    const doneBtn = document.createElement("button")
    doneBtn.className ="done-btn"
    doneBtn.innerText = "Done"
    doneBtn.onclick = () => handleDone(taskDiv.id)

    taskDiv.appendChild(taskPara)
    taskDiv.appendChild(doneBtn)

    const taskContainer = document.getElementById("tasks")
    taskContainer.appendChild(taskDiv)

    if (isDone) {
        handleDone(id)
    }
}

window.onload = function(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.forEach(element => {
        recreateTask(element.id, element.task, element.isDone)
    });
}

function changeLocal(id, key, value) {
    localSave = JSON.parse(localStorage.getItem("tasks"))

    localSave = localSave.map(local => {
        if (local.id == id) {
            return {...local, [key]: value}
        }
        return local
    })

    localStorage.setItem("tasks", JSON.stringify(localSave))
    console.log(localSave)
}