var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("BUTTON");
	btn.name = "Remove";
	btn.className = "frame";
	btn.appendChild(document.createTextNode("Remove"));
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	ul.appendChild(btn);
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//This is done by me
document.addEventListener('click',function(event){
	var check = event.target;
	if (check.tagName === "LI") {
		check.classList.toggle("done");
	}
	else if(event.target.name ==="Remove"){
		var target = event.target.previousElementSibling;
		var button = event.srcElement;
		button.parentNode.removeChild(button);
		target.parentNode.removeChild(target);
	}



});




