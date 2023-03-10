console.log(window.localStorage);


for(let i= 0;i<6;i++){
    localStorage.setItem(i,`list item ${i}`);
}

console.log(localStorage);