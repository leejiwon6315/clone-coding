const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDo";

function paintToDo(text){
    const createList = document.createElement("li");
    
    const delBtn = document.createElement("button");
    delBtn.innerText = " X "
    
    const span = document.createElement("span");
    span.innerText = text;
    
    createList.appendChild(span);
    createList.appendChild(delBtn);
    
    toDoList.appendChild(createList);
}

function handleSubmit(event){
    event.preventDefault();
    
    const currentValue = toDoInput.value;
    
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDo(){
    const toDos = localStorage.getItem(TODOS_LS);
    
    if(toDos !== null){
        
    }   
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();