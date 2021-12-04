var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li"); //array containing <li> nodes

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.addEventListener("click", listToggler); //Updates new list element with toggler code below
	createDeleteButton(ul.length); //Adds new delete button corresponding to new list element
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function listToggler(){ //For toggling listed items on/off
	this.classList.toggle("done");
}

function createDeleteButton(locationIndex){//For delete button functionality
	//Create new element w/ createElement
	var newDeleteButton = document.createElement("button");
	//Add relevent attributes
	var newDButtonText = document.createTextNode("Delete");
	newDeleteButton.appendChild(newDButtonText);
	//Attach event handler for delete function
	newDeleteButton.addEventListener("click",deleteLi)
	//insert node after li tag
	ul.insertBefore(newDeleteButton,li[locationIndex+1]);
}

function deleteLi(event){ //Deletes associated text node and itself
	this.previousElementSibling.remove();
	this.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (i = 0; i < li.length; i++){ //provides toggle and delete functionalities to each pre-existing list item
	li[i].addEventListener("click", listToggler);
	createDeleteButton(i);
}



