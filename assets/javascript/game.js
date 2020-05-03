// Variables
var myNum = 0;
var win = 0;
var loss = 0;

// Random # generators for gems & target score
let compNum = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
let red = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
let green = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
let blue = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
let yellow = (Math.floor(Math.random() * (12 - 1 + 1) + 1));

// Displays the score & win/loss info when page starts
$('#targetNum').html(compNum);
$('#myNum').html(myNum);
$('#win').html(win);
$('#loss').html(loss);


// Checks whether or not both scores are equal or greater & then displays win or loss 
$(".img-thumbnail").click(function(){
    if(myNum === compNum){
        win++;
        $('#win').html(win);
        alert("You won!")
        
        compNum = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
        $('#targetNum').html(compNum);

        red = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
        green = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
        blue = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
        yellow = (Math.floor(Math.random() * (12 - 1 + 1) + 1));

        myNum = 0;

        $('#myNum').html(myNum);
    }
