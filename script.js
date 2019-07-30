const express = require('express');
const app = new express();
const port = 3000
app.get('/', function(req, res) {
  res.sendFile('/index.html', { root: __dirname });
});
app.listen(port, () =>
console.log(`listening on port ${port}!`))
const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

//const list = document.getElementById('todo-list')
//const itemCountSpan = document.getElementById('item-count')
//const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  alert('New TODO button clicked!')
}
