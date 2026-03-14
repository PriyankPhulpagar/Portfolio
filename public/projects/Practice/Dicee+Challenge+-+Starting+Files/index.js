
var randomNumber = Math.floor(Math.random()*6)+1;

var randomImage = "./images/dice"+randomNumber+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "./images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumber > randomNumber2){
    document.querySelector("h1").textContent = "Player1 Wins!!!";
}
else if(randomNumber2 > randomNumber){
    document.querySelector("h1").textContent="Player2 Wins!!!";
}
else{
    document.querySelector("h1").textContent="Draw!!!";
}