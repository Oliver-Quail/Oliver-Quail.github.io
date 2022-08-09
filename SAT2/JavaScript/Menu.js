window.onload = function() {
    var LogOutButton = document.getElementById("LogoutButton");

    LogOutButton.addEventListener('click', function(){
        var xhttp =  new XMLHttpRequest();
        xhttp.open("POST", "API.php?Mode=Logout", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send();
        xhttp.onload = function() {
            window.location = 'index.html';
        }
    });
}