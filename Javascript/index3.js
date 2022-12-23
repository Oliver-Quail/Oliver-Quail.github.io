window.onload = function() {
    var Roles = document.getElementById("Roles");
    var RolesText = ["Web Developer", "Programmer", "Graphic Designer"];
    var RolesOutputText = "";
    var CounterLength = 0;
    var Counter = 0;
    var RolesTimer = setInterval(() => {
        if(CounterLength < RolesText[Counter].length) {
            RolesOutputText += RolesText[Counter][CounterLength];
            Roles.innerHTML = RolesOutputText;
            CounterLength++;
        }
        else if (Counter == 2) {
            clearInterval(RolesTimer);
        }
        else {
            RolesOutputText += "<br/>";
            CounterLength = 0;
            Counter++;
        }
    }, 200);

    var MenuButton = document.getElementById("MenuButton");
    var Menu = document.getElementById("MenuBar");
    var MenuShown = 0;
    MenuButton.addEventListener("click", function(){
        if(MenuShown == 0) {
            MenuShown = 1;
            Menu.classList.add("ShowMenu");
        }
        else {
            MenuShown = 0;
            Menu.classList.remove("ShowMenu");
        }
    });

}