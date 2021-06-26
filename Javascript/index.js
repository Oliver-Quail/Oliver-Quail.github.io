window.onload = function() {
    const Typer = document.getElementById("Typer");
    const TextOutput = document.getElementById("Text");


    const Roles = ["Front-end Developer", "Back-end Developer", "UI/UX Designer"];

    var Visable = 1;
    setInterval(function(){
        if(Visable == 1) {
            Visable = 0;
        }
        else {
            Visable = 1;
        }
        Typer.style.opacity = Visable;
    }, 1000);

    var CurrentRole = 0;
    var CurrentLetter = 0;
    var Deleting = false;
    var TextToShow = "";
    setInterval(function(){
        if(CurrentLetter < Roles[CurrentRole].length && Deleting == false) {
            TextToShow += Roles[CurrentRole].charAt(CurrentLetter);
            CurrentLetter++;
            //console.log(CurrentLetter);
            
        }
        else if(CurrentLetter == Roles[CurrentRole].length && Deleting == false) {
            Deleting = true;

        }
        else if (Deleting == true && CurrentLetter >= 1) {
            TextToShow =TextToShow.substring(0, TextToShow.length-1);
            CurrentLetter--;
            console.log(CurrentLetter);
        }
        else {
            Deleting = false;
            CurrentRole++;
            console.log(CurrentRole);
            console.log("Fired");
        }
        TextOutput.textContent = TextToShow;


        
        
        
        if(CurrentLetter <= 0) {
            CurrentLetter = 0;
        }


        if(CurrentRole == Roles.length) {
           CurrentRole = 0; 
        }

    }, 500);


}