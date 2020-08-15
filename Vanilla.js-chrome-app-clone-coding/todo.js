const toDoForm = document.querySelector(`.js-toDoForm`),
  toDoInput = toDoForm.querySelector(`input`),
  toDoList = document.querySelector(`.js-toDoList`),
  finishedList = document.querySelector(`.js-finishedList`);

const TODOS_LS = `PANDING`;
const FINISH_LS = `FINISHED`;

let toDoArray = [];
let finishArray = [];

function deleteToDo() {
  const btn = event.target;
  const li = btn.parentNode;

  toDoList.removeChild(li);

  const cleanToDos = toDoArray.filter(function (toDoArray) {
    return toDoArray.id !== parseInt(li.id);
  });

  toDoArray = cleanToDos;
  saveToDos();
}

function deleteFinish() {
  const btn = event.target;
  const li = btn.parentNode;

  finishedList.removeChild(li);

  const cleanToDos = finishArray.filter(function (finishArray) {
    return finishArray.id !== parseInt(li.id);
  });

  finishArray = cleanToDos;
  saveToDos();
}

function backToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const text = li.childNodes[0].innerText;

  paintToDo(text);
  deleteFinish();
}

function finishToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const text = li.childNodes[0].innerText;

  paintFinish(text);
  deleteToDo();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDoArray));
  localStorage.setItem(FINISH_LS, JSON.stringify(finishArray));
}

function paintFinish(text) {
  const li = document.createElement(`li`);
  const delBtn = document.createElement(`button`);
  const backBtn = document.createElement(`button`);
  const span = document.createElement(`span`);
  const newId = finishArray.length + 1;

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(backBtn);
  li.id = newId;

  delBtn.addEventListener(`click`, deleteFinish);
  backBtn.addEventListener(`click`, backToDo);
  span.innerText = text;

  delBtn.innerText = `X`;
  backBtn.innerText = `<`;

  finishedList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };

  finishArray.push(toDoObj);
  saveToDos();
}

function paintToDo(text) {
  const li = document.createElement(`li`);
  const delBtn = document.createElement(`button`);
  const endBtn = document.createElement(`button`);
  const span = document.createElement(`span`);
  const newId = finishArray.length + 1;

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(endBtn);
  li.id = newId;

  delBtn.addEventListener(`click`, deleteToDo);
  endBtn.addEventListener(`click`, finishToDo);
  span.innerText = text;

  delBtn.innerText = `X`;
  endBtn.innerText = `V`;

  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };

  toDoArray.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ``;
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  const loadedFinisted = localStorage.getItem(FINISH_LS);

  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);

    parsedToDos.forEach(function (toDoArray) {
      paintToDo(toDoArray.text);
    });
  }

  if (loadedFinisted !== null) {
    const parsedFinished = JSON.parse(loadedFinisted);

    parsedFinished.forEach(function (finishArray) {
      paintFinish(finishArray.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener(`submit`, handleSubmit);
}

init();
