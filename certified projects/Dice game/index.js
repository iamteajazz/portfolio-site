

var randomNumber1 = Math.floor(Math.random() * 6) +1; // random number 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1 - dice6.png
var randomImgSrc = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll ("img")[0]; // this selects the first src img
image1.setAttribute ("src", randomImgSrc); 

var randomNumber2 = Math.floor (Math.random () * 6) +1;
var randomDiceImg2 =  "images/dice" + randomNumber2 + ".png";
document.querySelectorAll ("img") [1].setAttribute ("src", randomDiceImg2);


// if player 1 wins
if (randomNumber1 > randomNumber2){
  
  document.querySelector ("h1").innerHTML = "🥇 player 1 won";  
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector ("h1").innerHTML = " player 2 won🥇";
} 
else { document.querySelector ("h1").innerHTML = "draw!🥇";

}


