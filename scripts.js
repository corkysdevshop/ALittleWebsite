// Javascript is a language to give your website functionality. A overarching design pattern for coding is MVC (Model, View, Controller). 

var result; // this line 'hoists' the result variable into the global scope so you can access it in multiple functions. 

// MODEL: This is where you can code your 'business logic' like counting ice cream cones. 
function collectInput () {
	var iceCream = document.getElementById("inputText").value; // this line stores the text into a variable
	result = iceCream.concat("!! Plus one more cone!"); // this line 'transforms' your input. This is where computers are really handy and you can build output by coding steps to an algorythm, making really complicated things really simple. Some algorythms are as complicated as google search, while this one is a little simpler. 
}

// VIEW: This is how you display the output back to the screen.
function generateOutput () {
	document.getElementById("OutputIsTheTransformedTextDisplayedToTheScreen").innerHTML = result; // this line sends your result to the screen
}


// Controller: The code below runs the functions above.  
document.getElementById("InputTextFieldThroughHTMLUsingJavascript").onclick = function() {
	collectInput(); // this line is how you call the collectInput function above
	generateOutput(); // this line is how you call the generateOutput function above

	return false; // this line is if you wanted this function to return something, we don't so I made it false. 
};