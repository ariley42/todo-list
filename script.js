
const list = document.getElementById("todo-list");

function newTodo(evt) {

  evt.preventDefault();
  const input = document.getElementById("todo-text").value;
  const li = document.createElement("li");
  li.appendChild(document.createTextNode("- " + input));
  list.appendChild(li);
  document.getElementById("todo-text").value = "";
  var checkbox = document.createElement('input');
  checkbox.type= "checkbox";
  checkbox.value = 1;
  checkbox.class = "todo";
  li.appendChild(checkbox);
  checkbox.onchange = checkCount;

}
    
const form = document.getElementById("btn").addEventListener('click', newTodo);

check = document.getElementsByClassName('todo');
for (var i = 0; i < check.length; i++) {
    check[i].addEventListener('click', newTodo, false);
}



const checkCount = function () {
    var selected = [];
    
    var span = document.getElementById('item-count');
    var span2 = document.getElementById('unchecked-count');
    
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    
    
    for (var i = 0; i < checkboxes.length; i++) {
           selected.push(checkboxes[i]);
    
    
        }
        span.innerHTML = selected.length;
        
    
};
