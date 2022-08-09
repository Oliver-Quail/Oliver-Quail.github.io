  
    var xhttp =  new XMLHttpRequest();
    xhttp.open("POST", "API.php?Mode=GetProfilePicture", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    if(typeof Loaded === 'undefined') {
        var Loaded = 1;
    }
    xhttp.onload = function() {

        if(Loaded == 1) {
            var ProfilePicture = document.getElementById("ProfilePicture");
            ProfilePicture.src = this.responseText;
            Loaded++;
        }
        
    } 
    xhttp.send(); 

    var ProfilePicture = document.getElementById("ProfilePicture");
    ProfilePicture.addEventListener("click", function(){
        window.location = "Menu.html";
    });
