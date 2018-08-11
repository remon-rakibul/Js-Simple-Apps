var todos = [];
var input = prompt('What would you like to do?');
while (input !== 'quit') {
	if (input === 'list') {
		listTodos();
	} else if (input === 'new') {
		addTodo();
	} else if (input === 'delete') {
		deleteTodo();
	}
	input = prompt('What would you like to do?');
}
console.log('OK, bye');

function listTodos() {
	console.log('**********');
	todos.forEach(function (todo, index) {
	console.log(index + ': ' + todo);
	});
	console.log('**********');
}

function addTodo() {
	var newtodo = prompt('Enter new todo');
	todos.push(newtodo);
	console.log(newtodo + ' added to the todo list');
}

function deleteTodo() {
	var index = prompt('Enter the index of the todo to delete');
	todos.splice(index, 1);
	console.log('index ' + index + ' Deleted');
}