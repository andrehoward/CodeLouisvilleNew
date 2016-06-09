//Problem: User interaction doesn't provide desired results.
//Solution: Add interaction so the user can manage daily task.

var taskInput = document.getElementById ("new-task"); //new-task
var addButton = document.getElementTagName ("button") [0]; //first button
var incompleteTasksHolder = document.getElementById ("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById ("completed-tasks"); //completed-tasks

//New Task List Item
var createNewTaskElement = function (taskString){
	//Create List Item
	var ListItem = document.createElement ("li");
	
	//input (checkbox)
	var checkbox = document.createElement ("input"); //checkbox
	//label
	var label = document.createElement("label");
	//input (text)
	var editInput = document.createElement ("input");
	//button.edit
	var editButton = document.createElement("button");
	//button.delete
	var deleteButton = document.createElement("button");
	
	//Each element needs modifying
	
	//Each element needs appending
	listItem.appendChild (checkBox);
	listItem.appendChild (label);
	listItem.appendChild (editInput);
	listItem.appendChild (editbutton);
	listItem.appendChild (deleteButton);
	
	
	return ListItem;
}
//Add a new task
var addTask = function() {
	console.log ("Add task...");
	//Create a new list item with the text from #new-task:
	var listItem = createNewTaskElement ("Some New Task");
	//append ListItem to incompleteTaskHolder
	incompleteTaskholder.appendChild(listItem);
	bindTasksEvents (listItem, tasksCompleted);
	}
	//Edit and existing task
var editTask = function(){
	console.log("Edit task...");
	//When the edit button is pressed
		//if the class of the button is pressed
		//Switch from .editMode
		//label text become the input's value
	//else
		//Switch to .editMode
		//input value becomes the labell's text
}




//Delete an exisitng task
var deleteTask = function(){
	console.log("Delete task...");
		var listItem = this.parentNode;
		var ul= listItem.parentNode;
			
	//Remove the parent list item from the ul
	ul.removeChild(listItem);
			
			
//Mark a task as complete
var taskCompleted = function(){
	console.log("Task complete...");
	//When the checkbox is checked
		//Append the task list item to the #completed-tasks
		var listItem = this.parentNode;
		completeTasksHolder.appendChild(listItem);
	bindTaskEvents (listItem, tasksCompleted);
	}


//Mark a task as incomplete
var taskIncomplete = function(){
	console.log("Task incomplete...");
		//Append the task list item to the #incomplete-tasks
		var listItem = this.parentNode;
		incompleteTasksHolder.appendChild(listItem);
		bindTasksEvents(listItem.taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
	console.log("Bind list item events");
	//select it's children
	var checkBox = taskListItem.querySelector ("input[type=checkbox]");
	var editButton = taskListItem.querySelector ("button.edit");
	var deleteButton = taskListItem.querySelector ("button.delete");
	
		//bind editTask to edit button
		editButton.onclick = editTask;
		
		//bind deleteTask to delete button
		deleteButton.onclick = deleteTask;
		
		//bind CheckBoxHandler to checkbox
		checkBox.onchange = checkBoxEventHandler;
}

//Set the click handler to the addTask function
addButton.onclick = addTask;

//cycle over incompleteTaskHolder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i++){
	//bind events to list item's children (taskCompleted)
bindTaskEvents (incompleteTasksHolder.children[i], taskCompleted);
}
	
//cycle over completedTaskHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++){
	//bind events to list item's children (taskIncomplete)
	bindTaskEvents(completedTasksHolder.children[1], taskIncomplete);
	
}
	
		
		