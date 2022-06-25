let color = document.getElementById("color");
var squares = document.querySelectorAll(".square");
let answer;
let arr = [];
let array = [];
let tries = 3;

function colorPicker() {
    // displays the only correct color
    let num1, num2, num3;
    let result = "";
    num1 = Math.floor(Math.random() * 257) + ", ";
    num2 = Math.floor(Math.random() * 257) + ", ";
    num3 = Math.floor(Math.random() * 257);

    result = "rgb(" + num1 + num2 + num3 + ")";
    return result;
}
function genWrong() {
    // displays incorrect colors for the user to get wrong
    let n1, n2, n3;
    
    n1 = Math.floor(Math.random() * 257) + ", ";
    n2 = Math.floor(Math.random() * 257) + ", ";
    n3 = Math.floor(Math.random() * 257);

    return "rgb(" + n1 + n2 + n3 + ")";
    
}
function init() {
    answer = colorPicker();
    color.textContent = answer;
    genSquareColors();
    setColor();
    colorSquares();
}
init();

function reset(){

    answer = colorPicker();
    color.textContent = answer;
    genSquareColors();
    setColor();
    colorSquares();

}

function scramble(array){
    return array.sort(() => Math.random() - 0.5);
}

function genSquareColors(){
    if(arr.length > 0){
        arr.splice(0, arr.length);
    }
    for(let i = 0; i < 5; i++){
        arr.push(genWrong()); // generates five incorrect squares
    }
    arr.push(answer);
    scramble(arr);
    console.log(arr);
    return arr;
   
}

function setColor(){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = arr[i];  
    }

} 

function colorSquares(){
    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            var clicked = this.style.backgroundColor;
            if(clicked === answer){
                alert("You won!");
                reset();
                
            } else {
                this.style.backgroundColor = "#FFFFFF";
                tries--;
            }
        });

    }
}