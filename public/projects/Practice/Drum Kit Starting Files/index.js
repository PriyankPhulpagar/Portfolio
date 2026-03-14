
var numberOfButtons = document.querySelectorAll(".drum").length;
var i = 0;

while (i < numberOfButtons) {
    document.querySelectorAll(".drum")[i].addEventListener("click",
        function () {
            var buttonInner = this.innerHTML;
            drumBits(buttonInner);
            buttonAnimation(buttonInner);
            
           
        });
    i++;
}

document.addEventListener("keypress", function(event){
    drumBits(event.key);
    buttonAnimation(event.key);
});



function drumBits(key){
    switch (key) {
                case "w":
                    var newAudio = new Audio("sounds/tom-1.mp3");
                    newAudio.play();
                    break;

                case "a":
                    var newAudio = new Audio("sounds/tom-2.mp3");
                    newAudio.play();
                    break;

                case "s":
                    var newAudio = new Audio("sounds/tom-3.mp3");
                    newAudio.play();
                    break;

                case "d":
                    var newAudio = new Audio("sounds/tom-4.mp3");
                    newAudio.play();
                    break;

                case "j":
                    var newAudio = new Audio("sounds/crash.mp3");
                    newAudio.play();
                    break;

                case "k":
                    var newAudio = new Audio("sounds/kick-bass.mp3");
                    newAudio.play();
                    break;

                case "l":
                    var newAudio = new Audio("sounds/snare.mp3");
                    newAudio.play();
                    break;
            
                default:
                    break;
            }
}

function buttonAnimation(currentKey){
    var buttonI = document.querySelector("."+currentKey);
    buttonI.classList.add("pressed");

    setTimeout(
        function () {
            buttonI.classList.remove("pressed");
        }
    ,100);
}

