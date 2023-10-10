const todoList = [
  // name:
  // importancy: 
  // urgency: 
  // duration:
];


function addTodo() {
  //name
  const nameInputElement = document.querySelector(".js-name-todo-input"); //może być const bo działamy na value
  const name = nameInputElement.value

  //urgency
  const urgencyInputElement = document.querySelector(".js-urgency")
  const urgency = urgencyInputElement.value;

  //importancy
  const importancyInputElement = document.querySelector(".js-importancy")
  const importancy = importancyInputElement.value;

  //duration
  const durationInputElement = document.querySelector(".js-duration")
  const duration = durationInputElement.value ? durationInputElement.value : 0;


  if (nameInputElement.value) {
    todoList.push({
      name,
      urgency,
      importancy,
      duration
    });
    nameInputElement.value = urgencyInputElement.value = importancyInputElement.value = durationInputElement.value = '';
  }
  renderTodoList();
}

function renderTodoList() {
  let todoListHTML = [];

  todoList.sort((a, b) => { return (b.urgency + 0.01 * b.importancy) - (a.urgency + 0.01 * a.importancy) });

  todoList.forEach((currentTodoObj) => {

    const { name, urgency, importancy, duration } = currentTodoObj;
    const html = `
    <div class="todo-task">
    <div>${name}</div>
    <div>${urgency} %</div>
    <div>${importancy} %</div>
    <div>${duration} h (${duration * 60} min)</div>
    <div>
    <button
      class="delete-todo-button js-delete-todo-button"
    >Usuń</button>
    </div>
    </div>
    `;
    todoListHTML += html;

  });
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document.querySelectorAll(".js-delete-todo-button").forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    })
  })

  console.log(todoList);

}

//event listeners
document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

function ifEnter(event) {
  if (event.key == 'Enter') {
    addTodo();
  }
}