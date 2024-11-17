function addItem() {
    var newItemText = document.getElementById('newItem').value;

    var newEl = document.createElement('li');

    var newText = document.createTextNode(newItemText);

    newEl.appendChild(newText);

    var todoList = document.getElementById('todo');
    todoList.appendChild(newEl);
}

