
var num = 6;
var colors =[];
var pickedColor;
var squares = document.querySelectorAll(".square");
var displayColor = document.querySelector("#displayColor");
var message = document.getElementById("message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode")

init();

function init(){
	setupButtons();
	reset();
	setupSquares();
}

function setupButtons(){
	for(var i = 0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected")
			modeButtons[1].classList.remove("selected")
			this.classList.add("selected");
			this.textContent === "Easy"? num = 3: num = 6;
		reset();	
		});
	}
}

function reset(){
	colors = generateRandomColors(num);
	//color all squares
	//color all squares
	for(i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";	
			squares[i].style.background = colors[i]
		} else {
			squares[i].style.display = "none";
		}
	}
	//new picked color
	pickedColor = pickColor();
	//change color display to match picked color
	displayColor.textContent = pickedColor;
	//change h1 background color to white
	h1.style.background = "steelblue";
	//reset the button content to New colors
	resetButton.textContent = "New colors";
	//reset message to null
	message.textContent = "";
}

resetButton.addEventListener("click", function(){
	reset();
})

function setupSquares(){
	for(i = 0; i<squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
				message.textContent = "Correct!";
				resetButton.textContent = "Play again"; // change the New colors button content to Play again
				h1.style.background = clickedColor; 
				colorAllSquares();
			}else{
				message.textContent = "Try again";
				this.style.background = "#232323";
			}
		})
	}
}

function colorAllSquares(){
	for (i = 0; i<squares.length;i++) {
	squares[i].style.background = pickedColor;
	}
}	

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i=0; i<num; i++){
	arr.push(randomColors());
	}	
	return arr;
} 

function randomColors(){
	var red = Math.floor(Math.random()*258);
	var green = Math.floor(Math.random()*258);
	var blue = Math.floor(Math.random()*258);
	return "rgb("+red+", "+green+", "+blue+")";
}