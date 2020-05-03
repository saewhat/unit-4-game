// Variables
var myNum = 0;
var win = 0;
var loss = 0;

// Random # generators for gems & target score
let compNum = (Math.floor(Math.random() * (101) + 19));
let red = (Math.floor(Math.random() * (12) + 1));
let green = (Math.floor(Math.random() * (12) + 1));
let blue = (Math.floor(Math.random() * (12) + 1));
let yellow = (Math.floor(Math.random() * (12) + 1));

// Console.logs the values of every gem 
function logNums(){
    console.log("Red: " + red);
    console.log("Green: " + green);
    console.log("Blue: " + blue);
    console.log("Yellow: " + yellow);
    console.log("<------Next Game------>")
}

logNums();

// Displays the score & win/loss info when page starts
$('#targetNum').html(compNum);
$('#myNum').html(myNum);
$('#win').html(win);
$('#loss').html(loss);


// Checks whether or not both scores are equal or greater & then displays win or loss 
$(".img-thumbnail").click(function(){
    if(myNum === compNum){
        win++;
        alert("You won!")
        $('#win').html(win);
        
        compNum = (Math.floor(Math.random() * (101) + 19));
        $('#targetNum').html(compNum);

        red = (Math.floor(Math.random() * (12) + 1));
        console.log("Red: " + red);
        green = (Math.floor(Math.random() * (12) + 1));
        console.log("Green: " + green);
        blue = (Math.floor(Math.random() * (12) + 1));
        console.log("Blue: " + blue);
        yellow = (Math.floor(Math.random() * (12) + 1));
        console.log("Yellow: " + yellow);

        myNum = 0;
        $('#myNum').html(myNum);
    }
    if(myNum > compNum){
        loss++;
        alert("You lost! Try again?")
        $('#loss').html(loss);
        
        compNum = (Math.floor(Math.random() * (101) + 19));
        $('#targetNum').html(compNum);

        red = (Math.floor(Math.random() * (12) + 1));
        console.log("Red: " + red);
        green = (Math.floor(Math.random() * (12) + 1));
        console.log("Green: " + green);
        blue = (Math.floor(Math.random() * (12) + 1));
        console.log("Blue: " + blue);
        yellow = (Math.floor(Math.random() * (12) + 1));
        console.log("Yellow: " + yellow);

        myNum = 0;
        $('#myNum').html(myNum);
    }
})

// Applies addition & displays the #'s when crystal images are clicked

$('#red').click(function(){
    myNum = red + myNum;
    $('#myNum').html(myNum)
})
$('#green').click(function(){
    myNum = green + myNum;
    $('#myNum').html(myNum)
})
$('#blue').click(function(){
    myNum = blue + myNum;
    $('#myNum').html(myNum)
})
$('#yellow').click(function(){
    myNum = yellow + myNum;
    $('#myNum').html(myNum)
})