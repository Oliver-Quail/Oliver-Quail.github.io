window.onload = function() {

    var B_Menu = document.getElementById("B_Menu");
    var NavBar = document.getElementById("NavBar");
    var L_Menu = document.getElementsByClassName("L_Menu");
    B_Menu.addEventListener("click", function(){
        if(NavBar.classList.contains("Grow")) {
            NavBar.classList.remove("Grow");
            //NavBar.style.height = "100vh";
            NavBar.classList.add("Shrink");
        }
        else {
            NavBar.classList.add("Grow");
            NavBar.classList.remove("Shrink");
        }
    });

    var LinkFunction =  function() {
        window.location = this.href;
        NavBar.classList.remove("Grow");
        NavBar.classList.add("Shrink");
    }

    for(var Counter = 0; Counter < L_Menu.length; Counter++) {
        L_Menu[Counter].addEventListener("click", LinkFunction, false);
    }

}