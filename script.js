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


const createNewTask = (taskContent) => {
    const taskInnerHTML = `<p> ${taskContent}</p>
    <button class="task-delete-btn">delete</button>`
    const taskElement = document.createElement("div");
    taskElement.innerHTML= taskInnerHTML;
    taskElement.className ="task";
    return taskElement
}


const addTask =(task)=>{
    taskList.appendChild(task);
}

const dispatchApp = ()=> {
    removeAllChildNodes(taskList);
    for(let i = 0;i<localStorage.length;i++){
        addTask(createNewTask(localStorage.getItem(i)));
    }
}


// const deleteTaskButtonList = document.querySelectorAll(".task-delete-btn");
// // console.log(deleteTaskButtonList.length);
// console.log(deleteTaskButtonList);

// for(let i =0 ;i<deleteTaskButtonList.length;i++){
//     // deleteTaskButtonList[i].addEventListener("", ()=>{
//     //     localStorage.removeItem(i.toString);

//     //     console.log(`${i} button clicked`);
//     //     dispatchApp();
//     // })

//     console.log(`the ${i} element is ${deleteTaskButtonList.item(i)}`)
// }




var deleteTaskButtonList = document.querySelectorAll(".task-delete-btn");
// console.log(deleteTaskButtonList.length);
// console.log(deleteTaskButtonList);

// for(let i =0 ;i<deleteTaskButtonList.length;i++){
//     deleteTaskButtonList[i].addEventListener("click", ()=>{
//         localStorage.removeItem(i);
//         alert('the button is clicked');
//         console.log(`${i} button clicked`);
//         dispatchApp();
//     })

//     console.log(`the ${i} element is ${deleteTaskButtonList[i]}`)
// }

for(var i=0; i<deleteTaskButtonList.length; i++){
    deleteTaskButtonList[i].onclick = function(){
        this.parentNode.remove();
    }
}

// for(let i =0 ;i<deleteTaskButtonList.length;i++){
//     // deleteTaskButtonList[i].addEventListener("", ()=>{
//     //     localStorage.removeItem(i.toString);

//     //     console.log(`${i} button clicked`);
//     //     dispatchApp();
//     // })

//     console.log(`the ${i} element is ${deleteTaskButtonList.item(i)}`)
// }
dispatchApp();

