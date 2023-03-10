const inputBtn = document.getElementById("input-btn");
const taskList = document.getElementById("task-list");
const input = document.getElementById("input");




inputBtn.addEventListener('click',()=>{
    const taskContent = input.value;
    const listLength = localStorage.length;
    localStorage.setItem(listLength,taskContent);
    dispatchApp();
    
})


const removeAllChildNodes =(parent)=> {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const dispatchApp = ()=> {
    removeAllChildNodes(taskList);
    for(let i = 0;i<localStorage.length;i++){
        addTask(createNewTask(localStorage.getItem(i)));
    }
}


const createNewTask = (taskContent) => {
    const taskInnerHTML = `<p> ${taskContent}</p>
    <button class="task-delete-btn">delete</button>`
    const taskElement = document.createElement("div");
    taskElement.innerHTML= taskInnerHTML;
    taskElement.className ="task";
    return taskElement
}


// document.getElementById("task-list").appendChild(div);
const addTask =(task)=>{
    taskList.appendChild(task);
}