window.onload = function() {

    var BackButton = document.getElementById('BackButton');
    BackButton.addEventListener('click', function(){
        window.location = 'Menu.html';
    });

    var xhttp =  new XMLHttpRequest();
    xhttp.open("POST", "API.php?Mode=GetProfilePicture", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onload = function() {
        var ProfileImage = document.getElementById("ProfileImage");
        ProfileImage.src = this.responseText;
    }
    xhttp.send();

    var EditEmail = document.getElementById("EditEmail");
    var ConfirmEmail = document.getElementById("ConfirmEmail");
    var NewEmail = document.getElementById("NewEmail");

    EditEmail.addEventListener('click', function(){
        ConfirmEmail.style.display = 'block';
        NewEmail.style.display = 'block';

    });

    ConfirmEmail.addEventListener('click', function(){
        if(NewEmail == '') {
            alert("No email provided");
        }
        else {
            var xhttp =  new XMLHttpRequest();
            xhttp.open("POST", "API.php?Mode=UpdateEmail", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.onload = function() {
                alert("Email updated to " + NewEmail.value);
            }
            xhttp.send("NewEmail="+NewEmail.value);
        }
    });

    var EditName = document.getElementById("EditName");
    var ConfirmName = document.getElementById("ConfirmName");
    var NewName = document.getElementById("NewName");   
    
    EditName.addEventListener('click', function(){
        ConfirmName.style.display = 'block';
        NewName.style.display = 'block';
    });

    ConfirmName.addEventListener('click', function(){
        if(NewEmail == '') {
            alert("No email provided");
        }
        else {
            var xhttp =  new XMLHttpRequest();
            xhttp.open("POST", "API.php?Mode=UpdateName", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.onload = function() {
                alert("Name updated to " + NewName.value);
            }
            xhttp.send("NewName="+NewName.value);
        }
    });

    var TextSize = document.getElementById("TextSize");
    var TitlePreview = document.getElementById("TitlePreview");
    var TextPreview = document.getElementById("TextPreview");
    var DefaultH1 = TitlePreview.style.fontSize;
    TextSize.addEventListener('change', function(){
        TitlePreview.style.fontSize = DefaultH1 + TextSize.value;
        TextPreview.style.fontSize = 16 + TextSize.value;
    });



    var DeleteAccount = document.getElementById("DeleteAccount");

    DeleteAccount.addEventListener('click', function(){
        if(confirm("Are you sure you want to delete your account?")) {
            var xhttp =  new XMLHttpRequest();
            xhttp.open("POST", "API.php?Mode=DeleteAccount", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.onload = function() {
                window.location = 'index.html';
            }
            xhttp.send();
        }
    });


}