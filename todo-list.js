// const classNames = {
//   TODO_ITEM: 'todo-container',
//   TODO_CHECKBOX: 'todo-checkbox',
//   TODO_TEXT: 'todo-text',
//   TODO_DELETE: 'todo-delete',
// }

// const list = document.getElementById('todo-list')
// const itemCountSpan = document.getElementById('item-count')
// const uncheckedCountSpan = document.getElementById('unchecked-count')
window.onload = function() {
    const button = document.getElementById('btn');
    button.addEventListener("click", newTodo, false);
}
let todoItems = [];




function newTodo() {
    input = document.getElementById('todo-text');
    todoItems.push(input.value);
    input.value = "";
    
    console.log(todoItems);

  
}
