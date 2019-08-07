// const classNames = {
//   TODO_ITEM: 'todo-container',
//   TODO_CHECKBOX: 'todo-checkbox',
//   TODO_TEXT: 'todo-text',
//   TODO_DELETE: 'todo-delete',
// }


// const itemCountSpan = document.getElementById('item-count')
// const uncheckedCountSpan = document.getElementById('unchecked-count')

//
function newTodo(evt) {

  evt.preventDefault();

  const input = document.getElementById("todo-text").value;
  const list = document.getElementById("todo-list");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode("- " + input));
  list.appendChild(li);
  document.getElementById("todo-text").value = "";

}
    
const form = document.getElementById("btn").addEventListener('click', newTodo);
