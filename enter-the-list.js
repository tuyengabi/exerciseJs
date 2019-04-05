"use strict";
//let btn = document.getElementsByTagName('button')[0];

function addValueToList() {
	let myul = document.getElementsByTagName('ul')[0];
	let newLi= document.createElement('li');
	let valueinput = document.getElementById('my-Input').value;

	if (valueinput == '') {
		return;
	} else {
		newLi.innerHTML = valueinput;
		myul.appendChild(newLi);

	}




	document.getElementById('my-Input').value = '';
};
