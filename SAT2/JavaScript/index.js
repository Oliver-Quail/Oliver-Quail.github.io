window.onload = function() {
    var LoginButton = document.getElementById("Login");
    //Logindata
    var Email = document.getElementById("EmailInput");
    var Password = document.getElementById("PasswordInput");

    LoginButton.onclick = function() {
        alert("clicked");
        if(Email.value == null || Password.value == null || !Email.value.includes("@")) {
            alert("You have left some required form fields blank or have entered invalid data");
        }
        else {
            window.location = 'Menu.html';
        }
    }



}