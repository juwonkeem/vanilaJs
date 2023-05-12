const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//const toDos = [];
//const에서 let으로 바꾼이유 -> 업데이트가 가능하게 하려고
let toDos = [];
toDos.length = 10;

const saveToDos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

const deleteToDo = (e) => {
    //console.dir(e.target.parentElement.innerText);
    //console.log(e.target.parentElement);
    const li = e.target.parentElement;
    li.remove();
    //console.log(typeof li.id) => Stirng
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

const paintToDo = (newTodo) => {
    
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    // if(toDoList.length < 11){
    //     toDoList.appendChild(li);
    // } else {
    //     alert("10개 이상 설정할 수 없습니다.")
    // }
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
        
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const sayHello = (item) => {
    console.log("Hello>>>>.",item)
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;    //기존 toDo 들을 복원
    //parsedToDos 에 있는 item들 돌려서 clg에 찍을거다
    parsedToDos.forEach(item => console.log("this is turn of", item));
    parsedToDos.forEach(paintToDo);
}

const onFilter = () => {

}