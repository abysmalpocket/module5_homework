let value = prompt ("Please enter your value!");
value = + value;
alert (typeof value);

if (value% 2 === 0) {
	alert ("even");
	
}else if (value% 1 === 0) {
	alert ("odd");
}
else {
	alert("Oops, looks like you made a mistake.")
}
