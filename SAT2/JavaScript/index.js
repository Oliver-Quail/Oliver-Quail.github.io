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
            var xhttp =  new XMLHttpRequest();
            xhttp.open("POST", "API.php?Mode=Login", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send("Email="+encodeURIComponent(Email.value)+"&Password="+ encodeURIComponent(Password.value));   
            xhttp.onload = function() {
                alert(this.responseText);
                if(this.responseText == "Login success") {
                    window.location = "Home.html";
                }
                else {
                    alert("invalid email or password");
                }
            }        
        }
    }



}