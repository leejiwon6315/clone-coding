const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDoArray = [];

function deleteToDo(event) {
    
  const btn = event.target;
  const li = btn.parentNode;
    
  toDoList.removeChild(li);
    
  const cleanToDos = toDoArray.filter(function(toDoArray) {
    return toDoArray.id !== parseInt(li.id);
  });
    
  toDoArray = cleanToDos;
  saveToDos();
}

function saveToDos() {
    
  localStorage.setItem(TODOS_LS, JSON.stringify(toDoArray));
}

function paintToDo(text) {
    
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDoArray.length + 1;
    
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
    
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
    
  toDoList.appendChild(li);
    
  const toDoObj = {
    text: text,
    id: newId
  };
    
  toDoArray.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
    
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
    
  const loadedToDos = localStorage.getItem(TODOS_LS);
    
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
      
    parsedToDos.forEach(function(toDoArray) {
      paintToDo(toDoArray.text);
    });
  }
}

function init() {
    
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();