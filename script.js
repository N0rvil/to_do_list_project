const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const toDo = document.getElementById("toDo");
const inProgress = document.getElementById("inProgress");
let taskCount = 0;

const inputLength = () => {
    return input.value.length;
}

const addTask = () => {
    taskCount++;
    const liToDo = document.createElement("li");
    liToDo.appendChild(document.createTextNode(input.value));
    const addClassLiToDo = (style) => {
        liToDo.classList.add(style);
    };
    const editClassLiToDo = (style) => {
        liToDo.className = style;
    }
    addClassLiToDo("list__card");
    addClassLiToDo("list__card--red");
    toDo.appendChild(liToDo);
    input.value="";
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add("list__card-checkbox");
    liToDo.appendChild(checkBox);
    checkBox.addEventListener("change", (e) => {
        if(e.target.checked) {
            editClassLiToDo("list__card list__card--done");
        } else {
            editClassLiToDo("list__card list__card--red");
        }
    } );
}

const addTaskEnter = (event) => {
    if (inputLength() > 0 && taskCount <= 8 && event.keyCode === 13) {
        addTask();
    } if (taskCount > 8) {
        alert("sorry to do list is full");
    }
}

const addTaskClick = () => {
    if (inputLength() > 0 && taskCount <= 8) {
        addTask();
    } if  (taskCount > 8){
        alert("sorry to do list is full");
    }
}

addBtn.addEventListener("click", addTaskClick);
input.addEventListener("keypress", addTaskEnter);