var numSquares = 9;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();

    squareSetUp()

    reset1();
}

function setUpModeButtons(){
    for(var i=0;i< modeButtons.length ;i++){
        modeButtons[i].addEventListener("click",function(){
            for(var j=0;j<modeButtons.length ;j++){
                modeButtons[j].classList.remove("selected");
            }
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            }
            else if(this.textContent === "Medium"){
                numSquares = 6; 
            }
            else{
                numSquares = 9;
            }
            reset1();
        });
    }
}

function squareSetUp(){
    for(var i=0;i<squares.length;i++){
        squares[i].addEventListener("click",function(){
            //grab color of clicked square
            var clicked_color = this.style.backgroundColor;
            //compare color
            if(clicked_color === pickedColor){
                reset.textContent = "Play Again?"
                messageDisplay.textContent = "Correct!";
                changeColors(clicked_color);
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset1(){
    reset.textContent = "New Colors";
    messageDisplay.textContent = "";
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color 
    colorDisplay.textContent = pickedColor;
    //change color of squares
    var i;
    for(i=0;i<numSquares;i++){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    }
    for(;i<squares.length;i++){
        squares[i].style.display = "none";
    }    
    document.querySelector("h1").style.backgroundColor = "steelblue";
}


reset.addEventListener("click",function(){
    reset1();
});


function changeColors(color){
    //loop through all squares and change its color to correct one
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
    document.querySelector("h1").style.backgroundColor = color;
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i=0;i<num;i++){
        //get random color and push to array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}