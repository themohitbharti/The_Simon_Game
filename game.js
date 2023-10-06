

var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;

function nextSequence(){
    userClickedPattern=[];
var randomNumber = Math.floor(Math.random()*4);
var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$("#"+ randomChosenColour).addClass("pressed");
setTimeout(function(){
    $("#"+ randomChosenColour).removeClass("pressed");  
},100);

playSound(randomChosenColour);
level++;
$("h1").html("Level "+level);

}

$(".btn").on("click",function(){
     var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
    var awaj= new Audio("./sounds/"+name+".mp3");
awaj.play();
}

function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+ currentColour).removeClass("pressed");  
    },100);
}

var start=1;
$(document).on("keypress",function(){
    start--;
    if(start==0){
        
        nextSequence();
    }
    
});


function checkAnswer(currentLevel){
   if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
   if(currentLevel==gamePattern.length-1){
    setTimeout(function(){
        
        nextSequence();
    },1000);
   }
   }
   else{
   var galat=new Audio("./sounds/wrong.mp3");
   galat.play();
   $("body").addClass("game-over");
   setTimeout(function(){
    $("body").removeClass("game-over");
   },200);

   $("h1").html("Game Over, Press Any Key to Restart");
   startOver();
   }
}

function startOver(){
level=0;
gamePattern=[];
start=1;
}









